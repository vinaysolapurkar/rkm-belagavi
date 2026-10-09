import { NextResponse } from "next/server";
import { zohoApi, zohoEnv } from "@/lib/zoho";
import { PAN_PATTERN, PURPOSES } from "@/lib/donation";

export const runtime = "nodejs";

const clip = (v: unknown, n: number) => String(v ?? "").trim().slice(0, n);

export async function POST(req: Request) {
  const input = await req.json().catch(() => null);
  if (!input) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const amount = Number(input.amount);
  const name = clip(input.name, 100);
  const email = clip(input.email, 100);
  const phone = clip(input.phone, 15).replace(/[^\d+]/g, "");
  const pan = clip(input.pan, 10).toUpperCase();
  const address = clip(input.address, 250);
  const purpose = PURPOSES.includes(input.purpose) ? input.purpose : PURPOSES[0];

  if (!Number.isInteger(amount) || amount < 1 || amount > 1_000_000) {
    return NextResponse.json({ error: "Please enter an amount between ₹1 and ₹10,00,000." }, { status: 400 });
  }
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }
  // PAN is mandatory: every online donation gets an 80G-eligible receipt.
  // Donors who prefer not to share it use the online hundi QR instead.
  if (!PAN_PATTERN.test(pan)) {
    return NextResponse.json({ error: "Please enter a valid PAN, e.g. ABCDE1234F." }, { status: 400 });
  }

  const reference = `DON-${Date.now().toString(36).toUpperCase()}`;

  try {
    const data = await zohoApi<{ payments_session: { payments_session_id: string } }>("/paymentsessions", {
      method: "POST",
      body: {
        amount,
        currency: "INR",
        description: `Donation – ${purpose}`,
        reference_number: reference,
        meta_data: [
          { key: "donor_name", value: name },
          { key: "pan", value: pan },
          { key: "address", value: address || "not given" },
          { key: "purpose", value: purpose },
          { key: "phone", value: phone || "not given" },
        ],
      },
    });

    return NextResponse.json({
      sessionId: data.payments_session.payments_session_id,
      reference,
      purpose,
      // Public widget credentials (Zoho designs the API key for client code).
      accountId: zohoEnv("ZOHO_ACCOUNT_ID"),
      apiKey: zohoEnv("ZOHO_API_KEY"),
    });
  } catch (err) {
    console.error("[donate/session]", err);
    return NextResponse.json(
      { error: "Online giving is temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  }
}
