"use client";
import { useState } from "react";

type Donation = {
  date: number;
  name: string;
  pan: string;
  address: string;
  phone: string;
  email: string;
  purpose: string;
  amount: string;
  status: string;
  method: string;
  paymentId: string;
  bankRef: string;
  reference: string;
};

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  border: "1px solid #e0d5cc",
  fontSize: "15px",
  color: "#2D2A26",
  background: "#fff",
};

const istDay = (d: Date) => d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }); // YYYY-MM-DD
const fmtDate = (sec: number) =>
  new Date(sec * 1000).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
const inr = (n: number | string) => `₹${Number(n).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

const COLUMNS: [keyof Donation | "dateText", string][] = [
  ["dateText", "Date"],
  ["name", "Donor Name"],
  ["pan", "PAN"],
  ["address", "Address"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["purpose", "Purpose"],
  ["amount", "Amount (₹)"],
  ["status", "Status"],
  ["method", "Method"],
  ["paymentId", "Zoho Payment ID"],
  ["bankRef", "Bank Reference"],
  ["reference", "Website Reference"],
];

function downloadCsv(rows: Donation[], from: string, to: string) {
  const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [
    COLUMNS.map(([, h]) => esc(h)).join(","),
    ...rows.map((r) =>
      COLUMNS.map(([k]) => esc(k === "dateText" ? fmtDate(r.date) : String(r[k as keyof Donation]))).join(",")
    ),
  ];
  // BOM so Excel opens ₹ and Indian names correctly.
  const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `RKM-Belagavi-Donations_${from}_to_${to}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function DonorRegister() {
  const now = new Date();
  const [password, setPassword] = useState("");
  const [from, setFrom] = useState(istDay(new Date(now.getFullYear(), now.getMonth(), 1)));
  const [to, setTo] = useState(istDay(now));
  const [rows, setRows] = useState<Donation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, from, to }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setRows(data.donations);
    } catch (err) {
      setRows(null);
      setError((err as Error).message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const total = (rows ?? []).filter((r) => r.status === "succeeded").reduce((s, r) => s + Number(r.amount), 0);

  return (
    <div>
      <form onSubmit={load} style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "flex-end", marginBottom: "24px" }}>
        <label style={{ fontSize: "14px", fontWeight: 600, color: "#2D2A26" }}>
          Password
          <br />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" style={inputStyle} />
        </label>
        <label style={{ fontSize: "14px", fontWeight: 600, color: "#2D2A26" }}>
          From
          <br />
          <input type="date" required value={from} max={to} onChange={(e) => setFrom(e.target.value)} style={inputStyle} />
        </label>
        <label style={{ fontSize: "14px", fontWeight: 600, color: "#2D2A26" }}>
          To
          <br />
          <input type="date" required value={to} min={from} onChange={(e) => setTo(e.target.value)} style={inputStyle} />
        </label>
        <button type="submit" className="btn-orange" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
          {loading ? "Loading…" : "Show Donations"}
        </button>
      </form>

      {error && (
        <p role="alert" style={{ color: "#B3261E", fontSize: "14px", marginBottom: "16px" }}>
          {error}
        </p>
      )}

      {rows && (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <p style={{ fontSize: "15px", color: "#2D2A26" }}>
              <strong>{rows.length}</strong> donation{rows.length === 1 ? "" : "s"} · Total received <strong>{inr(total)}</strong>
            </p>
            {rows.length > 0 && (
              <button type="button" className="btn-orange" onClick={() => downloadCsv(rows, from, to)}>
                Download Excel (CSV)
              </button>
            )}
          </div>

          <div style={{ overflowX: "auto", border: "1px solid #e0d5cc", background: "#fff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "1100px" }}>
              <thead>
                <tr style={{ background: "#1A2F2F", color: "#fff", textAlign: "left" }}>
                  {COLUMNS.map(([k, h]) => (
                    <th key={k} style={{ padding: "10px 12px", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={COLUMNS.length} style={{ padding: "20px", textAlign: "center", color: "#5A5650" }}>
                      No donations in this period.
                    </td>
                  </tr>
                )}
                {rows.map((r, i) => (
                  <tr key={r.paymentId} style={{ background: i % 2 ? "#FAF6F0" : "#fff", color: "#2D2A26", verticalAlign: "top" }}>
                    <td style={{ padding: "9px 12px", whiteSpace: "nowrap" }}>{fmtDate(r.date)}</td>
                    <td style={{ padding: "9px 12px" }}>{r.name}</td>
                    <td style={{ padding: "9px 12px", whiteSpace: "nowrap" }}>{r.pan}</td>
                    <td style={{ padding: "9px 12px", minWidth: "200px" }}>{r.address}</td>
                    <td style={{ padding: "9px 12px", whiteSpace: "nowrap" }}>{r.phone}</td>
                    <td style={{ padding: "9px 12px" }}>{r.email}</td>
                    <td style={{ padding: "9px 12px" }}>{r.purpose}</td>
                    <td style={{ padding: "9px 12px", whiteSpace: "nowrap", textAlign: "right" }}>{inr(r.amount)}</td>
                    <td style={{ padding: "9px 12px" }}>{r.status.replace(/_/g, " ")}</td>
                    <td style={{ padding: "9px 12px" }}>{r.method}</td>
                    <td style={{ padding: "9px 12px" }}>{r.paymentId}</td>
                    <td style={{ padding: "9px 12px" }}>{r.bankRef}</td>
                    <td style={{ padding: "9px 12px" }}>{r.reference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
