import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "About Us – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const holy_trio = [
  {
    name: "Sri Ramakrishna",
    years: "1836–1886",
    image: "/images/Ramakrishna.jpg",
    href: "/about/sri-ramakrishna",
    desc: "The great 19th-century mystic of Bengal whose spiritual realizations and teachings form the bedrock of the Ramakrishna Movement.",
  },
  {
    name: "Sri Sarada Devi",
    years: "1853–1920",
    image: "/images/sri-sarada-devi.jpg",
    href: "/about/sri-sarada-devi",
    desc: "Spiritual consort of Sri Ramakrishna and the Holy Mother of the Ramakrishna Order, embodying infinite love and compassion.",
  },
  {
    name: "Swami Vivekananda",
    years: "1863–1902",
    image: "/images/swami-vivekananda-portrait.jpg",
    href: "/about/swami-vivekananda",
    desc: "Chief disciple of Sri Ramakrishna who carried the message of Vedanta to the world and founded the Ramakrishna Mission.",
  },
];

export default function AboutPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="About Us"
        subtitle="Inspired by the life and teachings of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Intro Section */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Ramakrishna Mission Ashrama, Belagavi is a branch centre of the
              Ramakrishna Math and Ramakrishna Mission, with its headquarters at
              Belur Math, Howrah, West Bengal. Inspired by the life and teachings of
              Sri Ramakrishna Paramahamsa, Sri Sarada Devi, and Swami Vivekananda,
              the Ashrama carries on a variety of spiritual, educational, and
              humanitarian activities for the benefit of all.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ashrama has two centres in Belagavi — the main Ashrama at Fort and
              the Swami Vivekananda Memorial at Swami Vivekananda Marg — both of
              which preserve and share the enduring legacy of Swamiji&apos;s historic
              visit to Belagavi in October 1892.
            </p>
          </div>
        </div>
      </section>

      {/* Holy Trio Cards */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Our Inspiration" />
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
            {holy_trio.map((person) => (
              <Link
                key={person.name}
                href={person.href}
                className="reveal activity-card"
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid #e0d8d0",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <div style={{ position: "relative", height: "280px", background: "#f7f3ee", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      sizes="33vw"
                    />
                  ) : (
                    <span style={{ color: "#2C2C2C", fontSize: "72px", fontWeight: 700, opacity: 0.15 }}>
                      {person.name.split(" ").pop()?.[0]}
                    </span>
                  )}
                </div>
                <div style={{ padding: "22px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#2D2A26", marginBottom: "4px" }}>
                    {person.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#C4922A", fontWeight: 600, marginBottom: "10px" }}>{person.years}</p>
                  <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.7, textAlign: "justify" }}>
                    {person.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Ramakrishna Order */}
      <section id="order" style={{ padding: "70px 0", background: "#F3EDE4" }} className="scroll-mt-28">
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="The Ramakrishna Order" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Ramakrishna Math and Ramakrishna Mission are worldwide, non-political,
              non-sectarian spiritual organizations which have been engaged in various
              forms of humanitarian and social service activities for more than a
              century. Inspired by the ideals of renunciation and service, the monks
              and lay devotees of the Math and Mission serve millions of men, women
              and children, without any distinction of caste, religion or race &mdash;
              because they see the living God in them.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "20px" }}>
              The motto of the twin organizations is{" "}
              <em style={{ fontWeight: 600, color: "#1A2F2F" }}>
                ātmāno mokṣārthaṃ jagat hitāya ca
              </em>{" "}
              &mdash; for one&rsquo;s own salvation and for the welfare of the world.
              As of 1 February 2026, the Order has 295 branch centres worldwide:
              226 in India and 69 across 24 other countries.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/about/ramakrishna-order" className="btn-orange">
                Read More About the Order &nbsp;&rsaquo;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Swamiji in Belagavi CTA */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{
            background: "#fff",
            borderLeft: "4px solid #C4922A",
            padding: "35px 40px",
            boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#2D2A26", marginBottom: "12px" }}>
              Swami Vivekananda in Belagavi
            </h3>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "20px" }}>
              During his parivrajaka days, Swami Vivekananda visited Belagavi from
              16 to 27 October 1892. Read about the remarkable account of
              Swamiji&apos;s stay in the city and the impressions he left on those
              who met him.
            </p>
            <Link href="/about/swamiji-in-belagavi" className="btn-orange">
              Read More &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
