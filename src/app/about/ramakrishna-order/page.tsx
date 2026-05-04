import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "The Ramakrishna Order – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function RamakrishnaOrderPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="The Ramakrishna Order"
        subtitle="A worldwide, non-political, non-sectarian spiritual movement engaged in humanitarian and social service for more than a century."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "The Ramakrishna Order" },
        ]}
      />

      {/* Intro */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Ramakrishna Math and Ramakrishna Mission are worldwide, non-political,
              non-sectarian spiritual organizations which have been engaged in various
              forms of humanitarian and social service activities for more than a
              century. Inspired by the ideals of renunciation and service, the monks
              and lay devotees of the Math and Mission serve millions of men, women
              and children, without any distinction of caste, religion or race, because
              they see the living God in them.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The organizations were brought into existence by Sri Ramakrishna
              (1836&ndash;1886), the great 19th-century saint from Bengal who is regarded
              as the Prophet of the Modern Age, and his chief disciple Swami Vivekananda
              (1863&ndash;1902), one of the foremost thinkers and religious leaders of
              the present age. Although Ramakrishna Math and Ramakrishna Mission are
              legally and financially separate, they are closely interrelated in several
              ways and are regarded as twin organizations.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              These twin organizations have set in motion a non-sectarian, universal
              spiritual movement which has been silently working for more than a hundred
              years to catalyze the spiritual regeneration of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Vedanta */}
      <section style={{ padding: "60px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Vedanta — The Catalyst" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The chief catalyst in this ongoing transformation is India&rsquo;s ancient
              religious philosophy known as Vedanta. Although several other systems of
              philosophy arose in India at different times, they were confined to small
              groups. Vedanta alone has remained the dominant philosophy of India&rsquo;s
              religious tradition from Vedic times to the present day.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              In modern times this ancient system of thought has been purified, unified
              and energized by Sri Ramakrishna, and expounded in the modern idiom by
              Swami Vivekananda &mdash; thus made available to all people all over the
              world without any distinctions of caste, creed or race.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Our Approach" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ramakrishna Order does not believe in conversion, nor does it indulge
              in the occult or the sensational. The Order places utmost importance on
              personal spiritual unfoldment and selfless service. Inspired by the idea
              of the harmony of all faiths, its centres encourage adherents of different
              faiths to meet in a spirit of friendship and mutual appreciation, and to
              learn from one another without having to give up one&rsquo;s own faith.
            </p>
          </div>

          {/* Pull quote — Sri Ramakrishna */}
          <div className="reveal" style={{
            maxWidth: "820px",
            margin: "50px auto 0",
            borderLeft: "4px solid #B8860B",
            paddingLeft: "32px",
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "22px",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#1A2F2F",
              marginBottom: "12px",
            }}>
              &ldquo;God has made different religions to suit different aspirants, lives
              and countries &hellip; all doctrines are only so many paths; but a path is by
              no means God Himself. Indeed one can reach God if one follows any of the
              paths with whole-hearted devotion.&rdquo;
            </p>
            <p style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#B8860B",
            }}>
              &mdash; Sri Ramakrishna
            </p>
          </div>
        </div>
      </section>

      {/* Motto / Ideals / Headquarters */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Motto, Ideals & Headquarters" />
          </div>
          <div className="reveal" style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}>
            <div style={{ background: "#fff", border: "1px solid #E8E2D8", borderTop: "3px solid #B8860B", padding: "28px 24px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                Motto
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "20px", fontStyle: "italic", color: "#1A2F2F", marginBottom: "10px", lineHeight: 1.4 }}>
                ātmāno mokṣārthaṃ jagat hitāya ca
              </p>
              <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.7 }}>
                &ldquo;For one&rsquo;s own salvation and for the welfare of the world.&rdquo;
                Formulated by Swami Vivekananda.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #E8E2D8", borderTop: "3px solid #B8860B", padding: "28px 24px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                Ideals
              </p>
              <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.75 }}>
                Work as worship, the potential divinity of the soul, and the harmony of
                religions are three noteworthy ideals on which these organizations are
                founded &mdash; sustaining hospitals, schools, mobile medical units,
                rural development centres and many other social service institutions.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #E8E2D8", borderTop: "3px solid #B8860B", padding: "28px 24px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                Headquarters
              </p>
              <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.75 }}>
                Belur Math, Howrah, West Bengal &mdash; sprawling over forty acres on
                the western bank of the river Hooghly (Ganga), an hour&rsquo;s drive
                from Kolkata.
              </p>
            </div>
          </div>

          {/* Pull quote — Swami Vivekananda */}
          <div className="reveal" style={{
            maxWidth: "820px",
            margin: "50px auto 0",
            borderLeft: "4px solid #B8860B",
            paddingLeft: "32px",
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "22px",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#1A2F2F",
              marginBottom: "12px",
            }}>
              &ldquo;This Math that we are building will harmonise all creeds, all
              standpoints. Just as Shri Ramakrishna held highly liberal views, this
              Math too will be a centre for propagating similar ideas. The blazing
              light of universal harmony that will emanate from here will flood the
              whole world.&rdquo;
            </p>
            <p style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#B8860B",
            }}>
              &mdash; Swami Vivekananda &middot; Complete Works, Vol. 7, p. 115
            </p>
          </div>
        </div>
      </section>

      {/* Branch Stats */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="A Worldwide Movement" />
          </div>
          <div className="reveal" style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "#1A2F2F",
            color: "#F8F5EF",
            padding: "50px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            textAlign: "center",
          }}>
            <div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "54px", fontWeight: 600, color: "#D4A547", marginBottom: "6px", lineHeight: 1 }}>
                295
              </p>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F8F5EF" }}>
                Branch Centres Worldwide
              </p>
            </div>
            <div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "54px", fontWeight: 600, color: "#D4A547", marginBottom: "6px", lineHeight: 1 }}>
                226
              </p>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F8F5EF" }}>
                Centres in India
              </p>
            </div>
            <div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "54px", fontWeight: 600, color: "#D4A547", marginBottom: "6px", lineHeight: 1 }}>
                69
              </p>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F8F5EF" }}>
                In 24 Other Countries
              </p>
            </div>
          </div>
          <p className="reveal" style={{ maxWidth: "1000px", margin: "16px auto 0", fontSize: "13px", color: "#5A5650", textAlign: "center", fontStyle: "italic" }}>
            As of 1 February 2026. For more information about the Ramakrishna Math and
            Ramakrishna Mission &mdash; ideology, activities, and various centres &mdash; visit{" "}
            <a href="https://www.belurmath.org" target="_blank" rel="noopener noreferrer" style={{ color: "#B8860B", fontWeight: 600 }}>
              belurmath.org
            </a>
          </p>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal" style={{ paddingTop: "30px" }}>
            <Link href="/about" className="btn-orange">
              &larr; &nbsp;Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
