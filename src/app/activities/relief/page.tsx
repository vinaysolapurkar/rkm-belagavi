import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Relief Activities – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const reliefTimeline = [
  {
    date: "August 2019",
    heading: "Flood Situation in Karnataka",
    content:
      "Severe floods struck large parts of Karnataka in August 2019, causing widespread devastation to homes, livelihoods, and infrastructure. The districts of Belagavi, Bagalkot, Vijayapura, and surrounding areas were among the worst affected. Thousands of families were displaced, and urgent relief was needed.",
  },
  {
    date: "13–15 August 2019",
    heading: "Initial Relief Operations Begin",
    content:
      "The Ramakrishna Mission Ashrama, Belagavi immediately mobilised its resources and volunteers in response to the flood crisis. The first phase of relief operations began on 13 August 2019, with the preparation and distribution of relief kits to affected families in the Nipani and Hukkeri taluks of Belagavi district.",
  },
  {
    date: "16–18 August 2019",
    heading: "Relief Reaches Flood-Affected Villages",
    content:
      "Relief kits were distributed to families in the villages of Manakapur, Bhoj, and Mangur. Each relief kit contained essential groceries (rice, dal, cooking oil, salt, sugar), garments, and toiletries. The kits were designed to meet the immediate survival needs of a family for approximately a week.",
  },
  {
    date: "19–21 August 2019",
    heading: "Operations Extended to More Villages",
    content:
      "The relief operations were extended to additional flood-affected villages including Kunnur, Barwad, and Karadaga. Volunteer teams from the Ashrama worked tirelessly under challenging conditions, navigating flooded roads and damaged infrastructure to reach the most affected communities.",
  },
  {
    date: "22–25 August 2019",
    heading: "Final Phase — Arjunwad and Sidnal",
    content:
      "The final phase of relief distribution covered the villages of Arjunwad and Sidnal. By the conclusion of the operations on 25 August 2019, the Ashrama had distributed relief kits to hundreds of families across multiple taluks and villages, providing much-needed comfort and support to those who had lost everything in the floods.",
  },
  {
    date: "Post-August 2019",
    heading: "Assessment and Follow-Up",
    content:
      "Following the initial relief phase, the Ashrama conducted a follow-up assessment to understand the long-term needs of the affected communities. Further assistance was provided as required, and the Ashrama remained in contact with local community leaders to ensure that aid reached those most in need.",
  },
];

const reliefImages = [
  { src: "/images/floodrelief_work.jpg", alt: "Flood relief work" },
  { src: "/images/frelief.jpg", alt: "Relief distribution" },
  { src: "/images/frelief42.jpg", alt: "Relief kits distribution" },
  { src: "/images/relief2019.jpg", alt: "Flood relief 2019" },
  { src: "/images/relief2019-1.jpg", alt: "Flood relief 2019 – volunteers" },
  { src: "/images/f_relief.jpg", alt: "Flood relief operations" },
  { src: "/images/relief_082019.jpg", alt: "Relief August 2019" },
  { src: "/images/relief_08_2019.jpg", alt: "Relief distribution August 2019" },
  { src: "/images/relief-201908.jpg", alt: "Relief 2019 August" },
];

export default function ReliefActivitiesPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Relief Activities"
        subtitle="Responding swiftly to natural calamities, serving the poor and the suffering as living embodiments of God."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Relief Activities" },
        ]}
      />

      {/* Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission has a long and distinguished history of disaster relief
              work across India. True to this tradition, the Ramakrishna Mission Ashrama,
              Belagavi has actively responded to natural calamities affecting the people of
              northern Karnataka, most notably the devastating floods of August 2019.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              In the spirit of Swami Vivekananda&apos;s call to serve the poor and the suffering
              as living embodiments of God, the Ashrama mobilises its resources, volunteers,
              and the generosity of its donors to provide timely and effective relief to those
              who are most affected by disasters.
            </p>
          </div>
        </div>
      </section>

      {/* Flood Relief 2019 */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Flood Relief Work — August 2019" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "24px" }}>
              In August 2019, catastrophic floods caused widespread destruction across
              many districts of Karnataka. Responding swiftly to the crisis, the Ramakrishna
              Mission Ashrama, Belagavi undertook an extensive flood relief programme from
              13 to 25 August 2019, covering affected villages in the Nipani and Hukkeri
              taluks of Belagavi district.
            </p>

            {/* Villages served */}
            <div style={{
              background: "#fff",
              padding: "24px 28px",
              boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
              marginBottom: "24px",
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "14px" }}>
                Villages Served
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Manakapur", "Bhoj", "Mangur", "Kunnur", "Barwad", "Karadaga", "Arjunwad", "Sidnal"].map(
                  (village) => (
                    <span
                      key={village}
                      style={{
                        background: "#2C2C2C",
                        color: "#fff",
                        fontSize: "13px",
                        padding: "6px 16px",
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                      }}
                    >
                      {village}
                    </span>
                  )
                )}
              </div>
            </div>

            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Each relief kit distributed by the Ashrama contained essential groceries
              including rice, dal, cooking oil, salt, and sugar; garments for the family;
              and toiletries to meet basic hygiene needs. The kits were carefully assembled
              to provide practical support to flood-affected families while they worked to
              rebuild their lives and livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Relief Operations Timeline" />
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #C4922A, #2C2C2C)", opacity: 0.3 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {reliefTimeline.map((entry, idx) => (
                <div key={idx} className="reveal" style={{ paddingLeft: "56px", position: "relative" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "8px",
                    top: "8px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#2C2C2C",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    boxShadow: "0 2px 8px rgba(117,58,15,0.3)",
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ background: "#F3EDE4", padding: "24px 28px" }}>
                    <p style={{ color: "#C4922A", fontSize: "13px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{entry.date}</p>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26", marginBottom: "10px" }}>
                      {entry.heading}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, textAlign: "justify" }}>
                      {entry.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Flood Relief — Photo Gallery" />
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", maxWidth: "900px", margin: "0 auto" }}>
            {reliefImages.map((img) => (
              <div key={img.src} className="reveal" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="300px"
                  style={{ transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Support Relief Activities" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The relief activities of the Ramakrishna Mission Ashrama are made possible
              through the generous support of donors and well-wishers. Your contribution
              helps the Ashrama respond swiftly and effectively to future disasters and
              continue its ongoing welfare programmes for the underprivileged.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "30px" }}>
              Donations to the Ashrama are exempt from Income Tax under Section 80G of the
              Income Tax Act. To contribute to the Ashrama&apos;s relief and welfare activities,
              please visit our{" "}
              <Link href="/donate" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                Donate
              </Link>{" "}
              page or contact us directly.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/donate" className="btn-orange">
                Donate Now &nbsp;&rsaquo;
              </Link>
              <Link href="/activities" className="btn-orange" style={{ background: "#2C2C2C" }}>
                &larr; &nbsp;Back to Activities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
