"use client";
import { useState, useCallback, useEffect } from "react";
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

const P = "/images/silver-jubilee";

const galleryGroups: { day: string; photos: { src: string; caption: string }[] }[] = [
  {
    day: "Glimpses",
    photos: [
      { src: `${P}/237a5565.jpg`, caption: "Silver Jubilee Celebrations" },
      { src: `${P}/237a5584.jpg`, caption: "Silver Jubilee Celebrations" },
      { src: `${P}/237a5597.jpg`, caption: "Silver Jubilee Celebrations" },
      { src: `${P}/237a5688.jpg`, caption: "Silver Jubilee Celebrations" },
      { src: `${P}/237a6493.jpg`, caption: "Silver Jubilee Celebrations" },
    ],
  },
  {
    day: "Day 1 — May 8",
    photos: [
      { src: `${P}/day-1-welcome.jpg`, caption: "Welcome" },
      { src: `${P}/day-1-lamp.jpg`, caption: "Lighting of the Lamp" },
      { src: `${P}/day-1-bhajans.jpg`, caption: "Bhajans" },
      { src: `${P}/day-1-rev-sw-jitakamananda.jpg`, caption: "Rev. Swami Jitakamananda" },
      { src: `${P}/day-1-sw-yukteshananda.jpg`, caption: "Swami Yukteshananda" },
      { src: `${P}/day-1-sw-tyagishwarananda.jpg`, caption: "Swami Tyagishwarananda" },
      { src: `${P}/day-1-sw-bodhaswarupananda.jpg`, caption: "Swami Bodhaswarupananda" },
      { src: `${P}/day-1-sw-buddhananda.jpg`, caption: "Swami Buddhananda" },
      { src: `${P}/day-1-sw-mangalanathananda.jpg`, caption: "Swami Mangalanathananda" },
      { src: `${P}/day-1-p-gurudas-1.jpg`, caption: "P. Gurudas" },
      { src: `${P}/day-1-sangeeta-katti-kulkarni-1.jpg`, caption: "Sangeeta Katti Kulkarni" },
      { src: `${P}/day-1-sangeeta-katti-kulkarni-2.jpg`, caption: "Sangeeta Katti Kulkarni" },
      { src: `${P}/day-1-sangeeta-katti-kulkarni-3.jpg`, caption: "Sangeeta Katti Kulkarni" },
    ],
  },
  {
    day: "Day 2 — May 9",
    photos: [
      { src: `${P}/day-2-arati.jpg`, caption: "Arati" },
      { src: `${P}/day-2-inauguration-exhibition-1.jpg`, caption: "Inauguration of the Exhibition" },
      { src: `${P}/day-2-inauguration-exhibition-2.jpg`, caption: "Inauguration of the Exhibition" },
      { src: `${P}/day-2-rev-sw-vp-mhj.jpg`, caption: "Revered Vice-President Maharaj" },
      { src: `${P}/day-2-vp-mj.jpg`, caption: "Revered Vice-President Maharaj" },
      { src: `${P}/day-2-rev-sw-nityasthananda.jpg`, caption: "Rev. Swami Nityasthananda" },
      { src: `${P}/day-2-sw-aryananda.jpg`, caption: "Swami Aryananda" },
      { src: `${P}/day-2-sw-dayadipananda.jpg`, caption: "Swami Dayadipananda" },
      { src: `${P}/day-2-sw-japasiddhananda.jpg`, caption: "Swami Japasiddhananda" },
      { src: `${P}/day-2-sw-tadyuktananda.jpg`, caption: "Swami Tadyuktananda" },
      { src: `${P}/day-2-sw-yukteshananda.jpg`, caption: "Swami Yukteshananda" },
      { src: `${P}/day-2-cultural.jpg`, caption: "Cultural Programme" },
      { src: `${P}/day-2-cultural-2.jpg`, caption: "Cultural Programme" },
      { src: `${P}/day-2-raghunandan-phansikar-1.jpg`, caption: "Raghunandan Phansikar" },
      { src: `${P}/day-2-raghunandan-phansikar-2.jpg`, caption: "Raghunandan Phansikar" },
    ],
  },
  {
    day: "Day 3 — May 10",
    photos: [
      { src: `${P}/day-3-homa.jpg`, caption: "Homa" },
      { src: `${P}/day-3-homa-2.jpg`, caption: "Homa" },
      { src: `${P}/day-3-rev-vp-mj.jpg`, caption: "Revered Vice-President Maharaj" },
      { src: `${P}/day-3-rev-sw-muktidananda-1.jpg`, caption: "Rev. Swami Muktidananda" },
      { src: `${P}/day-3-rev-sw-nityasthananda.jpg`, caption: "Rev. Swami Nityasthananda" },
      { src: `${P}/day-3-sw-mangalanathananda.jpg`, caption: "Swami Mangalanathananda" },
      { src: `${P}/day-3-sw-shivapurnananda-1.jpg`, caption: "Swami Shivapurnananda" },
      { src: `${P}/day-3-afternoon.jpg`, caption: "Afternoon Session" },
      { src: `${P}/day-3-public.jpg`, caption: "Public Gathering" },
      { src: `${P}/day-3-purbayun-chaterjee-1.jpg`, caption: "Purbayun Chatterjee" },
      { src: `${P}/day-3-purbayun-chaterjee-2.jpg`, caption: "Purbayun Chatterjee" },
      { src: `${P}/day-3-purbayun-chaterjee-3.jpg`, caption: "Purbayun Chatterjee" },
    ],
  },
];

