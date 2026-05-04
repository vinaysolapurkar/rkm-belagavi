import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Activities – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

/* ── Shared style tokens ── */
const body: React.CSSProperties = {
  fontSize: "16px",
  color: "#4A4743",
  lineHeight: 1.9,
  textAlign: "justify",
};
const bodyLight: React.CSSProperties = { ...body, color: "rgba(255,255,255,0.82)" };
const sub: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "26px",
  fontWeight: 600,
  color: "#1A2F2F",
  marginBottom: "18px",
  lineHeight: 1.35,
};
const subW: React.CSSProperties = { ...sub, color: "#fff" };
const prose = { maxWidth: "780px", margin: "0 auto" } as const;
const goldBar: React.CSSProperties = {
  borderLeft: "3px solid #B8860B",
  paddingLeft: "18px",
  marginBottom: "16px",
};

/* ── Category hub data ── */
const categories = [
  { title: "Spiritual", desc: "Temple, discourses, retreats & meditation", href: "#spiritual", accent: "#B8860B" },
  { title: "Bookstore & Sales", desc: "Spiritual literature & religious articles", href: "#bookstore", accent: "#8B6914" },
  { title: "Educational", desc: "Computer training, reading room & scholarships", href: "#educational", accent: "#2D5A5A" },
  { title: "Swamiji\u2019s House", desc: "Haripada Mitra's house & monument", href: "#swamijis-house", accent: "#1A2F2F" },
  { title: "Welfare", desc: "Eye clinic, rations & community relief", href: "#welfare", accent: "#6B4E1B" },
  { title: "Value Education /\nPersonality Development", desc: "For Students, Teachers, Parents & General Public", href: "#value-education", accent: "#3D6B6B" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function ActivitiesPage() {
  return (
    <SubpageLayout>
      {/* ── Hero ── */}
      <PageHero
        title="Activities"
        subtitle="Atmano Mokshartham Jagadhitaya cha — for the liberation of self and welfare of the world"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Activities" }]}
      />

      {/* ── Pull Quote ── */}
      <section style={{ padding: "56px 0 20px" }}>
        <div className="site-container">
          <div className="reveal" style={{ ...prose, textAlign: "center" }}>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "0 auto 28px", opacity: 0.5 }} />
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#1A2F2F",
              lineHeight: 1.5,
            }}>
              Activities of the Ashrama are conducted along the lines laid down by Swami
              Vivekananda &mdash; &lsquo;Atmano Mokshartham Jagadhitaya cha&rsquo; or
              &lsquo;for the liberation of self &amp; welfare of the world.&rsquo;
            </p>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "28px auto 0", opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* ── Category Navigation Hub ── */}
      <section style={{ padding: "30px 0 70px" }}>
        <div className="site-container">
          <div className="stagger-children" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "920px",
            margin: "0 auto",
          }}>
            {categories.map((cat) => (
              <a
                key={cat.title}
                href={cat.href}
                className="reveal activity-card"
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "#fff",
                  border: "1px solid #E8E2D8",
                  borderTop: `3px solid ${cat.accent}`,
                  padding: "24px 22px 20px",
                  transition: "box-shadow 0.35s, transform 0.35s",
                  boxShadow: "0 2px 12px rgba(26,47,47,0.06)",
                }}
              >
                <p style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "20px", fontWeight: 700, color: "#1A2F2F",
                  marginBottom: "6px",
                }}>{cat.title}</p>
                <p style={{ fontSize: "13px", color: "#7A756D", lineHeight: 1.55 }}>{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         SPIRITUAL
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="spiritual" style={{ padding: "80px 0 90px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Spiritual" />
          </div>

          {/* ── Universal Temple ── */}
          <div style={prose}>
            <div id="temple" className="reveal scroll-mt-28" style={{ marginBottom: "60px" }}>
              <h3 style={sub}>Universal Temple</h3>

              {/* Temple image + text side by side */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                alignItems: "start",
                marginBottom: "28px",
              }}>
                <div>
                  <p style={{ ...body, marginBottom: "16px" }}>
                    The heart of the Ashrama is the Universal Temple of Bhagavan Sri
                    Ramakrishna, where daily worship and spiritual programmes bring
                    together devotees in a spirit of devotion and service.
                  </p>
                  <p style={{ fontSize: "14px", color: "#7A756D", lineHeight: 1.7 }}>
                    <strong style={{ color: "#1A2F2F" }}>Timings:</strong> 5 am &ndash; 12 pm &amp; 4 pm &ndash; 8 pm
                  </p>
                </div>
                <div style={{
                  overflow: "hidden",
                  border: "1px solid #E8E2D8",
                  boxShadow: "0 8px 30px rgba(26,47,47,0.1)",
                }}>
                  <Image
                    src="/images/kali-puja.jpg"
                    alt="Worship at the Universal Temple"
                    width={400}
                    height={280}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    sizes="400px"
                  />
                </div>
              </div>

              {/* Daily Schedule Card */}
              <div style={{
                background: "#fff",
                border: "1px solid #E8E2D8",
                boxShadow: "0 8px 40px rgba(26,47,47,0.08)",
                overflow: "hidden",
              }}>
                <div style={{
                  background: "#1A2F2F",
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8860B" }} />
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", letterSpacing: "0.5px" }}>
                    Daily Schedule
                  </h4>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  {[
                    { time: "5.30 am", event: "Mangalarati" },
                    { time: "6.15 – 6.45 am", event: "Usha Kirtana comprising Vedic chanting & Stotras" },
                    { time: "8.30 – 9.30 am", event: "Daily worship of Sri Ramakrishna" },
                    { time: "6.30 – 7.30 pm", event: "Sandhya Arati and bhajans" },
                  ].map((row) => (
                    <div key={row.time} style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: "16px",
                      padding: "11px 0",
                      borderBottom: "1px solid #F0EBE3",
                      fontSize: "15px",
                      color: "#4A4743",
                    }}>
                      <span style={{ fontWeight: 600, color: "#1A2F2F" }}>{row.time}</span>
                      <span>{row.event}</span>
                    </div>
                  ))}
                  <p style={{
                    marginTop: "16px",
                    fontSize: "14px",
                    color: "#7A756D",
                    fontStyle: "italic",
                    borderLeft: "3px solid #B8860B",
                    paddingLeft: "14px",
                  }}>
                    On Ekadashi days, Sri Ramanama Sankirtanam after Sandhyarati
                  </p>
                </div>
              </div>
            </div>

            {/* ── Festivals & Celebrations ── */}
            <div id="festivals" className="reveal scroll-mt-28" style={{ marginBottom: "60px" }}>
              <h3 style={sub}>Festivals &amp; Celebrations</h3>
              <p style={{ ...body, marginBottom: "20px" }}>
                Spirituality is the essence of Indian religious life. If the kernel of
                Spirituality is not encased in the protective layers in the form of Puja,
                Ceremonials, observances of festivals etc., probably preliminary levels of
                spirituality and moral culture could never be efficiently communicated and
                propagated. Moreover, these observances place us in touch with the Divine
                qualities of the Lord &ndash; the All-Pure and purifying, All-Powerful yet
                Merciful, All-Knowing yet infinitely Loving. These observances provide us
                an opportunity to mould our lives accordingly after meditating on the lives
                and deeds of Incarnations and saints as well as the fate of those who
                opposed them.
              </p>

              {/* Festival list as elegant callout */}
              <div style={{
                position: "relative",
                background: "linear-gradient(135deg, #1A2F2F 0%, #141F1F 100%)",
                padding: "32px 36px 32px 40px",
                borderLeft: "4px solid #B8860B",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.04,
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)",
                }} />
                <p style={{
                  position: "relative", zIndex: 1,
                  fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px",
                  textTransform: "uppercase", color: "#B8860B", marginBottom: "12px",
                }}>
                  Annual Celebrations
                </p>
                <p style={{
                  position: "relative", zIndex: 1,
                  fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8,
                }}>
                  Jayanti Celebrations of Sri Ramakrishna, Sri Sarada Devi, Swami
                  Vivekananda and sixteen Direct Disciples of Sri Ramakrishna; Sri Rama
                  Navami, Sri Guru Purnima, Sri Krishna Janmashtami, Sri Vinayaka
                  Chaturthi, Sri Saraswati Puja and Sri Durga Puja, Kalpataru Day,
                  Mahashivaratri
                </p>
              </div>
            </div>

            {/* ── Discourses, Retreats, Satsangs ── */}
            <div id="discourses" className="reveal scroll-mt-28" style={{ marginBottom: "60px" }}>
              <h3 style={sub}>Discourses, Spiritual Retreats and Satsangs</h3>

              {/* Schedule as visual cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                {[
                  { when: "Sundays", time: "10.30 am – 12 pm", what: "Adhyatmika Shibira (Spiritual Retreat) comprising Bhajans, Talk, Guided Meditation & Arati to Sri Ramakrishna" },
                  { when: "Sundays", time: "6 – 6.30 pm", what: "Weekly talk on religious scriptures like Vivekachudamani, Gita, Patanjali Yogasutras, etc." },
                  { when: "Last Sunday", time: "6 – 8 pm", what: "Satsang at the Swami Vivekananda Memorial (sub-centre of the Ashrama)" },
                  { when: "Occasional", time: "", what: "Talks by visiting monks are organized from time to time" },
                ].map((item) => (
                  <div key={item.what} style={{
                    background: "#F8F5EF",
                    padding: "20px",
                    borderTop: "3px solid #B8860B",
                  }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "4px" }}>
                      {item.when}
                    </p>
                    {item.time && (
                      <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A2F2F", marginBottom: "8px" }}>
                        {item.time}
                      </p>
                    )}
                    <p style={{ fontSize: "14px", color: "#4A4743", lineHeight: 1.6 }}>
                      {item.what}
                    </p>
                  </div>
                ))}
              </div>

              <p style={body}>
                Spiritual Retreats (Bhakta Sammelan) are organized a couple of times
                every year for devotees comprising bhajans, talks and interactive sessions
                with monks.
              </p>
            </div>

            {/* ── Japa Yajna ── */}
            <div id="japa-yajna" className="reveal scroll-mt-28" style={{ marginBottom: "60px" }}>
              <h3 style={sub}>Japa Yajna</h3>

              {/* Image + text layout */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                alignItems: "start",
                marginBottom: "24px",
              }}>
                <div style={{
                  overflow: "hidden",
                  border: "1px solid #E8E2D8",
                  boxShadow: "0 8px 30px rgba(26,47,47,0.1)",
                }}>
                  <Image
                    src="/images/online_japa.jpg"
                    alt="Japa Yajna at the Ashrama"
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    sizes="400px"
                  />
                </div>
                <div>
                  <p style={{ ...body, marginBottom: "14px" }}>
                    Japa Yajna is a five-day spiritual camp in the serene surroundings
                    of the Ashrama. It is specifically meant for those devotees of Sri
                    Ramakrishna who have taken initiation (Mantra Deeksha).
                  </p>
                  <p style={{ fontSize: "14px", color: "#4A4743", lineHeight: 1.8 }}>
                    During their stay the participants are to complete telling their
                    beads (Japa) one hundred thousand times.
                  </p>
                </div>
              </div>

              <p style={{ ...body, marginBottom: "18px" }}>
                It provides them an opportunity to practice spiritual disciplines in the
                holy atmosphere of the Ashrama sanctified by the visit and stay of Swami
                Vivekananda. This programme is interspersed with Bhajans &amp;
                Sankeertana, readings from &lsquo;the Gospel of Sri Ramakrishna&rsquo;,
                spiritual discourses, etc. The Ashrama makes arrangements for their food
                and stay without any charge.
              </p>

              <h4 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "22px", fontWeight: 600, color: "#1A2F2F",
                marginBottom: "14px",
              }}>
                The aim of the project
              </h4>
              <p style={{ ...body, marginBottom: "28px" }}>
                There are several devotees who receive Mantra Diksha from the Ramakrishna
                Mission. Many are unable to undertake regular spiritual practice due to
                pressures of work and worldly duties but are nevertheless eager to
                discipline their minds and direct it to God. Japa Yajna provides them an
                opportunity to mould their spiritual life through solitude, satsanga and
                singing, as exhorted by Sri Ramakrishna, and learn to &lsquo;apply oil
                onto their fingers&rsquo; while dealing with this sticky world.
              </p>

              {/* Accent Callout */}
              <div style={{
                background: "linear-gradient(135deg, #FBF7ED 0%, #F8F0DD 100%)",
                border: "2px solid #B8860B",
                borderRadius: "4px",
                padding: "28px 32px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg, #B8860B, #D4C078, #B8860B)",
                }} />
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                  Upcoming
                </p>
                <p style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "26px", fontWeight: 700, color: "#1A2F2F",
                  marginBottom: "6px",
                }}>
                  Next Japa Yajna &mdash; June 10 to 14, 2026
                </p>
                <p style={{ fontSize: "15px", color: "#6B4E1B", fontWeight: 500 }}>
                  Registrations open
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         BOOKSTORE AND SALES
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="bookstore" style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Bookstore and Sales" />
          </div>

          <div style={prose}>
            <div className="reveal">
              <p style={{ ...body, marginBottom: "32px" }}>
                The Ashrama has a spacious and well laid out bookstore and sales counter.
                Authentic Ramakrishna-Vivekananda and Vedanta literature is available
                through various books and publications of the centres of the Ramakrishna
                Order.
              </p>

              {/* Book categories as visual grid */}
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "18px" }}>
                Books and literature on
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
                {[
                  { title: "Sri Ramakrishna & Disciples", text: "Sri Ramakrishna, Holy Mother, Swami Vivekananda and other Disciples" },
                  { title: "Scriptures", text: "Upanishads, Gita, and Indian Philosophies with commentaries and explanations" },
                  { title: "Spiritual Life & Practice", text: "Books on religion, yoga, meditation & concentration for spiritual seekers" },
                  { title: "Self Help", text: "Positive psychology: will-power, mind control, stress relief, personality development" },
                  { title: "Children\u2019s Books", text: "Stories and teachings adapted for young readers to build character and values" },
                  { title: "Pocket Books & Booklets", text: "Easy reading and inspiration for everyday spiritual life" },
                ].map((cat) => (
                  <div key={cat.title} style={{
                    background: "#fff",
                    padding: "18px 20px",
                    borderLeft: "3px solid #B8860B",
                    boxShadow: "0 2px 10px rgba(26,47,47,0.05)",
                  }}>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#1A2F2F", marginBottom: "4px" }}>{cat.title}</p>
                    <p style={{ fontSize: "13px", color: "#7A756D", lineHeight: 1.55 }}>{cat.text}</p>
                  </div>
                ))}
              </div>

              <p style={{ ...body, marginBottom: "12px" }}>
                Books in English, Kannada, Marathi and Hindi languages are available.
              </p>
              <p style={{ ...body, marginBottom: "28px" }}>
                Religious Articles like photo frames, Incense sticks, Asanas for
                meditation, Rudraksha mala, Small bags, etc. are also available.
              </p>

              {/* Timings Card */}
              <div style={{
                background: "#fff",
                border: "1px solid #E8E2D8",
                boxShadow: "0 8px 40px rgba(26,47,47,0.08)",
                overflow: "hidden",
                maxWidth: "340px",
              }}>
                <div style={{
                  background: "#1A2F2F",
                  padding: "14px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#B8860B" }} />
                  <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>Bookstore Timings</h4>
                </div>
                <div style={{ padding: "18px 24px", fontSize: "15px", color: "#4A4743", lineHeight: 1.8 }}>
                  <p>9.30 am &ndash; 12.00 pm</p>
                  <p>4.00 pm &ndash; 7.30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         SWAMIJI'S HOUSE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="swamijis-house" style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}>
            <div style={{
              overflow: "hidden",
              border: "1px solid #E8E2D8",
              boxShadow: "0 12px 50px rgba(26,47,47,0.12)",
            }}>
              <Image
                src="/images/swamijis-house.jpg"
                alt="Swamiji's House — erstwhile Haripada Mitra's house"
                width={450}
                height={340}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="450px"
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
                Erstwhile Haripada Mitra&rsquo;s House
              </p>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "32px", fontWeight: 600, color: "#1A2F2F",
                marginBottom: "16px", lineHeight: 1.3,
              }}>
                Swamiji&rsquo;s House
              </h2>
              <p style={{ ...body, marginBottom: "16px" }}>
                This house in which Swami Vivekananda stayed for 9 days in October 1892 was the residential quarters of Sri Haripada Mitra, a sub-divisional forest officer.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                In June 2000 the house was gifted by the Karnataka State Government to the Ramakrishna Mission to start a new Ashrama. The house was renovated in 2001 and converted into a monument dedicated to the sacred memory of Swamiji. The main hall has been converted into a Dhyana Mandir with a captivating statue of the Swami inspiring visitors to spend time in meditation and quiet contemplation.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                The adjoining rooms contain small galleries of paintings that vividly portray incidents from Swamiji&rsquo;s time in Belgaum and trace his journey as a wandering monk.
              </p>
              <p style={{ ...body, fontStyle: "italic", fontWeight: 500 }}>
                Being one of the few existing structures in the south of India sanctified by the stay of Swami Vivekananda, this place is a must see for visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         EDUCATIONAL — dark teal cinematic band
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="educational" style={{ padding: "80px 0", background: "#1A2F2F", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
        }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
              Empowering through knowledge
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 600, color: "#fff", marginBottom: "14px",
            }}>Educational</h2>
            <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "0 auto", borderRadius: "2px" }} />
          </div>

          {/* Prose layout */}
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>

            {/* ── Computer Training Centre ── */}
            <div id="computer-training" className="reveal scroll-mt-28" style={{ marginBottom: "56px" }}>
              <h3 style={subW}>Free Computer Training Centre</h3>
              <p style={{ ...bodyLight, marginBottom: "16px" }}>
                The Ashrama runs a Free Computer Training Center to make digital education accessible to underprivileged students unable to afford courses in regular computer institutes.
              </p>
              <p style={{ ...bodyLight, marginBottom: "16px" }}>
                Courses cover basic computer literacy, data entry, MS Office, and internet usage along with specialized training in financial accounting. The syllabus helps students gain confidence and an ability to handle basic office jobs.
              </p>
              <p style={{ ...bodyLight, marginBottom: "28px" }}>
                Short term courses (2 months) on Computer Fundamentals, MS Office and Tally software are offered here.
              </p>

              {/* Batch Timings Card */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                maxWidth: "400px",
                marginBottom: "24px",
              }}>
                <div style={{
                  background: "#1A2F2F",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  padding: "14px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#B8860B" }} />
                  <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>Batch Timings</h4>
                </div>
                <div style={{ padding: "18px 24px", background: "#fff" }}>
                  {[
                    "8 \u2013 9.30 am",
                    "10 \u2013 11.30 am",
                    "2 \u2013 3.30 pm",
                    "3.30 \u2013 5 pm",
                    "5 \u2013 6.30 pm",
                  ].map((t) => (
                    <p key={t} style={{ fontSize: "15px", color: "#4A4743", lineHeight: 1.8 }}>{t}</p>
                  ))}
                </div>
              </div>

              <div style={goldBar}>
                <p style={{ ...bodyLight, fontSize: "14px" }}>
                  <strong style={{ color: "#fff" }}>Registration:</strong> Interested students may visit the reception of the Computer Centre at the Ashrama between 8 am and 8 pm for more details and register their names.
                </p>
              </div>
            </div>

            {/* ── Reading Room ── */}
            <div id="reading-room" className="reveal scroll-mt-28" style={{ marginBottom: "56px" }}>
              <h3 style={subW}>Free Reading Room</h3>
              <p style={{ ...bodyLight, marginBottom: "16px" }}>
                A free reading room with a capacity of 80 is being run to help students studying for competitive exams. The quiet and elevating environs of the Ashrama provide an ideal ambience for serious study.
              </p>

              {/* Reading Room Timings Card */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                maxWidth: "400px",
                marginBottom: "24px",
              }}>
                <div style={{
                  background: "#1A2F2F",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  padding: "14px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#B8860B" }} />
                  <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>Reading Room Timings</h4>
                </div>
                <div style={{ padding: "18px 24px", background: "#fff" }}>
                  <p style={{ fontSize: "15px", color: "#4A4743", lineHeight: 1.8 }}>8 am to 8 pm</p>
                </div>
              </div>

              <div style={goldBar}>
                <p style={{ ...bodyLight, fontSize: "14px" }}>
                  <strong style={{ color: "#fff" }}>Registration:</strong> Interested students may visit the reception of the Reading Room at the Ashrama between 8 am and 8 pm for more details and register their names.
                </p>
              </div>
            </div>

            {/* ── Scholarships ── */}
            <div id="scholarships" className="reveal scroll-mt-28">
              <h3 style={subW}>Scholarships</h3>
              <p style={{ ...bodyLight, marginBottom: "16px" }}>
                The Ramakrishna Mission Ashrama, Belgaum provides financial assistance each year to deserving and needy students pursuing higher education.
              </p>

              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", marginTop: "28px" }}>
                Eligibility
              </p>
              <ul style={{ ...bodyLight, paddingLeft: "20px", marginBottom: "20px" }}>
                <li style={{ marginBottom: "6px" }}>Demonstrated Academic excellence</li>
                <li>Financial need must be proven</li>
              </ul>

              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
                Process
              </p>
              <ul style={{ ...bodyLight, paddingLeft: "20px", marginBottom: "20px" }}>
                <li style={{ marginBottom: "6px" }}>Disbursed once a year; amount varies by course</li>
                <li style={{ marginBottom: "6px" }}>Applications invited at the beginning of the academic session (June/July)</li>
                <li style={{ marginBottom: "6px" }}>Verification through personal interview</li>
                <li>Final selection based on merit and need</li>
              </ul>

              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
                Funds
              </p>
              <p style={{ ...bodyLight, marginBottom: "28px" }}>
                Supported by generous donations and endowment funds in memory of loved ones. Donors are encouraged to contact the Ashrama office.
              </p>

              {/* Scholarship callout */}
              <div style={{
                background: "linear-gradient(135deg, #FBF7ED 0%, #F8F0DD 100%)",
                border: "2px solid #B8860B",
                borderRadius: "4px",
                padding: "28px 32px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg, #B8860B, #D4C078, #B8860B)",
                }} />
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                  Now Accepting
                </p>
                <p style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "26px", fontWeight: 700, color: "#1A2F2F",
                  marginBottom: "14px",
                }}>
                  Applications for Annual Scholarships 2026
                </p>
                <span
                  style={{
                    display: "inline-block",
                    background: "#B8860B",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "12px 28px",
                    transition: "background 0.3s",
                    opacity: 0.5,
                    cursor: "not-allowed",
                  }}
                >
                  Applications Opening Soon
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         WELFARE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="welfare" style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading
              title="Welfare"
              subtitle="Following the ideal of serving man as God — Shiva Jnane Jiva Seva"
            />
          </div>

          {/* Welfare cards */}
          <div className="stagger-children" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "960px",
            margin: "0 auto",
          }}>
            {[
              {
                id: "netralaya",
                title: "Shri Sharada Netralaya",
                label: "Free Eye Clinic",
                text: "A charitable eye clinic providing free ophthalmic consultations, medicines, and spectacles to patients from economically weaker sections. The clinic conducts regular eye camps in surrounding villages and urban slums, screening hundreds of patients and referring those requiring surgical intervention for free cataract and other eye surgeries. This initiative has restored the gift of sight to thousands of patients since its inception.",
              },
              {
                id: "dravya-yajna",
                title: "Dravya Yajna",
                label: "Ration Distribution",
                text: "Groceries are provided every month to about 60 poor families, including items like rice, wheat flour (atta), edible oil, lentils (dal). The list of beneficiaries is re-evaluated and verified each year to ensure that the programme benefits the needy.",
              },
              {
                id: "misc-welfare",
                title: "Miscellaneous Welfare",
                label: "Community Relief",
                text: "Distribution of blankets and warm clothing during winter to homeless and destitute individuals, flood relief and disaster response for affected communities, distribution of educational materials to students, and other forms of direct aid. The Ashrama responds swiftly to local emergencies in the spirit of selfless service taught by Sri Ramakrishna and Swami Vivekananda.",
              },
            ].map((card) => (
              <div
                key={card.id}
                id={card.id}
                className="reveal scroll-mt-28"
                style={{
                  background: "#fff",
                  border: "1px solid #E8E2D8",
                  borderTop: "3px solid #B8860B",
                  padding: "28px 24px",
                  boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>
                  {card.label}
                </p>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "22px", fontWeight: 600, color: "#1A2F2F",
                  marginBottom: "14px", lineHeight: 1.3,
                }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: "#4A4743", lineHeight: 1.7 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         VALUE EDUCATION / PERSONALITY DEVELOPMENT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}

      {/* Section header on cream */}
      <section id="value-education" style={{ padding: "80px 0 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading
              title="Value Education / Personality Development"
              subtitle="Moulding character and personality in the light of Swami Vivekananda&rsquo;s man-making ideals"
            />
          </div>
        </div>
      </section>

      {/* ── FOR STUDENTS — cream background ── */}
      <section id="for-students" style={{ padding: "40px 0 80px", background: "#F3EDE4" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "32px" }}>
              For Students
            </p>

            {/* Balaka / Balika Sangha */}
            <div id="sanghas" className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
              marginBottom: "28px",
            }}>
              <h3 style={sub}>Vivekananda Balaka Sangha / Sharada Balika Sangha</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                Vivekananda Balaka Sangha and Sharada Balika Sangha are value orientation and personality development programmes for boys and girls respectively. The sessions are conducted every Sunday for students in the age group 10&ndash;15 (classes V to X).
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                This programme enables children to gradually imbibe some of the eternal values and virtues presented in our great spiritual tradition, particularly exemplified in the message of Swami Vivekananda.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                The activities of the Balaka Sangha and Balika Sangha aim to introduce children to our cultural and spiritual heritage, encourage them to develop good habits, self-discipline, realize the importance of values like truth, unselfishness, equality and so on. The idea is all-round growth through physical, intellectual and moral development.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                Activities include prayers, Vedic and Gita chanting, hymns and bhajans, yogasanas, storytelling, and interactive sessions on relevant topics for children of this age group.
              </p>
              <p style={{ ...body, marginBottom: "20px" }}>
                <strong>Vasanta Vihara</strong> &ndash; the annual summer camp is held during school holidays for about two weeks daily.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Parents can contact the Ashrama office for more details to enroll their children for the Balaka Sangha and Balika Sangha.
                </p>
              </div>
            </div>

            {/* Yuvaka Sangha */}
            <div className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
              marginBottom: "28px",
            }}>
              <h3 style={sub}>Vivekananda Yuvaka Sangha</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                For youths in the age group of 15&ndash;30 years.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                The Vivekananda Yuvaka Sangha &mdash; the Ashrama&rsquo;s youth organisation &mdash; provides a structured platform for young people to engage with the Ashrama throughout the year. Members participate in study circles, devotional activities, community outreach and service activities in a spirit of fellowship and shared purpose.
              </p>
              <p style={body}>
                Some of the members may also offer volunteer services assisting in the Ashrama&rsquo;s activities. Approaching their service with sincerity, humility, and dedication, as Swami Vivekananda taught, every act of service is performed with the right spirit as an act of worship.
              </p>
            </div>

            {/* Bala Samskara Shibir */}
            <div className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
              marginBottom: "28px",
            }}>
              <h3 style={sub}>Bala Samskara Shibir</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                This is a programme run at the Swami Vivekananda Memorial (sub-centre of the Ashrama) on similar lines of the Balaka Sangha and Balika Sangha.
              </p>
              <p style={{ ...body, marginBottom: "16px" }}>
                The Bala Samskara Shibir is for children in the age group of 6 to 9 years (classes 1 to 4).
              </p>
              <p style={{ ...body, marginBottom: "20px" }}>
                The focus here is to harness and redirect the enthusiasm and energy of the young ones through learning and recreational activities. Children learn chanting shlokas and short hymns, devotional songs and prayers, yogasanas, craftwork, drawing, fun and fitness exercises and games, gardening, clay modeling, spoken Sanskrit, etc.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Parents can contact the office at Swami Vivekananda Memorial (sub-centre) for more details and to enroll their children.
                </p>
              </div>
            </div>

            {/* Six-week PD Workshops */}
            <div className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
              marginBottom: "28px",
            }}>
              <h3 style={sub}>Six-week Personality Development Workshops</h3>
              <p style={{ ...body, marginBottom: "20px" }}>
                These comprise of 6 classroom sessions held on consecutive Sundays (six weeks) from 12 noon to 1.30 pm.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Free Entry. Registration required.
                </p>
              </div>
            </div>

            {/* Residential Retreats for Students */}
            <div className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
            }}>
              <h3 style={sub}>Residential Retreats for Students</h3>
              <p style={{ ...body, marginBottom: "20px" }}>
                These 3-day retreats are conducted periodically for college students. They start from Thursday evening and continue till Sunday afternoons with the students compulsorily staying at the Ashrama.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Students can contact the Ashrama office for information and registration for these retreats.
                </p>
              </div>
            </div>

            {/* Youth Conventions */}
            <div className="reveal scroll-mt-28" style={{
              background: "#fff",
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              border: "1px solid #E8E2D8",
              borderLeft: "3px solid #B8860B",
              marginTop: "28px",
            }}>
              <h3 style={sub}>Youth Conventions</h3>
              <p style={{ ...body, marginBottom: "20px" }}>
                Half-day conventions for college level students are held periodically at the Ashrama. Youth-oriented topics are addressed by monks and other eminent speakers during these conventions.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Students can contact the Ashrama office for information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR TEACHERS — white background ── */}
      <section id="for-teachers" style={{ padding: "80px 0", background: "#fff" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "32px" }}>
              For Teachers
            </p>

            <div className="reveal scroll-mt-28" style={{ marginBottom: "50px" }}>
              <h3 style={sub}>Teachers&rsquo; Conventions</h3>
              <p style={body}>
                Half-day conventions comprising talks by education experts for school teachers and also B.Ed. students are conducted occasionally every year.
              </p>
            </div>

            <div className="reveal scroll-mt-28">
              <h3 style={sub}>Residential Retreats for Teachers</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                3-day residential retreats are conducted periodically for school teachers. They start from Thursday evening and end on Sunday afternoon. Teachers stay in the Ashrama and follow a routine comprising guided meditation, classroom sessions and discussions on topics relevant to their professional and personal well-being and development. Experts and trained education professionals conduct the sessions while monks of the Ashrama conduct guided meditation sessions and question-answer sessions.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration:</strong> Teachers may contact the Ashrama office for information and registration for these retreats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR PARENTS & GENERAL PUBLIC — cream background ── */}
      <section id="for-parents" style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "32px" }}>
              For Parents &amp; General Public
            </p>

            <div className="reveal scroll-mt-28" style={{ marginBottom: "50px" }}>
              <h3 style={sub}>Parents&rsquo; Workshops</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                Half-day workshops for parents are conducted each year. Today&rsquo;s parents face the difficult task of balancing professional responsibilities with family life while raising children. Many wish they had expert guidance to help them navigate this challenge.
              </p>
              <p style={body}>
                The Ashrama conducts parents&rsquo; workshops every year involving child behaviour and psychology experts, monks and teachers to help equip parents to handle the delicate task of nurturing children and teenagers in their formative years.
              </p>
            </div>

            <div id="meditation" className="reveal scroll-mt-28" style={{ marginBottom: "50px" }}>
              <h3 style={sub}>Meditation Courses</h3>
              <p style={body}>
                Guided meditation courses are conducted by monks of the Ashrama periodically. These are usually held on 3 consecutive evenings (usually Friday to Sunday evenings).
              </p>
            </div>

            <div id="yogasana" className="reveal scroll-mt-28">
              <h3 style={sub}>Yogasana Classes</h3>
              <p style={{ ...body, marginBottom: "16px" }}>
                Yogasana classes are conducted every morning at the Swami Vivekananda Memorial (sub-centre of the Ashrama on Risaldar Galli). Separate batches are held for ladies and gents with experienced instructors for guidance.
              </p>
              <div style={goldBar}>
                <p style={{ ...body, fontSize: "14px" }}>
                  <strong style={{ color: "#1A2F2F" }}>Registration &amp; Fees:</strong> Kindly contact the office at Swami Vivekananda Memorial for further details about the yogasana classes including fees and enrollment procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Support Through Donations ━━ */}
      <section id="donations" style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
              Support Through Donations
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(28px, 3.5vw, 36px)",
              fontWeight: 600, color: "#1A2F2F",
              marginBottom: "24px", lineHeight: 1.3,
            }}>
              Help Us Serve
            </h2>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Financial contributions are another meaningful way to support the Ashrama&rsquo;s activities. Your donation helps fund numerous activities of the Ashrama such as scholarships for deserving students, free eye surgeries at Sri Sharada Netralaya, relief operations as and when taken up, upkeep and maintenance of the Ashrama, maintenance of the Swami Vivekananda Memorial, etc.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "28px" }}>
              All donations are exempt from Income Tax under Section 80G of the Income Tax Act.
            </p>
            <Link
              href="/donate"
              style={{
                display: "inline-block",
                background: "#B8860B",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 36px",
                transition: "background 0.3s",
              }}
            >
              Donate Now &rarr;
            </Link>
            <p style={{ fontSize: "13px", color: "#7A756D", marginTop: "14px", fontStyle: "italic" }}>
              For contributions by Indian Nationals only
            </p>
          </div>
        </div>
      </section>

      {/* ━━ Closing cinematic band ━━ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", maxHeight: "300px", overflow: "hidden" }}>
          <Image
            src="/images/anual_celebration.jpg"
            alt="Annual celebrations at the Ashrama"
            width={1400}
            height={500}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            sizes="100vw"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(26,47,47,0.88), rgba(26,47,47,0.55))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#fff",
              textAlign: "center",
              maxWidth: "700px",
              padding: "0 20px",
              lineHeight: 1.5,
            }}>
              &ldquo;The goal of human life is the realization of the Ultimate Reality
              which alone can give man supreme fulfilment and everlasting peace.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
