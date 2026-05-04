import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = { title: "Ashrama at Fort – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI" };

export default function AshramaPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Ashrama at Fort"
        subtitle="The historic centre of the Ramakrishna Mission in Belagavi, established at the very house where Swami Vivekananda stayed in 1892."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ashrama at Fort" },
        ]}
      />

      {/* Hero Image — cinematic framed centerpiece */}
      <section style={{ position: "relative", padding: "60px 0 30px", background: "linear-gradient(180deg, #F3EDE4 0%, #F8F5EF 100%)" }}>
        {/* decorative top ornament */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #B8860B)" }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8860B" aria-hidden>
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#B8860B", margin: 0 }}>
            Fort, Belagavi
          </p>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8860B" aria-hidden>
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, #B8860B, transparent)" }} />
        </div>

        <div className="site-container">
          <div
            className="reveal"
            style={{
              position: "relative",
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "14px",
              background: "linear-gradient(135deg, #B8860B 0%, #D4A547 50%, #B8860B 100%)",
              boxShadow: "0 30px 80px rgba(26,47,47,0.18), 0 8px 25px rgba(184,134,11,0.15)",
            }}
          >
            {/* inner cream frame */}
            <div style={{ background: "#F8F5EF", padding: "10px", position: "relative" }}>
              {/* image */}
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "21 / 9", background: "#1A2F2F" }}>
                <Image
                  src="/images/home-ashrama.jpg"
                  alt="Ramakrishna Mission Ashrama at Fort, Belagavi — the Universal Temple and the historic Haripada Mitra house"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  style={{ objectFit: "cover", objectPosition: "center 60%" }}
                />

                {/* corner ornaments */}
                {[
                  { top: 12, left: 12, rotate: 0 },
                  { top: 12, right: 12, rotate: 90 },
                  { bottom: 12, right: 12, rotate: 180 },
                  { bottom: 12, left: 12, rotate: 270 },
                ].map((c, i) => (
                  <svg
                    key={i}
                    width="38"
                    height="38"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: c.top,
                      bottom: c.bottom,
                      left: c.left,
                      right: c.right,
                      transform: `rotate(${c.rotate}deg)`,
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                    }}
                  >
                    <path d="M2 2 L18 2 M2 2 L2 18" stroke="#D4A547" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="2" cy="2" r="3" fill="#B8860B" />
                  </svg>
                ))}

                {/* subtle vignette */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
                  pointerEvents: "none",
                }} />

                {/* nameplate caption */}
                <div style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(26,47,47,0.88)",
                  backdropFilter: "blur(8px)",
                  padding: "14px 32px",
                  borderTop: "2px solid #B8860B",
                  borderBottom: "2px solid #B8860B",
                  textAlign: "center",
                  maxWidth: "92%",
                }}>
                  <p style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "clamp(18px, 2.4vw, 26px)",
                    fontWeight: 500,
                    color: "#F8F5EF",
                    letterSpacing: "1px",
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Ramakrishna Mission Ashrama
                  </p>
                  <p style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#D4A547",
                    margin: "4px 0 0",
                  }}>
                    Fort &middot; Belagavi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* caption below */}
          <p className="reveal" style={{
            textAlign: "center",
            marginTop: "26px",
            fontSize: "14px",
            color: "#7A756D",
            fontStyle: "italic",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}>
            The Universal Temple and the historic Haripada Mitra House &mdash; where Swami
            Vivekananda stayed for nine days in October 1892.
          </p>
        </div>
      </section>

      {/* About the Fort Ashrama */}
      <section style={{ padding: "60px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="about" title="About the Fort Ashrama" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Sometime in 1998, Revered Swami Smarananandaji Maharaj, the then General Secretary, Ramakrishna Math and Ramakrishna Mission initiated a research into Swami Vivekananda&apos;s stay in Belagavi. It was well known that Swamiji had stayed in Sri Haripada Mitra&apos;s house in Belagavi and that Haripada Mitra was a sub-divisional forest officer in 1892 and also that Swamiji had written letters to Haripada Mitra to his Belagavi address from America. But it was not known which particular house in Belagavi it was or even where in Belagavi that house was located!
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              After a lot of study it was ascertained categorically that Survey No.357, Fort, Belagavi &ndash; 590016, was the blessed house of Sri Haripada Mitra where Swamiji had stayed for 9 days in October 1892. Once this was confirmed, an appeal was made by well-wishers to the Karnataka State Government. In response the State Government handed over this building along with 0.8 acres of surrounding land to Ramakrishna Math and Ramakrishna Mission on June 1, 2000.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              After it was handed over, Revered Swami Purushottamanandaji Maharaj was asked to take charge of this centre. Revered Swamiji initiated a structural study of the building to ascertain which parts of the building were original construction and which were later additions. It was then decided to remove all the additions and restore the building to how it was during Swami Vivekananda&apos;s stay in 1892. In December 2000, Revered Swamiji shifted to a rented house in Belagavi and the renovation of the building was started. The work took six months since it had to be reinforced by tie-rods to keep the walls from falling apart.
            </p>
          </div>
        </div>
      </section>

      {/* Ashrama Image */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "850px", margin: "0 auto", overflow: "hidden", boxShadow: "0 12px 50px rgba(26,47,47,0.12)", border: "1px solid #E8E2D8" }}>
            <Image src="/images/ashrama.jpg" alt="Ramakrishna Mission Ashrama at Fort" width={850} height={480} style={{ width: "100%", height: "auto", display: "block" }} sizes="850px" />
            <div style={{ padding: "14px 20px", background: "#F3EDE4", textAlign: "center" }}>
              <p style={{ fontSize: "13px", color: "#5A5650", fontWeight: 500, fontStyle: "italic" }}>The renovated Haripada Mitra House — now the Ashrama at Fort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Key Milestones — cinematic teal band */}
      <section style={{ padding: "80px 0", background: "#1A2F2F", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
        }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
              A Journey Through Time
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 600,
              color: "#fff",
            }}>
              Key Milestones
            </h2>
            <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "18px auto 0", borderRadius: "2px" }} />
          </div>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {[
              { year: "1892", text: "Swami Vivekananda stays at Haripada Mitra's house in the Fort area for 9 days" },
              { year: "1998", text: "Research initiated to identify the house where Swamiji stayed" },
              { year: "2000", text: "Karnataka Government hands over the building and 0.8 acres to the Mission" },
              { year: "2001", text: "Renovated building inaugurated by Chief Minister Sri S.M. Krishna" },
              { year: "2003", text: "Sadhu Nivas and dining hall (Sarada Mantapa) completed" },
              { year: "2004", text: "Universal Temple of Sri Ramakrishna consecrated" },
              { year: "2006", text: "Swami Vivekananda statue installed in the meditation hall" },
              { year: "2011", text: "Sabhangana — the grand hall seating 1000+ — inaugurated" },
            ].map((item, i) => (
              <div key={item.year} className="reveal" style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                marginBottom: i < 7 ? "32px" : "0",
                position: "relative",
              }}>
                {/* Year badge */}
                <div style={{
                  flexShrink: 0,
                  width: "70px",
                  textAlign: "right",
                }}>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#B8860B",
                  }}>{item.year}</span>
                </div>
                {/* Connector */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#B8860B", flexShrink: 0 }} />
                  {i < 7 && <div style={{ width: "1px", height: "38px", background: "rgba(184,134,11,0.3)", marginTop: "-2px" }} />}
                </div>
                {/* Text */}
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, paddingTop: "2px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sadhu Nivas */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Sadhu Nivas and Dining Hall" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              The renovation was completed in six months. The then Chief Minister Sri S.M. Krishna inaugurated it on 23rd May 2001. Since the land available for the Ashrama was only 0.8 acres, a request was made to the Chief Minister for granting an adjoining vacant piece of land. In due course this land was granted on a yearly lease in February 2002. Construction of a Universal Temple of Bhagavan Sri Ramakrishna and Sadhu Nivas was started shortly afterwards.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              The construction of the Sadhu Nivas and dining hall (Sarada Mantapa) complex was completed by April 2003, allowing the Sadhus and Brahmacharis to shift into the Ashrama premises from their rented accommodation in the city (where they had stayed for nearly two-and-half years).
            </p>
          </div>
        </div>
      </section>

      {/* Universal Temple — with image */}
      <section style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="temple" title="Universal Temple of Sri Ramakrishna" subtitle="&ldquo;As many faiths, so many paths.&rdquo; — Sri Ramakrishna" />
          </div>

          {/* Temple Image */}
          <div className="reveal" style={{ maxWidth: "850px", margin: "0 auto 40px", overflow: "hidden", boxShadow: "0 12px 50px rgba(26,47,47,0.12)", border: "1px solid #E8E2D8" }}>
            <Image src="/images/Cropped-SVM-_E7A9941-1.jpg" alt="Universal Temple of Sri Ramakrishna" width={850} height={520} style={{ width: "100%", height: "auto", display: "block" }} sizes="850px" />
            <div style={{ padding: "14px 20px", background: "#fff", textAlign: "center" }}>
              <p style={{ fontSize: "13px", color: "#5A5650", fontWeight: 500, fontStyle: "italic" }}>The Universal Temple of Bhagavan Sri Ramakrishna, consecrated January 2004</p>
            </div>
          </div>

          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              A grand Universal Temple of Bhagavan Sri Ramakrishna was consecrated on January 23, 2004 next to the Sadhu Nivas. This 5-day Temple Consecration Ceremony, a unique and one-time event for every Ashrama, was attended by over 300 Sadhus and Brahmacharis and thousands of devotees, making it a landmark event in the history of Belagavi.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              The Ashrama has a beautiful temple dedicated to Bhagavan Sri Ramakrishna Paramahamsa, the Avatara of the modern age. The goal of human life, according to Sri Ramakrishna, is the realization of the Ultimate Reality which alone can give man supreme fulfilment and everlasting peace. This is the essence of all religions.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "36px" }}>
              Sri Ramakrishna practiced not only the various disciplines of Hinduism but also other religions like Christianity and Islam, and proved to himself and the world that the same God or Truth can be found through all these various paths. He used to say, &ldquo;As many faiths, so many paths.&rdquo; This great universality of Sri Ramakrishna is the reason why the temple dedicated to him is called a Universal Temple.
            </p>

            {/* Temple Timings Card */}
            <div style={{
              background: "#fff",
              border: "1px solid #E8E2D8",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(26,47,47,0.08)",
            }}>
              <div style={{
                background: "#1A2F2F",
                padding: "18px 28px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8860B" }} />
                <h4 style={{ fontWeight: 600, color: "#fff", fontSize: "16px", letterSpacing: "0.5px" }}>
                  Temple Timings — Open 5:30 am to 12 noon &amp; 4 pm to 8:30 pm
                </h4>
              </div>
              <div style={{ padding: "24px 28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { time: "5:30 am", event: "Mangalarati" },
                    { time: "6:15 – 7:15 am", event: "Usha Kirtan" },
                    { time: "8:00 – 9:30 am", event: "Nitya Puja of Sri Ramakrishna" },
                    { time: "6:30 pm onwards", event: "Sandhyarati followed by Bhajans" },
                  ].map((item) => (
                    <div key={item.event} style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: "#B8860B", whiteSpace: "nowrap", minWidth: "100px" }}>{item.time}</span>
                      <span style={{ fontSize: "14px", color: "#4A4743" }}>{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginTop: "28px" }}>
              Five major celebrations are observed in the Temple each year &ndash; the programmes on the Jayantis (birthdays) of Sri Ramakrishna, Holy Mother Sri Sarada Devi and Swami Vivekananda and the events on Guru Purnima and Durgashtami days. Weekly talks on Sundays are held in the Temple.
            </p>
          </div>
        </div>
      </section>

      {/* Monument, Book Store, Exhibition, Sabhangana — as feature cards */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Within the Ashrama" subtitle="Key buildings and facilities that make up the Ashrama campus" />
          </div>

          {/* Monument */}
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
            <div style={{ borderLeft: "3px solid #B8860B", paddingLeft: "28px" }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "26px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "14px",
              }}>Swami Vivekananda Monument</h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "14px" }}>
                The house in the Fort area of Belagavi where Swami Vivekananda stayed as a guest of Sri Haripada Mitra was identified and handed over by the State Government of Karnataka in June 2000 to start a centre of the Ramakrishna Mission in the city.
              </p>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "14px" }}>
                Once the renovation was completed it was rechristened as the Swami Vivekananda Monument. This renovated building was inaugurated by the then Chief Minister, Sri S.M. Krishna on 23rd May 2001.
              </p>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "14px" }}>
                In January 2006, a beautiful statue of Swami Vivekananda was installed in the meditation hall by Revered Swami Suhitanandaji Maharaj, Assistant Secretary of the Ramakrishna Math &amp; Ramakrishna Mission, Belur Math. The life-like statue acts as a visible reminder to Swamiji&apos;s stay in this house.
              </p>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
                Visit this house and spend a few moments in quiet contemplation in the meditation hall while you are at the Ashrama.
              </p>
            </div>
          </div>

          {/* Book Store */}
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
            <div style={{ borderLeft: "3px solid #B8860B", paddingLeft: "28px" }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "26px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "14px",
              }}>Book Store</h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
                The power and influence of books needs no mention. The Ramakrishna Order is more than a century old and has produced some of the finest and outstanding spiritual stalwarts and gigantic intellects resulting in a huge repository of Ramakrishna-Vivekananda-Vedanta literature. These books and other articles are available at the Book Store in the Ashrama.
              </p>
            </div>
          </div>

          {/* Exhibition Hall */}
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
            <div style={{ borderLeft: "3px solid #B8860B", paddingLeft: "28px" }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "26px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "14px",
              }}>Arise! Awake! &mdash; An Exhibition</h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
                This is an exhibition on the ground floor next to the Bookstall. It comprises 40 colourful panels depicting the life and message of Swami Vivekananda for the visitor who wishes to know about Swamiji in brief.
              </p>
            </div>
          </div>

          {/* Sabhangana */}
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div style={{ borderLeft: "3px solid #B8860B", paddingLeft: "28px" }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "26px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "14px",
              }}>Sabhangana</h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
                A large Sabhangana capable of seating over 1000 people was inaugurated in February 2011. Numerous events and annual celebrations have been conducted here since then. The hall with dimensions of 120 ft by 90 ft can comfortably seat more than 1000 members of the audience. The stage measuring about 25ft by 45ft is part of a multi-storied building connected to the hall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing image band */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", maxHeight: "320px", overflow: "hidden" }}>
          <Image
            src="/images/dscn7408.jpg"
            alt="Ashrama campus"
            width={1400}
            height={500}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            sizes="100vw"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(26,47,47,0.85), rgba(26,47,47,0.5))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#fff",
              textAlign: "center",
              maxWidth: "700px",
              padding: "0 20px",
              lineHeight: 1.5,
            }}>
              &ldquo;The goal of human life is the realization of the Ultimate Reality which alone can give man supreme fulfilment and everlasting peace.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