// Flattened list for the lightbox (prev/next navigation across all groups)
const flatGallery = galleryGroups.flatMap((g) => g.photos);

function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i === null ? i : Math.max(0, i - 1))), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : Math.min(flatGallery.length - 1, i + 1))),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  let runningIndex = -1;

  return (
    <>
      <section style={{ padding: "50px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Photo Gallery" />
            <p style={{ textAlign: "center", fontSize: "15px", color: "#8A847C", marginTop: "-30px", marginBottom: "40px" }}>
              Moments from the three-day celebration &nbsp;|&nbsp; Click any photo to view full size
            </p>
          </div>

          {galleryGroups.map((group) => (
            <div key={group.day} style={{ marginBottom: "44px" }}>
              <h3 className="reveal" style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "24px", fontWeight: 600, color: "#1A2F2F",
                marginBottom: "20px", paddingBottom: "10px", borderBottom: "2px solid #C4922A", display: "inline-block",
              }}>
                {group.day}
              </h3>
              <div className="sjcc-photo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
                {group.photos.map((photo) => {
                  runningIndex += 1;
                  const idx = runningIndex;
                  return (
                    <button
                      key={photo.src}
                      onClick={() => setLightbox(idx)}
                      className="reveal activity-card"
                      style={{ cursor: "zoom-in", border: "1px solid #E8E2D8", borderRadius: "8px", overflow: "hidden", padding: 0, background: "#fff", position: "relative" }}
                      aria-label={photo.caption}
                    >
                      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          className="object-cover transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 280px"
                        />
                      </div>
                      <div style={{ padding: "10px 12px", fontSize: "13px", color: "#5A5650", textAlign: "left", lineHeight: 1.4 }}>
                        {photo.caption}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox overlay */}
      {lightbox !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 10000,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: "20px",
          }}
        >
          <button onClick={close} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#fff", fontSize: "36px", cursor: "pointer", zIndex: 10001 }} aria-label="Close">&times;</button>
          {lightbox > 0 && (
            <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: "32px", cursor: "pointer", padding: "10px 16px", borderRadius: "50%" }} aria-label="Previous">&lsaquo;</button>
          )}
          {lightbox < flatGallery.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: "32px", cursor: "pointer", padding: "10px 16px", borderRadius: "50%" }} aria-label="Next">&rsaquo;</button>
          )}
          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", maxWidth: "92vw" }}>
            <Image
              src={flatGallery[lightbox].src}
              alt={flatGallery[lightbox].caption}
              width={1500}
              height={1000}
              style={{ maxHeight: "82vh", width: "auto", maxWidth: "92vw", objectFit: "contain", borderRadius: "8px", boxShadow: "0 0 60px rgba(0,0,0,0.5)" }}
            />
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", textAlign: "center" }}>
              {flatGallery[lightbox].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

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
              <p style={{ fontSize: "15px", color: "#8A847C" }}>Ramakrishna Mission Ashrama, Fort, Belagavi &nbsp;|&nbsp; Click images to view the full invitation</p>
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
  { day: "Day 1 — May 8", events: ["Sri Ramakrishna Homa", "Bhagavannama Sankeertana", "Spiritual Talks by Ramakrishna Order Monks", "Evening Cultural Presentation"] },
  { day: "Day 2 — May 9", events: ["Morning Prayers & Meditation", "Inauguration of the Exhibition", "Spiritual Discourses", "Evening Music by Eminent Artists"] },
  { day: "Day 3 — May 10", events: ["Morning Prayers", "Concluding Homa", "Bhagavannama Sankeertana", "Valedictory Session"] },
];

export default function SilverJubileePage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Silver Jubilee Concluding Celebrations"
        subtitle="Held on May 8–10, 2026 — a three-day spiritual celebration marking 25 years of service at the sacred place where Swami Vivekananda stayed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Silver Jubilee" },
        ]}
      />

      {/* Photo Gallery — moments from the celebration */}
      <PhotoGallery />

      {/* About the Event */}
      <section style={{ padding: "50px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="About the Celebration" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission Ashrama at Belagavi hosted a momentous three-day concluding ceremony
              for its <strong>Silver Jubilee celebrations</strong>, marking 25 glorious years of spiritual service
              and community upliftment. It was a once-in-a-generation occasion at the sacred place where
              Swami Vivekananda stayed for nine days during his historic visit in October 1892.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The celebrations featured <strong>Sri Ramakrishna Homa</strong>, <strong>Bhagavannama Sankeertana</strong>,
              spiritual talks by revered monks of the Ramakrishna Order, the inauguration of an exhibition,
              cultural presentations, and evening music programmes by eminent artists. Devotees, well-wishers, and the
              general public participated wholeheartedly in this historic event.
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

      {/* Invitation — official invitation for the record */}
      <InvitationGallery />

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
            25 Years of Spiritual Service
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.9)", marginBottom: "30px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            With gratitude to all devotees and well-wishers who made the Silver Jubilee celebrations a memorable occasion. Explore more events and activities at the Ashrama.
          </p>
          <Link
            href="/events"
            style={{ display: "inline-block", background: "#fff", color: "#C4922A", padding: "16px 40px", fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", textDecoration: "none", borderRadius: "6px", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
          >
            View All Events &nbsp;&rsaquo;
          </Link>
        </div>
      </section>
    </SubpageLayout>
  );
}
