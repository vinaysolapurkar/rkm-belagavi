"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// FormSubmit.co AJAX endpoint. The primary address (your Gmail) is the
// activation endpoint; belgaum@rkmm.org receives a copy via _cc.
const ENDPOINT = "https://formsubmit.co/ajax/vinaysolapurkar@gmail.com";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #e0d5cc",
  fontSize: "15px",
  color: "#2D2A26",
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "#2D2A26",
  marginBottom: "6px",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field; humans never see it.
    if (data.get("_honey")) return;

    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
      _cc: "belgaum@rkmm.org",
      _subject: "New enquiry from rkmbelagavi.org contact form",
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMsg(body?.message || "Something went wrong. Please try again or email us directly.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not send your message. Please check your connection or email us directly at belgaum@rkmm.org.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        style={{
          background: "#F3EDE4",
          border: "1px solid #d8c9b3",
          borderLeft: "4px solid #C4922A",
          padding: "28px 30px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#2D2A26", marginBottom: "8px" }}>
          Thank you for reaching out
        </h3>
        <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7 }}>
          Your message has been sent to the Ashrama. We will get back to you as soon as possible.
          For urgent matters, please call <strong>0831-297 0320 / 297 0321</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Your Name <span style={{ color: "#C4922A" }}>*</span>
        </label>
        <input type="text" id="name" name="name" required placeholder="Enter your name" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Your Email <span style={{ color: "#C4922A" }}>*</span>
        </label>
        <input type="email" id="email" name="email" required placeholder="Enter your email address" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>
          Phone Number
        </label>
        <input type="tel" id="phone" name="phone" placeholder="Your phone number (optional)" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>
          Subject <span style={{ color: "#C4922A" }}>*</span>
        </label>
        <input type="text" id="subject" name="subject" required placeholder="Subject of your message" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Your Message <span style={{ color: "#C4922A" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Write your message here..."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Honeypot field — hidden from users, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      {status === "error" && (
        <p role="alert" style={{ color: "#B3261E", fontSize: "14px", lineHeight: 1.6 }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn-orange"
        disabled={status === "submitting"}
        style={{ width: "100%", textAlign: "center", padding: "14px 28px", fontSize: "15px", opacity: status === "submitting" ? 0.7 : 1, cursor: status === "submitting" ? "not-allowed" : "pointer" }}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
