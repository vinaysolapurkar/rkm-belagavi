import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Swami Vivekananda Memorial – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function MemorialPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Swami Vivekananda Memorial"
        subtitle="A living memorial preserving the historic house where Swamiji stayed during his visit to Belagavi in October 1892."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Swami Vivekananda Memorial" },
        ]}
      />

      {/* Cinematic Hero Image */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", maxHeight: "560px", overflow: "hidden" }}>
          <Image
            src="/images/Cropped-SVM-_E7A9941.jpg"
            alt="Swami Vivekananda Memorial, Belagavi"
            width={1400}
            height={800}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
            sizes="100vw"
          />
          {/* Bottom gradient fade into page */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #F8F5EF, transparent)",
          }} />
        </div>
      </section>

      {/* Introductory Pull Quote */}
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
              The room where Swamiji stayed has been carefully maintained as a shrine &mdash; preserving tangible links to that memorable visit in October 1892.
            </p>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "28px auto 0", opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* History */}
      <section style={{ padding: "60px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="history" title="History – Bhate House" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              During his parivrajaka days, Swami Vivekananda visited Belagavi from
              16 to 27 October 1892. His first 3 days at Belagavi (16 to 18) were
              spent as a guest of a lawyer of the city, Shri Sadashiv
              Balakrishnapant Bhate (Bhausaheb). Reminiscences of Swamiji&apos;s
              stay at the Bhate house were recorded by Prof. Ganesh S. Bhate, son
              of Sadashiv Bhate.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              This house was sold in the early 20th century and subsequently passed
              through multiple owners. In 1987, one third of the property was
              gifted to devotees in Karwar. In 2006 the house was transferred to
              the Ramakrishna Mission, ensuring its preservation as a historic site
              associated with Swamiji&apos;s visit.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              The room where Swamiji stayed has been carefully maintained as a
              shrine, preserving the original cot, mirror, and walking stick
              associated with his stay — tangible links to that memorable visit in
              October 1892.
            </p>
          </div>
        </div>
      </section>

      {/* Restoration — full-bleed teal band */}
      <section style={{ padding: "80px 0", background: "#1A2F2F", position: "relative", overflow: "hidden" }}>
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
              Preserving Heritage
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "14px",
            }}>
              Restoration
            </h2>
            <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "0 auto", borderRadius: "2px" }} />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              As the house was partitioned among descendants over the decades,
              numerous partition walls were added, obscuring the original
              structure. A fire in 2013 severely damaged the top floor, further
              imperilling the historic building.
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Restoration was initiated after the Ramakrishna Mission took
              possession in October 2014. The approach was guided by a deep
              respect for the original fabric of the building: original material
              was retained wherever possible, and indigenous methods and
              traditional craftsmanship were used throughout the process.
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify" }}>
              The restored building was dedicated as the Swami Vivekananda
              Memorial in <strong style={{ color: "#D4C078" }}>February 2019</strong>, marking a milestone in the preservation
              of Belagavi&apos;s living connection to Swami Vivekananda.
            </p>
          </div>

          {/* Before / After photos */}
          <div className="reveal" style={{ maxWidth: "1000px", margin: "50px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4C078", marginBottom: "12px" }}>
                Before Restoration
              </p>
              <div style={{ overflow: "hidden", border: "2px solid rgba(184,134,11,0.4)", boxShadow: "0 12px 35px rgba(0,0,0,0.4)" }}>
                <Image src="/images/before-restoration.jpg" alt="Haripada Mitra's house before restoration" width={500} height={350} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4C078", marginBottom: "12px" }}>
                After Restoration
              </p>
              <div style={{ overflow: "hidden", border: "2px solid rgba(184,134,11,0.4)", boxShadow: "0 12px 35px rgba(0,0,0,0.4)" }}>
                <Image src="/images/after-restoration.jpg" alt="The Swami Vivekananda Memorial after restoration" width={500} height={350} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Museum */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="museum" title="The Museum" subtitle="An immersive journey through Swamiji's life, personality, and teachings" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              The Memorial houses an exhibition-museum centred on the room where
              Swamiji stayed, which has been preserved as a shrine. Separate
              galleries cover key themes from Swamiji&apos;s life, personality, and
              teachings, providing visitors with a comprehensive and immersive
              understanding of one of India&apos;s greatest spiritual luminaries.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              A digital gallery and an audio-visual room — seating 30 to 40
              people — make the experience engaging for visitors of all ages.
              Special emphasis is placed on the holistic development of youth, in
              keeping with Swamiji&apos;s vision of a man-making education.
            </p>
          </div>

          {/* Swamiji's Room — featured */}
          <div className="reveal" style={{ maxWidth: "1000px", margin: "50px auto 30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "center" }}>
            <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 12px 40px rgba(26,47,47,0.12)" }}>
              <Image src="/images/swamiji-room.jpg" alt="Swamiji's Room — preserved as a shrine" width={500} height={380} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
                The Heart of the Memorial
              </p>
              <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "28px", fontWeight: 600, color: "#1A2F2F", marginBottom: "14px", lineHeight: 1.25 }}>
                Swamiji&rsquo;s Room
              </h3>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.85 }}>
                The original room where Swami Vivekananda stayed as the guest of Sri Haripada
                Mitra in October 1892, preserved as a shrine for devotees and visitors.
              </p>
            </div>
          </div>

          {/* Galleries — two photos side by side */}
          <div className="reveal" style={{ maxWidth: "1000px", margin: "60px auto 30px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px", textAlign: "center" }}>
              Exhibits
            </p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "28px", fontWeight: 600, color: "#1A2F2F", marginBottom: "12px", textAlign: "center" }}>
              Galleries
            </h3>
            <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.85, textAlign: "center", maxWidth: "700px", margin: "0 auto 28px" }}>
              Exhibits on Swamiji&rsquo;s life and message.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 30px rgba(26,47,47,0.1)" }}>
                <Image src="/images/memorial-gallery-1.jpg" alt="Galleries — exhibits on Swamiji's life" width={500} height={350} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
              </div>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 30px rgba(26,47,47,0.1)" }}>
                <Image src="/images/memorial-gallery-2.jpg" alt="Galleries — exhibits on Swamiji's message" width={500} height={350} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
              </div>
            </div>
          </div>

          {/* AV Theatre */}
          <div className="reveal" style={{ maxWidth: "1000px", margin: "60px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
                Audio-Visual Room
              </p>
              <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "28px", fontWeight: 600, color: "#1A2F2F", marginBottom: "14px", lineHeight: 1.25 }}>
                AV Theatre
              </h3>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.85 }}>
                Seating 30 to 40 visitors, the AV Theatre presents curated audio-visual
                content on Swamiji&rsquo;s life and message &mdash; making the experience
                engaging for visitors of all ages.
              </p>
            </div>
            <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 12px 40px rgba(26,47,47,0.12)" }}>
              <Image src="/images/memorial-av-room.jpg" alt="The AV Theatre at the Swami Vivekananda Memorial" width={500} height={380} style={{ width: "100%", height: "auto", display: "block" }} sizes="500px" />
            </div>
          </div>
        </div>
      </section>

      {/* Book Store */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="bookstore" title="Book Store" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              The Memorial has a well-equipped book store stocking a wide range of
              publications on Ramakrishna-Vivekananda-Vedanta literature. Books
              published by Advaita Ashrama, Ramakrishna Math, and other leading
              publishers in the Ramakrishna tradition are available for purchase,
              offering visitors an opportunity to deepen their study of
              Swamiji&apos;s life and teachings.
            </p>
          </div>
        </div>
      </section>

      {/* Visiting the Memorial */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="visits" title="Visiting the Memorial" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "36px" }}>
              The Swami Vivekananda Memorial is open to all visitors free of
              charge. We welcome individuals, families, school and college groups,
              and all who wish to draw inspiration from Swamiji&apos;s life.
            </p>

            {/* Elegant info card */}
            <div style={{
              background: "#fff",
              border: "1px solid #E8E2D8",
              padding: "0",
              boxShadow: "0 8px 40px rgba(26,47,47,0.08)",
              overflow: "hidden",
            }}>
              {/* Card header */}
              <div style={{
                background: "#1A2F2F",
                padding: "20px 32px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8860B" }} />
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#fff", letterSpacing: "0.5px" }}>
                  Timings &amp; Contact
                </h3>
              </div>
              {/* Card body */}
              <div style={{ padding: "28px 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px", fontSize: "15px", color: "#4A4743", marginBottom: "24px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "4px" }}>Open</p>
                    <p>Tuesday to Sunday</p>
                    <p>10:30 am to 6:00 pm</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "4px" }}>Closed</p>
                    <p>Monday</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "4px" }}>Entry Fee</p>
                    <p>Free for all</p>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #E8E2D8", paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>Address</p>
                  <p style={{ fontWeight: 600, color: "#1A2F2F", fontSize: "15px" }}>Swami Vivekananda Memorial</p>
                  <p style={{ color: "#4A4743", fontSize: "15px" }}>Risaldar Galli, Swami Vivekananda Marg, Belagavi &ndash; 590001</p>
                  <p style={{ color: "#4A4743", fontSize: "15px", marginTop: "10px" }}>
                    Phone:{" "}
                    <a href="tel:9019843857" style={{ color: "#1A2F2F", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #B8860B" }}>
                      90198 43857
                    </a>
                    {" / "}
                    <a href="tel:08313580015" style={{ color: "#1A2F2F", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #B8860B" }}>
                      0831-3580015
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
