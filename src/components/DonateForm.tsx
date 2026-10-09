"use client";
import { useState } from "react";
import { PURPOSES } from "@/lib/donation";

type Status = "idle" | "processing" | "success" | "pending" | "error";

type ZPaymentsInstance = {
  requestPaymentMethod: (opts: Record<string, unknown>) => Promise<{
    payment_id?: string;
    payment_session_id?: string;
    signature?: string;
  }>;
  close: () => Promise<void>;
};

declare global {
  interface Window {
    ZPayments?: new (config: Record<string, unknown>) => ZPaymentsInstance;
  }
}

const SCRIPT_SRC = "https://static.zohocdn.com/zpay/zpay-js/v1/zpayments.js";
const PRESETS = [501, 1001, 2501, 5001, 10001];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #e0d5cc",
  fontSize: "15px",
  color: "#2D2A26",
  background: "#fff",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "#2D2A26",
  marginBottom: "6px",
};

// Zoho asks for one widget instance per page. Creating a new one on every
// click left the previous popup (with the old amount) stacked on top.
let widget: ZPaymentsInstance | null = null;

async function getWidget(accountId: string, apiKey: string): Promise<ZPaymentsInstance> {
  if (widget) return widget;
  await loadScript();
  widget = new window.ZPayments!({ account_id: accountId, domain: "IN", otherOptions: { api_key: apiKey } });
  return widget;
}

function loadScript(): Promise<void> {
  if (window.ZPayments) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load the payment window."));
    document.body.appendChild(s);
  });
}

const inr = (n: number | string) => `₹${Number(n).toLocaleString("en-IN")}`;

export default function DonateForm() {
  const [amount, setAmount] = useState<string>("1001");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState<{ amount: string; paymentId: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("processing");
    setMessage("");

    let instance: ZPaymentsInstance | null = null;
    try {
      const sessionRes = await fetch("/api/donate/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, amount: Number(amount) }),
      });
      const session = await sessionRes.json();
      if (!sessionRes.ok) throw new Error(session.error);

      instance = await getWidget(session.accountId, session.apiKey);

      const result = await instance.requestPaymentMethod({
        amount: String(amount),
        currency_code: "INR",
        currency_symbol: "₹",
        payments_session_id: session.sessionId,
        business: "Ramakrishna Mission Ashrama, Belagavi",
        description: `Donation – ${session.purpose}`,
        reference_number: session.reference,
        address: { name: data.name, email: data.email, phone: data.phone },
      });

      const verifyRes = await fetch("/api/donate/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_id: result.payment_id,
          payment_session_id: result.payment_session_id ?? session.sessionId,
          signature: result.signature,
        }),
      });
      const verified = await verifyRes.json();

      if (verifyRes.ok && verified.status === "succeeded") {
        setReceipt({ amount: verified.amount, paymentId: verified.paymentId });
        setStatus("success");
      } else {
        setReceipt(result.payment_id ? { amount, paymentId: result.payment_id } : null);
        setStatus("pending");
      }
    } catch (err) {
      const code = (err as { code?: string })?.code;
      if (code === "widget_closed") {
        setStatus("idle");
      } else {
        setMessage(
          (err as Error)?.message ||
            "The payment could not be completed. No money has been taken. Please try again."
        );
        setStatus("error");
      }
    } finally {
      await instance?.close().catch(() => {});
    }
  }

  if (status === "success" || status === "pending") {
    return (
      <div
        role="status"
        style={{ background: "#F3EDE4", border: "1px solid #d8c9b3", borderLeft: "4px solid #C4922A", padding: "28px 30px" }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#2D2A26", marginBottom: "8px" }}>
          {status === "success" ? "Thank you for your offering" : "We are confirming your payment"}
        </h3>
        <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7 }}>
          {status === "success"
            ? `Your donation of ${inr(receipt!.amount)} has been received. A payment receipt has been emailed to you. The Ashrama will send your 80G receipt separately.`
            : "Your bank has not confirmed the payment yet. If money was deducted, it will be credited to the Ashrama or refunded automatically."}
        </p>
        {receipt && (
          <p style={{ fontSize: "14px", color: "#5A5650", marginTop: "12px" }}>
            Payment ID: <strong>{receipt.paymentId}</strong>
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <span style={labelStyle}>
          Amount (₹) <span style={{ color: "#C4922A" }}>*</span>
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              style={{
                padding: "10px 16px",
                border: "1px solid #d8c9b3",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                background: amount === String(p) ? "#1A2F2F" : "#fff",
                color: amount === String(p) ? "#fff" : "#2D2A26",
              }}
            >
              {inr(p)}
            </button>
          ))}
        </div>
        <input
          type="number"
          name="amount"
          aria-label="Amount in rupees"
          min={1}
          max={1000000}
          step={1}
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Or enter any amount"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="purpose" style={labelStyle}>Purpose</label>
        <select id="purpose" name="purpose" style={inputStyle} defaultValue={PURPOSES[0]}>
          {PURPOSES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <label htmlFor="d-name" style={labelStyle}>
            Full Name <span style={{ color: "#C4922A" }}>*</span>
          </label>
          <input id="d-name" name="name" required maxLength={100} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="d-email" style={labelStyle}>
            Email <span style={{ color: "#C4922A" }}>*</span>
          </label>
          <input id="d-email" name="email" type="email" required maxLength={100} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="d-phone" style={labelStyle}>
            Phone <span style={{ color: "#C4922A" }}>*</span>
          </label>
          <input id="d-phone" name="phone" type="tel" required maxLength={15} pattern="[0-9+ ]{10,15}" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="d-pan" style={labelStyle}>
            PAN <span style={{ color: "#C4922A" }}>*</span>
          </label>
          <input
            id="d-pan"
            name="pan"
            required
            maxLength={10}
            pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]"
            placeholder="ABCDE1234F"
            style={{ ...inputStyle, textTransform: "uppercase" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="d-address" style={labelStyle}>Postal Address (for 80G receipt)</label>
        <textarea id="d-address" name="address" rows={3} maxLength={250} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "#B3261E", fontSize: "14px", lineHeight: 1.6 }}>
          {message}
        </p>
      )}

      <button
        type="submit"
        className="btn-orange"
        disabled={status === "processing"}
        style={{ width: "100%", textAlign: "center", padding: "14px 28px", fontSize: "15px", opacity: status === "processing" ? 0.7 : 1 }}
      >
        {status === "processing" ? "Opening secure payment…" : `Donate ${amount ? inr(amount) : ""}`}
      </button>
      <p style={{ fontSize: "13px", color: "#7A756D", textAlign: "center" }}>
        UPI, cards and net banking · Payments processed securely by Zoho Payments
      </p>
    </form>
  );
}
