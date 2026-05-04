import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Japa Yajna – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function JapaYajnaPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Japa Yajna"
        subtitle="A five-day spiritual camp for deepening one&rsquo;s spiritual practice in the sacred surroundings of the Ashrama"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Japa Yajna" },
        ]}
      />

      {/* Hero Image with gradient fade */}
      <section style={{ padding: "70px 0 0" }}>
        <div className="site-container">
          <div className="reveal" style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            boxShadow: "0 8px 35px rgba(0,0,0,0.15)",
            borderRadius: "8px",
          }}>
            <Image
              src="/images/online_japa.jpg"
              alt="Devotees engaged in Japa Yajna at the Ashrama"
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "120px",
              background: "linear-gradient(to top, #F8F5EF, transparent)",
            }} />
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section style={{ padding: "50px 0 20px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "0 auto 28px", opacity: 0.5 }} />
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#1A2F2F",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}>
              A five-day spiritual retreat in the serene surroundings of the Ashrama &mdash; sanctified by the visit and stay of Swami Vivekananda.
            </p>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "28px auto 0", opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* What is Japa Yajna */}
      <section className="scroll-mt-28" style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="What is Japa Yajna" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Japa Yajna is a five-day spiritual camp in the serene surroundings of the
              Ashrama. It is specifically meant for those devotees of Sri Ramakrishna who
              have taken initiation (Mantra Deeksha).
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              It provides them an opportunity to practice spiritual disciplines in the holy
              atmosphere of the Ashrama sanctified by the visit and stay of Swami Vivekananda.
              During their stay the participants are to complete telling their beads (Japa)
              one hundred thousand times. This programme is interspersed with Bhajans &amp;
              Sankeertana, readings from &lsquo;the Gospel of Sri Ramakrishna&rsquo;,
              spiritual discourses, etc.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ashrama makes arrangements for their food and stay without any charge.
            </p>
          </div>
        </div>
      </section>

      {/* The Aim — dark teal band */}
      <section className="scroll-mt-28" style={{ padding: "80px 0", background: "#1A2F2F", position: "relative", overflow: "hidden" }}>
        {/* Subtle diagonal pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
        }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
              Purpose
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "14px",
            }}>
              The Aim
            </h2>
            <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "0 auto", borderRadius: "2px" }} />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.9, textAlign: "justify" }}>
              There are several devotees who receive Mantra Diksha from the Ramakrishna
              Mission. Many are unable to undertake regular spiritual practice due to
              pressures of work and worldly duties but are nevertheless eager to discipline
              their minds and direct it to God. Japa Yajna provides them an opportunity to
              mould their spiritual life through solitude, satsanga and singing, as exhorted
              by Sri Ramakrishna, and learn to &lsquo;apply oil onto their fingers&rsquo;
              while dealing with this sticky world.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Japa Yajna */}
      <section className="scroll-mt-28" style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{
              background: "linear-gradient(135deg, #FBF7ED, #F8F0DD)",
              border: "2px solid #B8860B",
              borderRadius: "12px",
              padding: "48px 40px",
              textAlign: "center",
              boxShadow: "0 6px 30px rgba(184,134,11,0.1)",
            }}>
              <p style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#B8860B",
                marginBottom: "20px",
              }}>
                Upcoming
              </p>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "28px",
                fontWeight: 700,
                color: "#1A2F2F",
                lineHeight: 1.35,
                marginBottom: "12px",
              }}>
                Next Japa Yajna &mdash; June 10 to 14, 2026
              </h3>
              <p style={{
                fontSize: "15px",
                color: "#5A5650",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}>
                Registrations open
              </p>
              <div style={{
                width: "55px",
                height: "2px",
                background: "#B8860B",
                margin: "0 auto 24px",
                borderRadius: "2px",
                opacity: 0.5,
              }} />
              <p style={{
                fontSize: "15px",
                color: "#4A4743",
                lineHeight: 1.7,
              }}>
                Contact the Ashrama to register
              </p>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "20px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginTop: "8px",
                letterSpacing: "0.5px",
              }}>
                0831-2405172 &nbsp;/&nbsp; 2402498
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: "0 0 70px", paddingTop: "50px" }}>
        <div className="site-container">
          <div className="reveal">
            <Link href="/activities" className="btn-orange">
              &larr; &nbsp;Back to Activities
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
