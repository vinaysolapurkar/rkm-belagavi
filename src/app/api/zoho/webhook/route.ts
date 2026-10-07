import { NextResponse } from "next/server";
import { hmacMatches } from "@/lib/zoho";

export const runtime = "nodejs";

// Register in Zoho Payments → Settings → Developer Space → Webhooks:
//   https://www.rkmbelagavi.org/api/zoho/webhook
// Events: payment.success, payment.failed
export async function POST(req: Request) {
  const raw = await req.text();
  const header = req.headers.get("x-zoho-webhook-signature") ?? "";
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i).trim(), p.slice(i + 1).trim()];
    })
  );

  const key = process.env.ZOHO_WEBHOOK_SIGNING_KEY;
  const verified = Boolean(key && parts.t && parts.v && hmacMatches(`${parts.t}.${raw}`, key, parts.v));

  if (!verified) {
    // Zoho pings once on registration (before we have the key) — acknowledge, but trust nothing.
    console.warn("[zoho/webhook] unverified request ignored");
    return NextResponse.json({ ok: true });
  }

  let event: Record<string, unknown> = {};
  try {
    event = JSON.parse(raw);
  } catch {}
  // Vercel logs are the audit trail; Zoho's dashboard holds the donor details.
  console.log("[zoho/webhook]", JSON.stringify(event));
  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true });
}
