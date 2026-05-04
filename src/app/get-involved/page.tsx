import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Get Involved – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const volunteerAreas = [
  {
    title: "Annual Celebrations",
    desc: "Help organise and manage the Ashrama's annual celebrations, including logistics, crowd management, and programme support.",
  },
  {
    title: "Welfare & Relief",
    desc: "Assist in the distribution of food, clothing, and relief kits to the underprivileged and disaster-affected communities.",
  },
  {
    title: "Value Education",
    desc: "Conduct value education sessions in schools and colleges, sharing the teachings of Swami Vivekananda with young students.",
  },
  {
    title: "Administrative Support",
    desc: "Support the Ashrama's administrative functions, including documentation, communications, and event coordination.",
  },
];

export default function GetInvolvedPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Get Involved"
        subtitle="Whether as a monk or a volunteer, there are meaningful ways for everyone to participate in the Ashrama's work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved" },
        ]}
      />

      {/* Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ramakrishna Mission Ashrama, Belagavi welcomes all those who are inspired by
              the ideals of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda — whether
              they wish to dedicate their entire lives to the Order as monks, or to contribute
              their time and talents as volunteers in the Ashrama&apos;s service activities.
              There are meaningful ways for everyone to participate in the Ashrama&apos;s work.
            </p>
          </div>
        </div>
      </section>

      {/* Become a Monk */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Become a Monk" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission is a monastic order founded by Swami Vivekananda in the
              tradition of his Master, Sri Ramakrishna Paramahamsa. The monks of the Order
              dedicate their lives to the twin ideals of personal spiritual development and
              selfless service to humanity — &ldquo;Atmano Mokshartham Jagadhitaya cha&rdquo;
              (for one&apos;s own liberation and for the welfare of the world).
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Young men who are inspired by the ideals of Sri Ramakrishna and Swami Vivekananda,
              and who wish to dedicate their lives to the service of God and humanity, may
              seek admission into the Ramakrishna Order. The monastic life offers a unique
              opportunity to pursue spiritual growth while engaging in meaningful service
              through the Order&apos;s vast network of educational, medical, and relief
              activities across India and the world.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "30px" }}>
              The process of joining the monastic Order involves a period of probation and
              training at one of the Order&apos;s centres. Candidates are expected to be
              unmarried, in good health, and motivated by a genuine desire for spiritual
              growth and service — not by personal ambition or material gain. The ideal
              Ramakrishna monk, as Swami Vivekananda envisioned, is a person of character,
              learning, renunciation, and compassion.
            </p>

            <div style={{
              background: "#fff",
              padding: "28px 32px",
              boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
              marginBottom: "30px",
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "16px" }}>General Eligibility</h3>
              <ul className="ul-list" style={{ marginLeft: "16px", fontSize: "15px" }}>
                <li>Male, unmarried, and preferably between 20–35 years of age</li>
                <li>Graduated from a recognised university (graduation or above preferred)</li>
                <li>Motivated by genuine spiritual aspiration and desire for service</li>
                <li>Free from serious financial obligations or family dependencies</li>
                <li>In good physical and mental health</li>
              </ul>
            </div>

            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "24px" }}>
              For detailed information about joining the monastic Order, including the
              application process and requirements, please contact the Ashrama directly.
              You may also write to the Secretary, Ramakrishna Mission Ashrama, Belagavi,
              or send an email to{" "}
              <a href="mailto:belgaum@rkmm.org" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                belgaum@rkmm.org
              </a>
              . Alternatively, refer to the Belur Math website for comprehensive information
              about joining the Order.
            </p>

            <Link href="/contact" className="btn-orange">
              Contact the Ashrama &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Volunteer */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Become a Volunteer" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              For those who wish to serve but are unable to take up monastic life, the
              Ashrama offers many avenues to contribute as volunteers. Volunteering with
              the Ramakrishna Mission is an enriching experience that allows individuals to
              put into practice the ideal of selfless service — karma yoga — while
              contributing to the well-being of their community.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Volunteers are welcome to participate in the Ashrama&apos;s service activities
              such as flood relief operations, welfare distribution programmes, value
              education sessions in schools, and assistance during annual celebrations and
              special events. People with skills in areas such as medical services, teaching,
              management, logistics, and communications are especially valued.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Vivekananda Yuvaka Sangha — the Ashrama&apos;s youth organisation — provides
              a structured platform for young people to engage with the Ashrama throughout
              the year. Members participate in study circles, devotional singing, community
              outreach, and service activities in a spirit of fellowship and shared purpose.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "30px" }}>
              Volunteers are expected to approach their service with sincerity, humility,
              and dedication. The attitude of the volunteer matters as much as the work
              itself — for, as Swami Vivekananda taught, every act of service performed with
              the right spirit is an act of worship.
            </p>

            <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px" }}>
              {volunteerAreas.map((area) => (
                <div key={area.title} className="reveal" style={{
                  border: "1px solid #e0d5cc",
                  padding: "24px",
                  background: "#F3EDE4",
                  transition: "all 0.3s",
                }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#2D2A26", marginBottom: "8px" }}>{area.title}</h3>
                  <p style={{ fontSize: "14px", color: "#8A847C", lineHeight: 1.6 }}>{area.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "24px" }}>
              If you are interested in volunteering with the Ashrama, please get in touch
              with us. We will be happy to discuss how your skills and availability can
              best contribute to the Ashrama&apos;s activities.
            </p>

            <Link href="/contact" className="btn-orange">
              Express Your Interest &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Support Through Donations" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, marginBottom: "24px" }}>
              Financial contributions are another meaningful way to support the Ashrama&apos;s
              activities. Your donation helps fund scholarships for deserving students, free
              eye surgeries at Sri Sharada Netralaya, flood relief operations, and the
              maintenance of the Swami Vivekananda Memorial. All donations are exempt from
              Income Tax under Section 80G of the Income Tax Act.
            </p>
            <Link href="/donate" className="btn-orange">
              Learn How to Donate &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
