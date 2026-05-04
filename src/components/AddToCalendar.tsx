"use client";
import { useState, useRef, useEffect } from "react";

interface AddToCalendarProps {
  title: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate: string;
  allDay?: boolean;
  buttonStyle?: React.CSSProperties;
  buttonLabel?: string;
}

function formatDate(date: string, allDay: boolean) {
  const d = new Date(date);
  if (allDay) {
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
  }
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildIcs({ title, description, location, startDate, endDate, allDay }: AddToCalendarProps) {
  const start = formatDate(startDate, !!allDay);
  const end = formatDate(endDate, !!allDay);
  const uid = `${Date.now()}@rkmissionashrama.org`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const dt = allDay ? "DTSTART;VALUE=DATE" : "DTSTART";
  const dtEnd = allDay ? "DTEND;VALUE=DATE" : "DTEND";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ramakrishna Mission Ashrama Belagavi//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `${dt}:${start}`,
    `${dtEnd}:${end}`,
    `SUMMARY:${title}`,
    description ? `DESCRIPTION:${description.replace(/\n/g, "\\n")}` : "",
    location ? `LOCATION:${location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean).join("\r\n");
}

function googleUrl({ title, description, location, startDate, endDate, allDay }: AddToCalendarProps) {
  const dates = `${formatDate(startDate, !!allDay)}/${formatDate(endDate, !!allDay)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates,
    ...(description ? { details: description } : {}),
    ...(location ? { location } : {}),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function outlookUrl({ title, description, location, startDate, endDate }: AddToCalendarProps) {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: new Date(startDate).toISOString(),
    enddt: new Date(endDate).toISOString(),
    ...(description ? { body: description } : {}),
    ...(location ? { location } : {}),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`;
}

export default function AddToCalendar(props: AddToCalendarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const downloadIcs = () => {
    const ics = buildIcs(props);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${props.title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  const defaultButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    background: "transparent",
    color: "#B8860B",
    border: "1px solid #B8860B",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); setOpen((o) => !o); }}
        style={{ ...defaultButton, ...(props.buttonStyle || {}) }}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="12" y1="14" x2="12" y2="18" />
          <line x1="10" y1="16" x2="14" y2="16" />
        </svg>
        {props.buttonLabel || "Add to Calendar"}
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            background: "#fff",
            border: "1px solid #E8E2D8",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            borderRadius: "4px",
            minWidth: "220px",
            zIndex: 100,
            overflow: "hidden",
          }}
        >
          <a
            href={googleUrl(props)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={menuItemStyle}
            className="cal-menu-item"
          >
            <span style={iconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4285F4"><path d="M21.6 11.06a8.4 8.4 0 0 1-.21 1.93h-9.4v-3.65h5.39a4.6 4.6 0 0 1-2 3.02v2.51h3.24a9.78 9.78 0 0 0 2.98-7.41z"/><path d="M12 21.6c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51a6.1 6.1 0 0 1-3.38.95 5.95 5.95 0 0 1-5.6-4.13H3.07v2.59A10 10 0 0 0 12 21.6z" fill="#34A853"/><path d="M6.4 13.48a6 6 0 0 1 0-3.83V7.06H3.07a10 10 0 0 0 0 9.01l3.33-2.59z" fill="#FBBC04"/><path d="M12 6.45a5.43 5.43 0 0 1 3.84 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2.4 10 10 0 0 0 3.07 7.06l3.33 2.59A5.95 5.95 0 0 1 12 6.45z" fill="#EA4335"/></svg>
            </span>
            Google Calendar
          </a>
          <a
            href={outlookUrl(props)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={menuItemStyle}
            className="cal-menu-item"
          >
            <span style={iconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0078D4"><path d="M7 5h11.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 7 5zm.5 1v12h11V6h-11zM2 7l10-2v14L2 17V7z"/></svg>
            </span>
            Outlook
          </a>
          <button
            type="button"
            onClick={downloadIcs}
            style={{ ...menuItemStyle, width: "100%", border: "none", background: "transparent", textAlign: "left", cursor: "pointer" }}
            className="cal-menu-item"
          >
            <span style={iconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </span>
            Apple / .ics download
          </button>
        </div>
      )}
    </div>
  );
}

const menuItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#1A2F2F",
  textDecoration: "none",
  fontWeight: 500,
  borderBottom: "1px solid #F3EDE4",
  transition: "background 0.15s",
};

const iconWrap: React.CSSProperties = {
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};
