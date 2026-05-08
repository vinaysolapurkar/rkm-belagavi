"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ──────────── SCROLL REVEAL HOOK ──────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    // Immediately reveal anything already in viewport
    targets.forEach((t) => {
      const rect = t.getBoundingClientRect();
      if (rect.top < window.innerHeight) t.classList.add("visible");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    targets.forEach((t) => { if (!t.classList.contains("visible")) observer.observe(t); });
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ──────────── SCROLL PROGRESS BAR ──────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: `${progress}%`, height: "2px", background: "linear-gradient(90deg, #B8860B, #D4C078)", zIndex: 9999, transition: "width 0.1s", boxShadow: "0 0 6px rgba(184,134,11,0.3)" }} />
  );
}

/* ──────────── BACK TO TOP ──────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: "30px", right: "30px", width: "50px", height: "50px",
        borderRadius: "50%", background: "#1A2F2F", color: "#fff", border: "none",
        cursor: "pointer", zIndex: 9998, fontSize: "22px",
        boxShadow: "0 4px 20px rgba(26,47,47,0.3)",
        transform: show ? "translateY(0) scale(1)" : "translateY(20px) scale(0)",
        opacity: show ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      &#8593;
    </button>
  );
}

/* ──────────── ANIMATED COUNTER ──────────── */
function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, end]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div className="counter-value" style={{ fontFamily: "'Noto Sans', system-ui, sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700, color: "#B8860B", lineHeight: 1, marginBottom: "10px" }}>
        {count}{suffix}
      </div>
      <div className="counter-label" style={{ fontSize: "clamp(10px, 1vw, 13px)", color: "rgba(255,255,255,0.6)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "1.5px" }}>{label}</div>
    </div>
  );
}

/* ──────────── FLOATING PARTICLES ON HERO ──────────── */
const particleData = [
  { w: 5, h: 4, a: 0.19, l: 47, t: 81, dur: 6.2, del: 0.7 },
  { w: 3, h: 4, a: 0.24, l: 65, t: 22, dur: 7.2, del: 2.6 },
  { w: 3, h: 7, a: 0.21, l: 32, t: 60, dur: 6.4, del: 2.1 },
  { w: 5, h: 6, a: 0.25, l: 34, t: 94, dur: 10.6, del: 3.8 },
  { w: 4, h: 5, a: 0.17, l: 29, t: 33, dur: 14.1, del: 4.8 },
  { w: 8, h: 7, a: 0.31, l: 63, t: 60, dur: 12.1, del: 2.6 },
  { w: 4, h: 8, a: 0.34, l: 31, t: 91, dur: 12.1, del: 2.5 },
  { w: 6, h: 6, a: 0.22, l: 13, t: 91, dur: 10.7, del: 1.9 },
  { w: 7, h: 7, a: 0.31, l: 19, t: 95, dur: 8.7, del: 3.7 },
  { w: 4, h: 4, a: 0.28, l: 15, t: 47, dur: 8.5, del: 4.1 },
  { w: 8, h: 4, a: 0.21, l: 42, t: 16, dur: 8.0, del: 0.6 },
  { w: 3, h: 5, a: 0.15, l: 14, t: 26, dur: 6.7, del: 0.2 },
  { w: 5, h: 3, a: 0.35, l: 83, t: 36, dur: 12.6, del: 1.1 },
  { w: 6, h: 7, a: 0.16, l: 87, t: 34, dur: 11.4, del: 3.8 },
  { w: 5, h: 5, a: 0.38, l: 66, t: 72, dur: 15.4, del: 2.4 },
];
function HeroParticles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }}>
      {particleData.map((p, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            position: "absolute",
            width: `${p.w}px`,
            height: `${p.h}px`,
            borderRadius: "50%",
            background: `rgba(184, 134, 11, ${p.a})`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.del}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────── DATA ──────────── */
const heroSlides = [
  { image: "/images/Cropped-SVM-_E7A9941-1.jpg", title: "Swamiji stayed in this house for 9 days from", highlight: "Oct 19-27, 1892", subtitle: "as a guest of Haripada Mitra" },
  { image: "/images/Cropped-SVM-_E7A9941.jpg", title: "Swami Vivekananda Memorial", subtitle: "Swami Vivekananda Memorial at Swami Vivekananda Marg (Risaldar Galli), Belagavi. It is a sub-centre of Ramakrishna Mission Ashrama, Belagavi." },
];

const upcomingEvents = [
  { date: "May 8-10, 2026", title: "Silver Jubilee Concluding Celebrations", image: "/images/anual_celebration.jpg", desc: "Grand concluding celebrations marking 25 years of the Ashrama's service to the community.", href: "/silver-jubilee" },
];

const recentEvents = [
  { date: "Feb 6-8, 2026", title: "Annual Celebrations 2026", image: "/images/anual_celebration.jpg", desc: "Annual celebrations commemorating the spiritual legacy of Sri Ramakrishna, Holy Mother, and Swami Vivekananda." },
  { date: "Jan 12, 2026", title: "National Youth Day — Youth Convention", image: "/images/youth-day-2026.jpg", desc: "Celebrating Swami Vivekananda Jayanti with a vibrant Youth Convention featuring inspiring talks." },
  { date: "Nov 9, 2025", title: "Winter Relief", image: "/images/winter-relief.jpg", desc: "500 blankets distributed to corporation cleaning staff, with bhajans and spiritual discourse." },
];

const activities = [
  { title: "Winter Relief — Nov 2025", image: "/images/winter-relief.jpg", excerpt: "500 blankets distributed to corporation cleaning staff, accompanied by bhajans and a spiritual discourse.", href: "/activities/welfare" },
  { title: "Parents' Workshop — Nov 2025", image: "/images/parents-workshop.jpg", excerpt: "A meaningful workshop for parents connected to Swami Vivekananda's teachings on character building.", href: "/activities/personality-development" },
  { title: "Flood Relief — August 2019", image: "/images/frelief42.jpg", excerpt: "Relief kits distributed to hundreds of families across 8 villages during the devastating Karnataka floods.", href: "/activities/relief" },
  { title: "Sharada Netralaya — Eye Care", image: "/images/home-ashrama.jpg", excerpt: "Free cataract surgeries and quality eye care for the community since 2006, particularly for the economically weaker sections.", href: "/activities/sharada-netralaya" },
  { title: "Scholarships Programme", image: "/images/Scholarships-1.jpg", excerpt: "Merit-cum-means scholarships distributed annually to college students across Karnataka since 2005.", href: "/activities/value-education" },
  { title: "Personality Development", image: "/images/youth-day-2026.jpg", excerpt: "Residential and non-residential camps covering meditation, yoga, concentration, public speaking, and leadership skills.", href: "/activities/personality-development" },
];

const quotes = [
  { text: "\u201CYou have to grow from Inside Out. None can teach you. None can make you Spiritual. There is no other Teacher but your own Soul.\u201D", author: "Swami Vivekananda" },
  { text: "\u201CA Man is Not Poor without a Rupee But a Man is really Poor without a Dream and Ambition\u2026\u201D", author: "Swami Vivekananda" },
  { text: "\u201CGod is everywhere but He is most manifest in man. So serve man as God. That is as good as worshipping God.\u201D", author: "Sri Ramakrishna" },
];

const quickLinks = [
  { title: "Swami Vivekananda\nin Belagavi", image: "/images/ashrama.jpg", href: "/about/swamiji-in-belagavi" },
  { title: "The Ramakrishna\nOrder", image: "/images/Ramakrishna.jpg", href: "/about#order" },
  { title: "Become a Monk", image: "/images/monk.jpg", href: "/get-involved" },
  { title: "Become a Volunteer", image: "/images/ActivitiesoftheAshrama.jpg", href: "/activities/welfare" },
];

/* ──────────── COMPONENT ──────────── */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const [quote, setQuote] = useState(0);
  const pageRef = useScrollReveal();

  const nextSlide = useCallback(() => setSlide((p) => (p + 1) % heroSlides.length), []);
  const nextQuote = useCallback(() => setQuote((p) => (p + 1) % quotes.length), []);

  useEffect(() => { const t = setInterval(nextSlide, 6000); return () => clearInterval(t); }, [nextSlide]);
  useEffect(() => { const t = setInterval(nextQuote, 7000); return () => clearInterval(t); }, [nextQuote]);

  const serif = "'Cormorant Garamond', Georgia, serif";

  return (
    <div ref={pageRef} className="page-loaded">
      <ScrollProgress />
      <BackToTop />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-section relative w-full overflow-hidden bg-[#0f1f1f]" style={{ height: "85vh", minHeight: "520px", maxHeight: "800px" }}>
        <HeroParticles />
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === slide ? "opacity-100 hero-slide-active" : "opacity-0"}`}>
            <Image src={s.image} alt={s.title} fill className="object-cover" priority={i === 0} sizes="100vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.15) 100%)" }} />
            <div className="absolute inset-0 flex items-end justify-start">
              <div className={`hero-text px-6 md:px-16 pb-20 md:pb-24 ${i === slide ? "" : "opacity-0"}`} style={{ maxWidth: "750px" }}>
                <div style={{ width: "40px", height: "2px", background: "#B8860B", marginBottom: "20px" }} />
                <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 5vw, 54px)", lineHeight: 1.08, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em" }}>
                  {s.title}
                </h2>
                {s.highlight && (
                  <span className="hero-highlight" style={{ display: "block", fontFamily: serif, fontSize: "clamp(28px, 5vw, 54px)", fontWeight: 600, color: "#D4C078", marginTop: "4px" }}>
                    {s.highlight}
                  </span>
                )}
                {s.subtitle && (
                  <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(255,255,255,0.75)", marginTop: "18px", maxWidth: "500px", lineHeight: 1.7 }}>
                    {s.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="scroll-hint" style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? "28px" : "10px", height: "3px", borderRadius: "2px", border: "none", cursor: "pointer", background: i === slide ? "#B8860B" : "rgba(255,255,255,0.4)", transition: "all 0.5s" }} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SILVER JUBILEE BANNER ═══════════ */}
      <section className="reveal" style={{ background: "#1A2F2F" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontFamily: serif, fontSize: "28px", fontWeight: 600, color: "#B8860B", lineHeight: 1 }}>May 8&ndash;10, 2026</div>
            <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.15)" }} />
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>Silver Jubilee Concluding Celebrations</span>
          </div>
          <Link href="/silver-jubilee" style={{ marginLeft: "auto", color: "#B8860B", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", textDecoration: "none", letterSpacing: "1.5px", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "2px", transition: "all 0.3s" }}>
            Register &rsaquo;
          </Link>
        </div>
      </section>

      {/* ═══════════ JAPA YAJNA BANNER ═══════════ */}
      <section className="reveal" style={{ background: "linear-gradient(135deg, #FBF7ED 0%, #F8F0DD 100%)", borderTop: "1px solid #E8E2D8", borderBottom: "1px solid #E8E2D8" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontFamily: serif, fontSize: "26px", fontWeight: 600, color: "#1A2F2F", lineHeight: 1 }}>June 10&ndash;14, 2026</div>
            <div style={{ width: "1px", height: "24px", background: "rgba(26,47,47,0.15)" }} />
            <span style={{ fontSize: "14px", color: "#4A4743" }}>Japa Yajna &mdash; Registrations Open</span>
          </div>
          <Link href="/activities/japa-yajna" style={{ marginLeft: "auto", color: "#B8860B", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", textDecoration: "none", letterSpacing: "1.5px", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "2px", transition: "all 0.3s" }}>
            Learn More &rsaquo;
          </Link>
        </div>
      </section>

      {/* ═══════════ INTRO — ASHRAMA STORY ═══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", background: "#F8F5EF" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div className="reveal">
            <div style={{ width: "40px", height: "2px", background: "#B8860B", margin: "0 auto 28px" }} />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "24px" }}>
              Ramakrishna Mission Ashrama, Belagavi
            </h2>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, marginBottom: "32px" }}>
              At the sacred place where Swami Vivekananda stayed for twelve days in October 1892,
              the Ramakrishna Mission Ashrama has served the community for over 25 years through
              spiritual programmes, education, healthcare, and relief work.
            </p>
            <Link href="/ashrama" className="btn-orange">Explore the Ashrama &nbsp;&rsaquo;</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SWAMIJI'S STAY IN BELAGAVI ═══════════ */}
      <section style={{ padding: "clamp(50px, 6vw, 70px) 0", background: "#1A2F2F" }}>
        <div className="site-container">
          <p className="reveal" style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
            October 1892
          </p>
          <h2 className="reveal" style={{ textAlign: "center", fontFamily: serif, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 500, color: "#fff", marginBottom: "8px", lineHeight: 1.25 }}>
            Swamiji&rsquo;s Stay in Belagavi
          </h2>
          <div className="reveal" style={{ width: "40px", height: "2px", background: "#B8860B", margin: "0 auto 40px" }} />
          <div className="grid-counter" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <Counter end={12} label="Days in Belagavi" />
            <Counter end={3} label="Days with Sri Sadashiv Bhate" />
            <Counter end={9} label="Days with Sri Haripada Mitra" />
          </div>
        </div>
      </section>

      {/* ═══════════ SPACER ═══════════ */}
      <section style={{ padding: "clamp(50px, 7vw, 80px) 0", background: "#F8F5EF", textAlign: "center" }}>
        <div className="reveal" style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ width: "40px", height: "2px", background: "#B8860B", margin: "0 auto 24px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: "#1A1A1A", marginBottom: "14px" }}>The Memorial</h2>
          <p style={{ fontSize: "15px", color: "#7A756D", lineHeight: 1.7 }}>
            Where Swami Vivekananda stayed during his historic visit to Belagavi in October 1892.
          </p>
        </div>
      </section>

      {/* ═══════════ FULL-WIDTH MEMORIAL IMAGE ═══════════ */}
      <section className="reveal" style={{ position: "relative", height: "clamp(280px, 45vw, 500px)", overflow: "hidden" }}>
        <Image src="/images/Cropped-SVM-_E7A9941.jpg" alt="Swami Vivekananda Memorial" fill className="object-cover" sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,47,47,0.85) 0%, rgba(26,47,47,0.4) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ padding: "0 clamp(24px, 5vw, 80px)", maxWidth: "520px" }}>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
              Swami Vivekananda Memorial
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
              The house where Swamiji stayed as a guest of Haripada Mitra, now preserved as a memorial and sub-centre of the Ashrama.
            </p>
            <Link href="/memorial" className="btn-orange" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.5)", color: "#fff" }}>
              Visit Memorial &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ UPCOMING EVENT — CINEMATIC ═══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", background: "#fff" }}>
        <div className="site-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#1A1A1A" }}>Upcoming Event</h2>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #B8860B, transparent)", margin: "16px auto 0" }} />
          </div>
          {upcomingEvents.map((ev) => (
            <Link key={ev.title} href={ev.href || "/events"} className="reveal activity-card" style={{ display: "flex", textDecoration: "none", overflow: "hidden", maxWidth: "1200px", margin: "0 auto", background: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,0.08)", minHeight: "380px" }}>
              <div style={{ position: "relative", width: "55%", flexShrink: 0, overflow: "hidden" }}>
                <Image src={ev.image} alt={ev.title} fill className="object-cover transition-transform duration-500" sizes="(max-width: 768px) 100vw, 660px" />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "#1A2F2F", color: "#fff", padding: "12px 22px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.5px" }}>
                  {ev.date}
                </div>
              </div>
              <div style={{ padding: "clamp(32px, 4vw, 60px)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ color: "#B8860B", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "16px" }}>Upcoming</div>
                <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, color: "#1A1A1A", marginBottom: "20px", lineHeight: 1.2 }}>{ev.title}</h3>
                <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.8, marginBottom: "28px" }}>{ev.desc}</p>
                <span className="btn-orange" style={{ display: "inline-block", alignSelf: "flex-start" }}>View Details & Register</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════ RECENT EVENTS — 3-COL GRID ═══════════ */}
      <section style={{ padding: "clamp(50px, 6vw, 80px) 0", background: "#F0EBE1" }}>
        <div className="site-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 400, color: "#1A1A1A" }}>Recent Events</h2>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #B8860B, transparent)", margin: "16px auto 0" }} />
          </div>
          <div className="stagger-children grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", maxWidth: "1200px", margin: "0 auto" }}>
            {recentEvents.map((ev) => (
              <div key={ev.title} className="reveal activity-card" style={{ background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image src={ev.image} alt={ev.title} fill className="object-cover transition-transform duration-500" sizes="(max-width: 768px) 100vw, 380px" />
                </div>
                <div style={{ padding: "26px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", color: "#B8860B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>{ev.date}</div>
                  <h4 style={{ fontFamily: serif, fontSize: "20px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "10px" }}>{ev.title}</h4>
                  <p style={{ fontSize: "14px", color: "#7A756D", lineHeight: 1.7 }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUOTE — FULL-WIDTH DARK ═══════════ */}
      <section style={{ padding: "clamp(70px, 10vw, 120px) 0", background: "#1A2F2F", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, #B8860B 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="reveal" style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <div style={{ width: "40px", height: "2px", background: "#B8860B", margin: "0 auto 36px" }} />
          <blockquote style={{ fontFamily: serif, fontSize: "clamp(20px, 3vw, 32px)", color: "#fff", fontWeight: 400, lineHeight: 1.55, marginBottom: "28px", fontStyle: "italic", minHeight: "80px" }}>
            {quotes[quote].text}
          </blockquote>
          <cite style={{ color: "#B8860B", fontSize: "12px", fontWeight: 600, fontStyle: "normal", textTransform: "uppercase", letterSpacing: "2.5px" }}>
            {quotes[quote].author}
          </cite>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
            {quotes.map((_, i) => (
              <button key={i} onClick={() => setQuote(i)} style={{ width: i === quote ? "24px" : "8px", height: "3px", borderRadius: "2px", border: "none", cursor: "pointer", background: i === quote ? "#B8860B" : "rgba(255,255,255,0.2)", transition: "all 0.4s" }} aria-label={`Quote ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK LINKS — FULL BLEED ═══════════ */}
      <section>
        <div className="grid-2col-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {quickLinks.map((card) => (
            <Link key={card.title} href={card.href} className="quick-link-card" style={{ position: "relative", display: "block", overflow: "hidden", aspectRatio: "3/4" }}>
              <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700" sizes="25vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,47,47,0.9) 0%, rgba(26,47,47,0.3) 40%, transparent 100%)", transition: "background 0.4s" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px, 3vw, 30px)" }}>
                <h4 className="quick-link-title" style={{ fontFamily: serif, color: "#fff", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, lineHeight: 1.3, whiteSpace: "pre-line" }}>
                  {card.title}
                </h4>
                <div style={{ width: "24px", height: "1px", background: "#B8860B", marginTop: "12px" }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════ ACTIVITIES — EDITORIAL ALTERNATING ═══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", background: "#F8F5EF" }}>
        <div className="site-container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#1A1A1A" }}>Activities</h2>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #B8860B, transparent)", margin: "16px auto 0" }} />
          </div>
          <div className="stagger-children" style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            {activities.slice(0, 4).map((act, idx) => (
              <Link key={act.title} href={act.href} className="reveal activity-card" style={{ display: "flex", flexDirection: idx % 2 === 0 ? "row" : "row-reverse", background: "#fff", overflow: "hidden", textDecoration: "none", minHeight: "300px" }}>
                <div style={{ position: "relative", width: "50%", flexShrink: 0, overflow: "hidden" }}>
                  <Image src={act.image} alt={act.title} fill className="object-cover transition-transform duration-500" sizes="(max-width: 768px) 100vw, 600px" />
                </div>
                <div style={{ padding: "clamp(28px, 4vw, 56px)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h4 style={{ fontFamily: serif, fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "16px" }}>{act.title}</h4>
                  <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, marginBottom: "24px" }}>{act.excerpt}</p>
                  <span style={{ color: "#B8860B", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>Read More &rsaquo;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/activities" className="btn-orange">View All Activities &nbsp;&rsaquo;</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FULL-WIDTH IMAGE BREAK ═══════════ */}
      <section className="reveal" style={{ position: "relative", height: "clamp(300px, 50vw, 500px)", overflow: "hidden" }}>
        <Image src="/images/swami-vivekananda.jpg" alt="Swami Vivekananda" fill className="object-cover" sizes="100vw" style={{ objectPosition: "center 20%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,47,47,0.9) 0%, rgba(26,47,47,0.5) 40%, rgba(0,0,0,0.2) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 24px", maxWidth: "600px" }}>
            <p style={{ fontFamily: serif, color: "#fff", fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5, fontStyle: "italic", marginBottom: "20px" }}>
              &ldquo;Strength is the medicine for the world&apos;s disease.&rdquo;
            </p>
            <span style={{ color: "#B8860B", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2.5px" }}>Swami Vivekananda</span>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 90px) 0", background: "#fff" }}>
        <div className="site-container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#1A1A1A" }}>Gallery</h2>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #B8860B, transparent)", margin: "16px auto 0" }} />
          </div>
          <div className="stagger-children grid-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { title: "Pictures", href: "/gallery", icon: (
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="14" width="68" height="52" rx="4"/><circle cx="26" cy="34" r="8"/><path d="M6 54l18-18 16 16 10-10 24 18" strokeLinejoin="round"/></svg>
              )},
              { title: "Videos", href: "/gallery#videos", icon: (
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="16" width="68" height="48" rx="4"/><path d="M32 30l20 10-20 10V30z" fill="currentColor" stroke="none"/></svg>
              )},
              { title: "Audio", href: "/gallery#audio", icon: (
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="28" y="6" width="24" height="36" rx="12"/><path d="M18 38v4c0 10.5 6.5 18 22 18s22-7.5 22-18v-4"/><line x1="40" y1="60" x2="40" y2="70"/><line x1="28" y1="70" x2="52" y2="70"/></svg>
              )},
              { title: "Articles", href: "/gallery#articles", icon: (
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M48 6H18a4 4 0 00-4 4v60a4 4 0 004 4h44a4 4 0 004-4V24L48 6z"/><path d="M48 6v18h18"/><line x1="24" y1="36" x2="56" y2="36"/><line x1="24" y1="46" x2="56" y2="46"/><line x1="24" y1="56" x2="42" y2="56"/></svg>
              )},
            ].map((item) => (
              <Link key={item.title} href={item.href} className="reveal gallery-card" style={{ border: "1px solid #DDD8CE", padding: "clamp(24px, 3vw, 40px) 12px clamp(20px, 2vw, 28px)", textAlign: "center", background: "#fff" }}>
                <div className="gallery-icon" style={{ width: "60px", height: "60px", margin: "0 auto 14px", color: "#1A2F2F" }}>
                  {item.icon}
                </div>
                <h4 style={{ fontFamily: serif, fontSize: "16px", fontWeight: 600, color: "#1A1A1A" }}>{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION TAGLINE ═══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 90px) 0", background: "#1A2F2F" }}>
        <div className="reveal" style={{ maxWidth: "620px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ width: "40px", height: "2px", background: "#B8860B", margin: "0 auto 28px" }} />
          <p style={{ fontFamily: serif, color: "#fff", fontSize: "clamp(20px, 3vw, 28px)", lineHeight: 1.5, fontStyle: "italic", marginBottom: "16px" }}>
            &ldquo;Atmano Mokshartham Jagadhitaya cha&rdquo;
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px" }}>
            For the liberation of self &amp; welfare of the world.
          </p>
          <Link href="/about" style={{ color: "#B8860B", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", textDecoration: "none", letterSpacing: "1.5px", borderBottom: "1px solid rgba(184,134,11,0.4)", paddingBottom: "4px" }}>
            About the Ashrama &rsaquo;
          </Link>
        </div>
      </section>

      {/* ═══════════ MAP ═══════════ */}
      <section>
        <iframe
          src="https://maps.google.com/maps?q=Ramakrishna+Mission+Ashrama+Fort+Belagavi+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ramakrishna Mission Ashrama, Belagavi Location"
        />
      </section>
    </div>
  );
}
