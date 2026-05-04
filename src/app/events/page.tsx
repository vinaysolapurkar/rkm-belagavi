import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Events – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const pastEvents: { title: string; date: string; description: string; image: string | null; imageAlt: string | null }[] = [
  {
    title: "Annual Celebrations — February 2021",
    date: "February 26–28, 2021",
    description:
      "The Annual Celebrations of the Ramakrishna Mission Ashrama, Belagavi were observed over three days in February 2021. The celebrations featured spiritual talks by monks of the Ramakrishna Order, devotional music, and community worship. In keeping with the times, sessions were also made available via video recordings so that devotees unable to attend in person could participate.",
    image: "/images/anual_celebration.jpg",
    imageAlt: "Annual Celebrations February 2021",
  },
  {
    title: "Online Japa Yajnas",
    date: "2020 Onwards",
    description:
      "In response to restrictions on public gatherings, the Ashrama began conducting Online Japa Yajnas, inviting devotees across the country to participate in collective japa from the comfort of their homes. The response was enthusiastic, with hundreds of devotees registering and joining the sessions. The Online Japa Yajnas demonstrated that spiritual practice can transcend physical boundaries.",
    image: null,
    imageAlt: null,
  },
  {
    title: "Visit of Shri Pranab Mukherjee, President of India",
    date: "11 October 2012",
    description:
      "A significant day in the annals of the Ramakrishna Mission Ashrama, Belagavi — the honourable President of India, Shri Pranab Mukherjee, visited the Ashrama. The President was received with traditional honours and shown around the Ashrama premises, including the Swami Vivekananda Memorial sites. His visit brought national attention to the Ashrama's historical and spiritual significance.",
    image: "/images/rm-177.jpg",
    imageAlt: "Visit of President Pranab Mukherjee",
  },
  {
    title: "Inauguration of Sri Sharada Netralaya",
    date: "2006",
    description:
      "Sri Sharada Netralaya, the charitable eye hospital set up in the Ashrama premises, was formally inaugurated in 2006. The inauguration was attended by dignitaries, monks of the Ramakrishna Order, medical professionals, and well-wishers of the Ashrama. Since its inception, the Netralaya has rendered invaluable eye care services to the community, including free cataract surgeries for the poor.",
    image: null,
    imageAlt: null,
  },
  {
    title: "Bhoomi Puja — Restoration of Swami Vivekananda Memorial",
    date: "Restoration Project",
    description:
      "The Bhoomi Puja ceremony marked the formal initiation of the restoration work at the Swami Vivekananda Memorial in Belagavi. The restoration project aims to preserve and restore the historic buildings associated with Swami Vivekananda's 12-day visit to Belagavi in October 1892. The ceremony was attended by monks, dignitaries, and devotees who gathered to bless the commencement of this important conservation effort.",
    image: null,
    imageAlt: null,
  },
  {
    title: "Handing Over of Bhate's House (Ramakrishna Sevashrama)",
    date: "Historic Event",
    description:
      "In a historic moment for the Ashrama, Bhate's house — the building in which Swami Vivekananda stayed for the first three days of his visit to Belagavi (October 16–18, 1892) — was handed over to the Ramakrishna Mission. The house, situated at Fort, Belagavi, had been preserved through the generations and was gifted to the Mission to be maintained as a permanent memorial to Swamiji's visit.",
    image: null,
    imageAlt: null,
  },
  {
    title: "Flood Relief Work — August 2019",
    date: "13–25 August 2019",
    description:
      "The Ashrama conducted extensive flood relief operations across the flood-affected regions of Karnataka from 13 to 25 August 2019. Relief kits containing groceries, garments, and toiletries were distributed to hundreds of families in the Nipani and Hukkeri taluks, covering the villages of Manakapur, Bhoj, Mangur, Kunnur, Barwad, Karadaga, Arjunwad, and Sidnal.",
    image: null,
    imageAlt: null,
  },
];

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
              The Ramakrishna Mission Ashrama, Belagavi is a vibrant centre of spiritual
              and cultural activity. Over the years, the Ashrama has been the venue for
              many memorable events — from high-profile state visits and historic ceremonies
              to annual spiritual celebrations and community service programmes.
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
            {/* Silver Jubilee */}
            <Link
              href="/silver-jubilee"
              className="reveal activity-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                alignItems: "start",
                background: "#fff",
                border: "1px solid #E8E2D8",
                borderTop: "3px solid #B8860B",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/anual_celebration.jpg"
                  alt="Silver Jubilee Concluding Celebrations"
                  width={450}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  sizes="450px"
                />
              </div>
              <div style={{ padding: "28px 24px 28px 0" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>
                  May 8&ndash;10, 2026
                </p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "24px", fontWeight: 600, color: "#1A2F2F",
                  marginBottom: "14px", lineHeight: 1.3,
                }}>
                  Silver Jubilee Concluding Celebrations
                </h3>
                <p style={{ fontSize: "15px", color: "#4A4743", lineHeight: 1.8, marginBottom: "16px" }}>
                  Grand concluding celebrations marking 25 years of the Ashrama&rsquo;s
                  service to the community. Three days of spiritual programmes, cultural
                  events, and community gatherings at the Ashrama premises at Fort, Belagavi.
                </p>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#B8860B", textTransform: "uppercase", letterSpacing: "1px" }}>
                  View Details &amp; Register &rsaquo;
                </span>
              </div>
            </Link>

            {/* Japa Yajna */}
            <Link
              href="/activities/japa-yajna"
              className="reveal activity-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                alignItems: "start",
                background: "#fff",
                border: "1px solid #E8E2D8",
                borderTop: "3px solid #B8860B",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/online_japa.jpg"
                  alt="Japa Yajna"
                  width={450}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  sizes="450px"
                />
              </div>
              <div style={{ padding: "28px 24px 28px 0" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>
                  June 10&ndash;14, 2026
                </p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "24px", fontWeight: 600, color: "#1A2F2F",
                  marginBottom: "14px", lineHeight: 1.3,
                }}>
                  Japa Yajna
                </h3>
                <p style={{ fontSize: "15px", color: "#4A4743", lineHeight: 1.8, marginBottom: "16px" }}>
                  A five-day spiritual camp for devotees who have taken initiation (Mantra
                  Deeksha). Participants complete telling their beads one hundred thousand
                  times in the serene surroundings of the Ashrama. Food and stay arranged
                  without any charge.
                </p>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#B8860B", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Learn More &rsaquo;
                </span>
              </div>
            </Link>
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
            Birth anniversaries (Jayantis) of the Holy Trio and direct disciples are
            observed at the Ashrama with special worship, devotional music, and
            discourses. Devotees are warmly invited to participate.
          </p>

          <div style={{ maxWidth: "780px", margin: "0 auto", background: "#fff", border: "1px solid #E8E2D8", boxShadow: "0 4px 20px rgba(26,47,47,0.06)" }}>
            {[
              { date: "8 March 2026", day: "Sunday", title: "Sri Ramakrishna Jayanti", desc: "Birth anniversary of Sri Ramakrishna Paramahamsa" },
              { date: "26 December 2026", day: "Saturday", title: "Sri Sarada Devi Jayanti", desc: "Birth anniversary of the Holy Mother Sri Sarada Devi" },
              { date: "12 January 2027", day: "Tuesday", title: "Swami Vivekananda Jayanti", desc: "Birth anniversary of Swami Vivekananda — observed as National Youth Day" },
              { date: "23 February 2027", day: "Tuesday", title: "Swami Brahmananda Jayanti", desc: "Birth anniversary of Swami Brahmananda, first President of the Ramakrishna Order" },
              { date: "27 January 2027", day: "Wednesday", title: "Kalpataru Day", desc: "Commemoration of Sri Ramakrishna's blessing of devotees at Cossipore" },
            ].map((j, idx, arr) => (
              <div
                key={j.title}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "24px",
                  padding: "22px 28px",
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
              </div>
            ))}
          </div>
          <p className="reveal" style={{ maxWidth: "780px", margin: "30px auto 0", fontSize: "13px", color: "#7A756D", textAlign: "center", fontStyle: "italic" }}>
            Dates are based on the traditional Tithi calendar and may vary slightly each year.
            For confirmed dates and timings, please contact the Ashrama office.
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
