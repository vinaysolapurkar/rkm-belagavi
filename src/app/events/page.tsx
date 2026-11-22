import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";
import AddToCalendar from "@/components/AddToCalendar";
import events from "@/content/events.json";
import { visible } from "@/lib/content";

export const metadata = {
  title: "Events – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const upcoming = visible(events.upcoming);
const jayantis = visible(events.jayantis);
const pastEvents = visible(events.pastEvents) as { title: string; date: string; description: string; image: string | null; imageAlt: string | null; href?: string }[];

export default function EventsPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Events"
        subtitle="A chronicle of memorable events — from spiritual celebrations and historic ceremonies to community service programmes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      {/* Intro */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              {events.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section id="upcoming" className="scroll-mt-28" style={{ padding: "60px 0 80px", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Upcoming Events" />
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            {upcoming.map((ev) => (
            <div
              key={ev.title}
              className="reveal activity-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                alignItems: "start",
                background: "#fff",
                border: "1px solid #E8E2D8",
                borderTop: "3px solid #B8860B",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src={ev.image}
                  alt={ev.imageAlt}
                  width={450}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  sizes="450px"
                />
              </div>
              <div style={{ padding: "28px 24px 28px 0" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>
                  {ev.dates}
                </p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "24px", fontWeight: 600, color: "#1A2F2F",
                  marginBottom: "14px", lineHeight: 1.3,
                }}>
                  {ev.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#4A4743", lineHeight: 1.8, marginBottom: "20px" }}>
                  {ev.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <Link href={ev.learnMoreHref} style={{ fontSize: "13px", fontWeight: 700, color: "#B8860B", textTransform: "uppercase", letterSpacing: "1.5px", textDecoration: "none", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "2px" }}>
                    Learn More &rsaquo;
                  </Link>
                  <AddToCalendar
                    title={ev.calendar.title}
                    description={ev.calendar.description}
                    location="Ramakrishna Mission Ashrama, Fort, Belagavi 590016, Karnataka, India"
                    startDate={ev.calendar.startDate}
                    endDate={ev.calendar.endDate}
                    allDay
                  />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual Calendar (Jayantis) ── */}
      <section id="annual-calendar" className="scroll-mt-28" style={{ padding: "80px 0 60px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Annual Calendar — Upcoming Jayantis" />
          </div>
          <p className="reveal" style={{ maxWidth: "780px", margin: "0 auto 40px", fontSize: "15px", color: "#5A5650", lineHeight: 1.85, textAlign: "center" }}>
            {events.jayantisIntro}
          </p>

          <div style={{ maxWidth: "880px", margin: "0 auto", background: "#fff", border: "1px solid #E8E2D8", boxShadow: "0 4px 20px rgba(26,47,47,0.06)" }}>
            {jayantis.map((j, idx, arr) => {
              const next = new Date(j.iso);
              next.setUTCDate(next.getUTCDate() + 1);
              const endIso = next.toISOString().slice(0, 10);
              return (
              <div
                key={j.title}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr auto",
                  gap: "20px",
                  padding: "20px 28px",
                  borderBottom: idx < arr.length - 1 ? "1px solid #E8E2D8" : "none",
                  alignItems: "center",
                }}
              >
                <div style={{ borderRight: "2px solid #B8860B", paddingRight: "20px" }}>
                  <p style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#1A2F2F",
                    lineHeight: 1.2,
                  }}>
                    {j.date}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#B8860B",
                    marginTop: "4px",
                  }}>
                    {j.day}
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#2D2A26",
                    marginBottom: "4px",
                  }}>
                    {j.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.7 }}>
                    {j.desc}
                  </p>
                </div>
                <AddToCalendar
                  title={`${j.title} — Ramakrishna Mission Ashrama, Belagavi`}
                  description={`${j.desc}. Observed at Ramakrishna Mission Ashrama, Belagavi with special worship, devotional music, and discourses.`}
                  location="Ramakrishna Mission Ashrama, Fort, Belagavi 590016, Karnataka, India"
                  startDate={j.iso}
                  endDate={endIso}
                  allDay
                  buttonLabel="Save"
                  buttonStyle={{ padding: "8px 14px", fontSize: "11px", letterSpacing: "1.5px" }}
                />
              </div>
              );
            })}
          </div>
          <p className="reveal" style={{ maxWidth: "780px", margin: "30px auto 0", fontSize: "13px", color: "#7A756D", textAlign: "center", fontStyle: "italic" }}>
            {events.jayantisNote}
          </p>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section id="past" className="scroll-mt-28" style={{ padding: "80px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Past Events" />
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            {pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="reveal"
                style={{
                  borderBottom: idx < pastEvents.length - 1 ? "1px solid #e5e0da" : "none",
                  paddingBottom: idx < pastEvents.length - 1 ? "40px" : "0",
                }}
              >
                {event.image ? (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "start" }}>
                    <div>
                      <p style={{ color: "#C4922A", fontSize: "13px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{event.date}</p>
                      <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#2D2A26", marginBottom: "14px", lineHeight: 1.3 }}>
                        {event.title}
                      </h3>
                      <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, textAlign: "justify" }}>
                        {event.description}
                      </p>
                      {event.href && (
                        <Link href={event.href} style={{ display: "inline-block", marginTop: "16px", fontSize: "13px", fontWeight: 700, color: "#B8860B", textTransform: "uppercase", letterSpacing: "1.5px", textDecoration: "none", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "2px" }}>
                          View Photo Gallery &rsaquo;
                        </Link>
                      )}
                    </div>
                    <div style={{ position: "relative", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                      <Image
                        src={event.image}
                        alt={event.imageAlt || event.title}
                        width={450}
                        height={338}
                        style={{ width: "100%", height: "auto" }}
                        sizes="450px"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: "#C4922A", fontSize: "13px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{event.date}</p>
                    <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#2D2A26", marginBottom: "14px", lineHeight: 1.3 }}>
                      {event.title}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, textAlign: "justify" }}>
                      {event.description}
                    </p>
                    {event.href && (
                      <Link href={event.href} style={{ display: "inline-block", marginTop: "16px", fontSize: "13px", fontWeight: 700, color: "#B8860B", textTransform: "uppercase", letterSpacing: "1.5px", textDecoration: "none", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "2px" }}>
                        View Photo Gallery &rsaquo;
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
