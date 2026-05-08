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

      {/* Hero — Fort Ashrama */}
      <section style={{ position: "relative", padding: "60px 0 40px", background: "linear-gradient(180deg, #F3EDE4 0%, #F8F5EF 100%)" }}>
        {/* decorative top ornament */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "36px" }}>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #B8860B)" }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8860B" aria-hidden>
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#B8860B", margin: 0 }}>
            Established 2000 &middot; Survey No. 357, Fort
          </p>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8860B" aria-hidden>
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, #B8860B, transparent)" }} />
        </div>

        <div className="site-container">
          <div className="reveal" style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "12px",
            background: "linear-gradient(135deg, #B8860B 0%, #D4A547 50%, #B8860B 100%)",
            boxShadow: "0 30px 80px rgba(26,47,47,0.2), 0 8px 25px rgba(184,134,11,0.18)",
          }}>
            <div style={{ background: "#F8F5EF", padding: "8px", position: "relative" }}>
              <div style={{ position: "relative", overflow: "hidden", background: "#1A2F2F" }}>
                <Image
                  src="/images/fort-ashrama.jpg"
                  alt="Ramakrishna Mission Ashrama at Fort, Belagavi"
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                {/* corner ornaments */}
                {[
                  { top: 10, left: 10, rotate: 0 },
                  { top: 10, right: 10, rotate: 90 },
                  { bottom: 10, right: 10, rotate: 180 },
                  { bottom: 10, left: 10, rotate: 270 },
                ].map((c, i) => (
                  <svg key={i} width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden style={{ position: "absolute", top: c.top, bottom: c.bottom, left: c.left, right: c.right, transform: `rotate(${c.rotate}deg)`, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                    <path d="M2 2 L18 2 M2 2 L2 18" stroke="#D4A547" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="2" cy="2" r="3" fill="#B8860B" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Fort Ashrama */}
      <section style={{ padding: "70px 0 80px", background: "#F8F5EF", position: "relative" }}>
        {/* faint watermark */}
        <div aria-hidden style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 10% 0%, rgba(184,134,11,0.05), transparent 40%), radial-gradient(circle at 90% 100%, rgba(26,47,47,0.04), transparent 40%)",
          pointerEvents: "none",
        }} />
        <div className="site-container" style={{ position: "relative" }}>
          <div className="reveal">
            <SectionHeading id="about" title="About the Fort Ashrama" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "22px" }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                float: "left",
                fontSize: "62px",
                lineHeight: 0.85,
                fontWeight: 600,
                color: "#B8860B",
                paddingRight: "12px",
                paddingTop: "6px",
                marginRight: "2px",
              }}>S</span>ometime in 1998, Revered Swami Smarananandaji Maharaj, the then General Secretary, Ramakrishna Math and Ramakrishna Mission initiated a research into Swami Vivekananda&apos;s stay in Belagavi. It was well known that Swamiji had stayed in Sri Haripada Mitra&apos;s house in Belagavi and that Haripada Mitra was a sub-divisional forest officer in 1892 and also that Swamiji had written letters to Haripada Mitra to his Belagavi address from America. But it was not known which particular house in Belagavi it was or even where in Belagavi that house was located!
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
            <Image src="/images/haripada-mitra-house.jpg" alt="The renovated Haripada Mitra House — now the Ashrama at Fort" width={850} height={480} style={{ width: "100%", height: "auto", display: "block" }} sizes="850px" />
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

      {/* Monument, Book Store, Exhibition, Sabhangana — elegant numbered cards */}
      <section style={{ padding: "90px 0", background: "linear-gradient(180deg, #F8F5EF 0%, #F3EDE4 100%)" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Within the Ashrama" subtitle="Key buildings and facilities that make up the Ashrama campus" />
          </div>

          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              {
                num: "I",
                title: "Swami Vivekananda Monument",
                paragraphs: [
                  "The house in the Fort area of Belagavi where Swami Vivekananda stayed as a guest of Sri Haripada Mitra was identified and handed over by the State Government of Karnataka in June 2000 to start a centre of the Ramakrishna Mission in the city.",
                  "Once the renovation was completed it was rechristened as the Swami Vivekananda Monument. This renovated building was inaugurated by the then Chief Minister, Sri S.M. Krishna on 23rd May 2001.",
                  "In January 2006, a beautiful statue of Swami Vivekananda was installed in the meditation hall by Revered Swami Suhitanandaji Maharaj, Assistant Secretary of the Ramakrishna Math & Ramakrishna Mission, Belur Math. The life-like statue acts as a visible reminder to Swamiji’s stay in this house.",
                  "Visit this house and spend a few moments in quiet contemplation in the meditation hall while you are at the Ashrama.",
                ],
              },
              {
                num: "II",
                title: "Book Store",
                paragraphs: [
                  "The power and influence of books needs no mention. The Ramakrishna Order is more than a century old and has produced some of the finest and outstanding spiritual stalwarts and gigantic intellects resulting in a huge repository of Ramakrishna-Vivekananda-Vedanta literature. These books and other articles are available at the Book Store in the Ashrama.",
                ],
              },
              {
                num: "III",
                title: "Arise! Awake! — An Exhibition",
                paragraphs: [
                  "This is an exhibition on the ground floor next to the Bookstall. It comprises 40 colourful panels depicting the life and message of Swami Vivekananda for the visitor who wishes to know about Swamiji in brief.",
                ],
              },
              {
                num: "IV",
                title: "Sabhangana",
                paragraphs: [
                  "A large Sabhangana capable of seating over 1000 people was inaugurated in February 2011. Numerous events and annual celebrations have been conducted here since then. The hall with dimensions of 120 ft by 90 ft can comfortably seat more than 1000 members of the audience. The stage measuring about 25ft by 45ft is part of a multi-storied building connected to the hall.",
                ],
              },
            ].map((feat) => (
              <article key={feat.title} className="reveal" style={{
                position: "relative",
                background: "#fff",
                border: "1px solid #E8E2D8",
                borderTop: "3px solid #B8860B",
                padding: "36px 40px 32px",
                boxShadow: "0 6px 25px rgba(26,47,47,0.06)",
              }}>
                {/* corner ornaments */}
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden style={{ position: "absolute", top: "10px", left: "10px" }}>
                  <path d="M2 2 L16 2 M2 2 L2 16" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden style={{ position: "absolute", top: "10px", right: "10px", transform: "rotate(90deg)" }}>
                  <path d="M2 2 L16 2 M2 2 L2 16" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>

                <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px dashed rgba(184,134,11,0.3)" }}>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "32px",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "#B8860B",
                    flexShrink: 0,
                    minWidth: "44px",
                  }}>
                    {feat.num}.
                  </span>
                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "26px",
                    fontWeight: 600,
                    color: "#1A2F2F",
                    lineHeight: 1.25,
                    margin: 0,
                  }}>
                    {feat.title}
                  </h3>
                </div>
                <div>
                  {feat.paragraphs.map((p, idx) => (
                    <p key={idx} style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: idx < feat.paragraphs.length - 1 ? "14px" : 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing image band */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", maxHeight: "360px", overflow: "hidden" }}>
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
            background: "linear-gradient(135deg, rgba(26,47,47,0.92) 0%, rgba(26,47,47,0.6) 60%, rgba(26,47,47,0.85) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ textAlign: "center", maxWidth: "780px", padding: "0 24px" }}>
              {/* ornament */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,165,71,0.7))" }} />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4A547" aria-hidden>
                  <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
                </svg>
                <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, rgba(212,165,71,0.7), transparent)" }} />
              </div>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(20px, 3vw, 30px)",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.55,
                marginBottom: "16px",
              }}>
                &ldquo;The goal of human life is the realization of the Ultimate Reality which alone can give man supreme fulfilment and everlasting peace.&rdquo;
              </p>
              <p style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#D4A547",
                margin: 0,
              }}>
                Sri Ramakrishna Paramahamsa
              </p>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
