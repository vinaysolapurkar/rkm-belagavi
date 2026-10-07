import crypto from "crypto";

// Zoho Payments (India data centre). All secrets come from Vercel env vars.
const API_BASE = "https://payments.zoho.in/api/v1";
const TOKEN_URL = "https://accounts.zoho.in/oauth/v2/token";

export function zohoEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var ${name}`);
  return v;
}

// Access tokens last ~1 hour; reuse one per warm serverless instance.
let cached: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.token;

  const params = new URLSearchParams({
    refresh_token: zohoEnv("ZOHO_REFRESH_TOKEN"),
    client_id: zohoEnv("ZOHO_CLIENT_ID"),
    client_secret: zohoEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });
  const res = await fetch(`${TOKEN_URL}?${params}`, { method: "POST", cache: "no-store" });
  const body = await res.json();
  if (!res.ok || !body.access_token) {
    throw new Error(`Zoho token refresh failed: ${body.error || res.status}`);
  }
  cached = { token: body.access_token, expiresAt: Date.now() + (body.expires_in ?? 3600) * 1000 };
  return cached.token;
}

export async function zohoApi<T = Record<string, unknown>>(
  path: string,
  init: { method?: "GET" | "POST"; body?: unknown } = {}
): Promise<T> {
  const token = await getAccessToken();
  const sep = path.includes("?") ? "&" : "?";
  const res = await fetch(`${API_BASE}${path}${sep}account_id=${zohoEnv("ZOHO_ACCOUNT_ID")}`, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.code !== 0) {
    throw new Error(`Zoho API ${path} failed: ${body.message || res.status}`);
  }
  return body as T;
}

// Constant-time compare of an HMAC-SHA256 against a hex or base64 signature.
export function hmacMatches(data: string, key: string, signature: string): boolean {
  const mac = crypto.createHmac("sha256", key).update(data).digest();
  for (const enc of ["hex", "base64"] as const) {
    const given = Buffer.from(signature, enc);
    if (given.length === mac.length && crypto.timingSafeEqual(given, mac)) return true;
  }
  return false;
}
