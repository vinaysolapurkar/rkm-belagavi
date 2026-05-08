"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

const inviteImages = [
  { src: "/images/sjcc-invite-1.jpg", alt: "Silver Jubilee Invitation — Page 1" },
  { src: "/images/sjcc-invite-2.jpg", alt: "Silver Jubilee Invitation — Page 2" },
  { src: "/images/sjcc-invite-3.jpg", alt: "Silver Jubilee Programme Details" },
];

function InvitationGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <>
      <section style={{ padding: "40px 0 0" }}>
        <div className="site-container">
          {/* Date banner */}
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px", flexWrap: "wrap" }}>
            <div style={{ background: "#C4922A", color: "#fff", padding: "12px 20px", borderRadius: "8px", textAlign: "center" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>MAY</div>
              <div style={{ fontSize: "34px", fontWeight: 800, lineHeight: 1 }}>8-10</div>
              <div style={{ fontSize: "13px", fontWeight: 600 }}>2026</div>
            </div>
            <div>
              <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#2D2A26", marginBottom: "4px" }}>Silver Jubilee&apos;s Concluding Celebrations</h2>
              <p style={{ fontSize: "15px", color: "#8A847C" }}>Ramakrishna Mission Ashrama, Fort, Belagavi &nbsp;|&nbsp; Click images to view full invitation</p>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="invite-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {inviteImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="activity-card"
                style={{ cursor: "zoom-in", border: "1px solid #E8E2D8", borderRadius: "8px", overflow: "hidden", padding: 0, background: "#fff" }}
              >
                <Image src={img.src} alt={img.alt} width={400} height={560} style={{ width: "100%", height: "auto", display: "block" }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox overlay */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 10000,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: "20px",
          }}
        >
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#fff", fontSize: "36px", cursor: "pointer", zIndex: 10001 }}>&times;</button>
          {lightbox > 0 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: "32px", cursor: "pointer", padding: "10px 16px", borderRadius: "50%" }}>&lsaquo;</button>
          )}
          {lightbox < inviteImages.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: "32px", cursor: "pointer", padding: "10px 16px", borderRadius: "50%" }}>&rsaquo;</button>
          )}
          <Image
            src={inviteImages[lightbox].src}
            alt={inviteImages[lightbox].alt}
            width={900}
            height={1260}
            style={{ maxHeight: "90vh", width: "auto", maxWidth: "90vw", objectFit: "contain", borderRadius: "8px", boxShadow: "0 0 60px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

const schedule = [
  { day: "Day 1 — May 8", events: ["Sri Ramakrishna Homa", "Bhagavannama Sankeertana", "Spiritual Talk by Ramakrishna Order Monks", "Evening Cultural Presentation"] },
  { day: "Day 2 — May 9", events: ["Morning Prayers & Meditation", "Spiritual Discourses", "Cultural Programmes", "Evening Music by Eminent Artists"] },
  { day: "Day 3 — May 10", events: ["Morning Prayers", "Concluding Ceremony", "Bhagavannama Sankeertana", "Valedictory Session"] },
];

const registrationOptions = [
  {
    title: "Residential — Hotel",
    price: "₹3,000",
    perPerson: "per person",
    features: ["Hotel accommodation (2 persons/room)", "All meals provided (breakfast, lunch, dinner)", "Access to all programmes", "Commemorative memento"],
    link: "https://rzp.io/rzp/rkmbgm-silver01",
    highlight: true,
  },
  {
    title: "Residential — Dormitory",
    price: "₹1,500",
    perPerson: "per person",
    features: ["Dormitory accommodation", "All meals provided (breakfast, lunch, dinner)", "Access to all programmes", "Commemorative memento"],
    link: "https://rzp.io/rzp/rkmbgm-silver02",
    highlight: false,
  },
  {
    title: "Non-Residential",
    price: "Free",
    perPerson: "entry",
    features: ["No accommodation", "Meal access available", "Access to all programmes", "Open to all devotees & public"],
    link: "https://forms.zohopublic.in/amoghavjm47gm1/form/ResidentialDelegates3000/formperma/Ln4OokCckaZ3LtmZpZ586dgb2stIzRRKYoxFIYe8A5s",
    highlight: false,
  },
];

export default function SilverJubileePage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Silver Jubilee Concluding Celebrations"
        subtitle="May 8–10, 2026 — A three-day spiritual celebration marking 25 years of service at the sacred place where Swami Vivekananda stayed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Silver Jubilee" },
        ]}
      />

      {/* Invitation Cards — thumbnails with click-to-zoom */}
      <InvitationGallery />

      {/* About the Event */}
      <section style={{ padding: "50px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="About the Celebration" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission Ashrama at Belagavi will host a momentous three-day concluding ceremony
              for its <strong>Silver Jubilee celebrations</strong>, marking 25 glorious years of spiritual service
              and community upliftment. This is a once-in-a-generation occasion at the sacred place where
              Swami Vivekananda stayed for nine days during his historic visit in October 1892.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The celebrations will feature <strong>Sri Ramakrishna Homa</strong>, <strong>Bhagavannama Sankeertana</strong>,
              spiritual talks by revered monks of the Ramakrishna Order, cultural presentations, and
              evening music programmes featuring eminent artists. All devotees, well-wishers, and the
              general public are warmly invited to participate in this historic event.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={{ padding: "50px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Programme Schedule" />
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "1000px", margin: "0 auto" }}>
            {schedule.map((day) => (
              <div key={day.day} className="reveal activity-card" style={{ background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 6px 25px rgba(0,0,0,0.08)", border: "1px solid #E8E2D8" }}>
                <div style={{ background: "linear-gradient(135deg, #2C2C2C, #1E1E1E)", padding: "18px 24px" }}>
                  <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700 }}>{day.day}</h3>
                </div>
                <div style={{ padding: "24px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                    {day.events.map((ev) => (
                      <li key={ev} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "15px", color: "#5A5650", lineHeight: 1.5 }}>
                        <span style={{ color: "#C4922A", fontSize: "18px", lineHeight: 1, marginTop: "2px" }}>&#9670;</span>
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section style={{ padding: "50px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Registration" />
            <p style={{ textAlign: "center", fontSize: "16px", color: "#5A5650", marginTop: "-30px", marginBottom: "40px" }}>
              Choose the option that suits you best and register today.
            </p>
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", maxWidth: "1050px", margin: "0 auto" }}>
            {registrationOptions.map((opt) => (
              <div
                key={opt.title}
                className="reveal gallery-card"
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: opt.highlight ? "2px solid #C4922A" : "1px solid #ddd",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {opt.highlight && (
                  <div style={{ background: "#C4922A", color: "#fff", textAlign: "center", padding: "8px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ padding: "32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "8px" }}>{opt.title}</h3>
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "38px", fontWeight: 800, color: "#C4922A", lineHeight: 1 }}>{opt.price}</span>
                    <span style={{ fontSize: "14px", color: "#8A847C", marginLeft: "6px" }}>{opt.perPerson}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                    {opt.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#5A5650", lineHeight: 1.5 }}>
                        <span style={{ color: "#4CAF50", fontSize: "16px", marginTop: "1px" }}>&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={opt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange"
                    style={{
                      textAlign: "center",
                      display: "block",
                      borderRadius: "6px",
                      background: opt.highlight ? "#C4922A" : "#2C2C2C",
                    }}
                  >
                    {opt.price === "Free" ? "Register Now" : `Pay ${opt.price} & Register`}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Contact */}
      <section style={{ padding: "50px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Venue & Contact" />
          </div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ background: "#fff", padding: "32px", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E2D8" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "16px" }}>Venue</h3>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7 }}>
                Ramakrishna Mission Ashrama<br />
                Fort Road, Belagavi Fort Area<br />
                Belagavi, Karnataka 590016
              </p>
            </div>
            <div style={{ background: "#fff", padding: "32px", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E2D8" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "16px" }}>Contact</h3>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7, marginBottom: "8px" }}>
                <strong>Phone:</strong>{" "}
                <a href="tel:08312432789" style={{ color: "#2C2C2C", textDecoration: "none" }}>0831-243 2789</a>
                {" / "}
                <a href="tel:08312430789" style={{ color: "#2C2C2C", textDecoration: "none" }}>243 0789</a>
                {" / "}
                <a href="tel:08312970320" style={{ color: "#2C2C2C", textDecoration: "none" }}>297 0320</a>
                {" / "}
                <a href="tel:08312970321" style={{ color: "#2C2C2C", textDecoration: "none" }}>297 0321</a>
              </p>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7 }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:belgaum@rkmm.org" style={{ color: "#C4922A", textDecoration: "none" }}>belgaum@rkmm.org</a>
              </p>
              <p style={{ fontSize: "12px", color: "#8A847C", marginTop: "16px" }}>
                GSTIN: 29AAAAR1077P1ZZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "50px 0", background: "linear-gradient(135deg, #C4922A, #A67A1E)" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
            Be Part of This Historic Celebration
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.9)", marginBottom: "30px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Join thousands of devotees as we celebrate 25 years of spiritual service at the sacred place where Swami Vivekananda stayed.
          </p>
          <a
            href="https://rzp.io/rzp/rkmbgm-silver01"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#fff", color: "#C4922A", padding: "16px 40px", fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", textDecoration: "none", borderRadius: "6px", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
          >
            Register Now &nbsp;&rsaquo;
          </a>
        </div>
      </section>
    </SubpageLayout>
  );
}
