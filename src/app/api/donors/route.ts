import crypto from "crypto";
import { NextResponse } from "next/server";
import { zohoApi } from "@/lib/zoho";

export const runtime = "nodejs";
export const maxDuration = 60;

// Donor Register: lists donations with the donor details Zoho stores but does
// not show on its own payment screen (PAN, address, purpose).

type ListedPayment = {
  payment_id: string;
  status: string;
  amount: string;
  date: number;
  customer_name?: string;
  customer_email?: string;
  receipt_email?: string;
  phone?: string;
  reference_number?: string;
  transaction_reference_number?: string;
  payment_method?: { type?: string } | string;
};
type PaymentDetail = ListedPayment & { description?: string; meta_data?: { key: string; value: string }[] };

const SHOWN_STATUSES = new Set(["succeeded", "refunded", "partially_refunded"]);

// Payment details don't change once settled; keep them for warm instances.
const detailCache = new Map<string, PaymentDetail>();

function passwordOk(given: unknown): boolean {
  const expected = process.env.DONOR_REGISTER_PASSWORD;
  if (!expected || typeof given !== "string") return false;
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

// "2026-10-01" → epoch seconds at that IST midnight.
const istEpoch = (day: string) => Math.floor(new Date(`${day}T00:00:00+05:30`).getTime() / 1000);

async function listPayments(fromSec: number, toSec: number): Promise<ListedPayment[]> {
  const out: ListedPayment[] = [];
  // Newest first; stop paging once we're past the start of the range.
  for (let page = 1; page <= 50; page++) {
    const res = await zohoApi<{ payments: ListedPayment[]; page_context: { has_more_page: boolean } }>(
      `/payments?per_page=200&page=${page}`
    );
    out.push(...res.payments);
    const oldest = res.payments[res.payments.length - 1];
    if (!res.page_context.has_more_page || (oldest && oldest.date < fromSec)) break;
  }
  return out.filter((p) => p.date >= fromSec && p.date < toSec && SHOWN_STATUSES.has(p.status));
}

async function detail(id: string): Promise<PaymentDetail> {
  const hit = detailCache.get(id);
  if (hit) return hit;
  const { payment } = await zohoApi<{ payment: PaymentDetail }>(`/payments/${id}`);
  if (payment.status === "succeeded") detailCache.set(id, payment);
  return payment;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!passwordOk(body.password)) {
    await new Promise((r) => setTimeout(r, 1000)); // slow down guessing
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const dayRe = /^\d{4}-\d{2}-\d{2}$/;
  if (!dayRe.test(body.from ?? "") || !dayRe.test(body.to ?? "")) {
    return NextResponse.json({ error: "Please choose a date range." }, { status: 400 });
  }
  const fromSec = istEpoch(body.from);
  const toSec = istEpoch(body.to) + 86_400; // include the whole "to" day

  try {
    const listed = await listPayments(fromSec, toSec);
    const rows = [];
    for (let i = 0; i < listed.length; i += 5) {
      const batch = await Promise.all(listed.slice(i, i + 5).map((p) => detail(p.payment_id)));
      rows.push(...batch);
    }

    const donations = rows.map((p) => {
      const meta = Object.fromEntries((p.meta_data ?? []).map((m) => [m.key, m.value]));
      const method = typeof p.payment_method === "string" ? p.payment_method : p.payment_method?.type;
      return {
        date: p.date,
        name: meta.donor_name || p.customer_name || "",
        pan: meta.pan || "",
        address: meta.address || "",
        phone: meta.phone || p.phone || "",
        email: p.receipt_email || p.customer_email || "",
        purpose: meta.purpose || (p.description ?? "").replace(/^Donation – /, ""),
        amount: p.amount,
        status: p.status,
        method: method || "",
        paymentId: p.payment_id,
        bankRef: p.transaction_reference_number || "",
        reference: p.reference_number || "",
      };
    });
    return NextResponse.json({ donations });
  } catch (err) {
    console.error("[donors]", err);
    return NextResponse.json({ error: "Could not fetch donations from Zoho. Please try again." }, { status: 502 });
  }
}
