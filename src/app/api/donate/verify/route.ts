import { NextResponse } from "next/server";
import { hmacMatches, zohoApi } from "@/lib/zoho";

export const runtime = "nodejs";

type Payment = { payment_id: string; status: string; amount: string; payments_session_id: string };

export async function POST(req: Request) {
  const { payment_id, payment_session_id, signature } = (await req.json().catch(() => ({}))) as Record<string, string>;
  if (!/^\d+$/.test(payment_id ?? "") || !/^\d+$/.test(payment_session_id ?? "")) {
    return NextResponse.json({ error: "Invalid payment reference." }, { status: 400 });
  }

  // Widget signature: HMAC-SHA256("payment_id|payment_session_id", signing key).
  const key = process.env.ZOHO_SIGNING_KEY;
  if (key && signature && !hmacMatches(`${payment_id}|${payment_session_id}`, key, signature)) {
    return NextResponse.json({ error: "Payment signature mismatch." }, { status: 400 });
  }

  // Source of truth: ask Zoho directly what happened to this payment.
  try {
    const { payment } = await zohoApi<{ payment: Payment }>(`/payments/${payment_id}`);
    if (payment.payments_session_id !== payment_session_id) {
      return NextResponse.json({ error: "Payment does not match this session." }, { status: 400 });
    }
    return NextResponse.json({ status: payment.status, amount: payment.amount, paymentId: payment.payment_id });
  } catch (err) {
    console.error("[donate/verify]", err);
    return NextResponse.json({ error: "Could not confirm the payment yet." }, { status: 502 });
  }
}
