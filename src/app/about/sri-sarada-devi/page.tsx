import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Sri Sarada Devi – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function SriSaraDeviPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Sri Sarada Devi"
        subtitle="The Holy Mother of the Ramakrishna Order — the very embodiment of motherly love, infinite patience, and compassion."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Sri Sarada Devi" },
        ]}
      />

      {/* Portrait + Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="grid-portrait" style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "50px", alignItems: "start" }}>
            <div className="reveal-left">
              <div style={{ boxShadow: "0 8px 35px rgba(0,0,0,0.15)", overflow: "hidden", width: "250px" }}>
                <Image src="/images/sri-sarada-devi.jpg" alt="Sri Sarada Devi — The Holy Mother" width={250} height={320} style={{ width: "250px", height: "auto" }} />
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", color: "#2C2C2C", marginTop: "12px", fontWeight: 600 }}>Sri Sarada Devi (1853–1920)</p>
            </div>
            <div className="reveal-right">
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Sri Sarada Devi (1853–1920), revered as the Holy Mother, was the
              spiritual consort of Sri Ramakrishna Paramahamsa. Born on 22
              December 1853 in the village of Sihar in the Bankura district of
              Bengal, she came to represent the Divine Mother in human form —
              the very embodiment of motherly love, infinite patience, and
              compassion.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              From a young age Sarada Devi exhibited extraordinary spiritual
              qualities. She was married to Sri Ramakrishna at the age of five,
              in accordance with the customs of the time. Though they lived
              apart for most of their lives, she was deeply connected to her
              husband in the spiritual realm. Sri Ramakrishna recognized her
              as an embodiment of the Divine and accorded her the highest
              respect.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              After Sri Ramakrishna&apos;s passing in 1886, the Holy Mother
              became the living centre of the spiritual movement he had
              inspired. Devotees and disciples from all over India flocked to
              her for guidance and initiation. She gave herself tirelessly and
              unconditionally to all who came to her, regardless of caste,
              creed, or background. Her famous saying, &ldquo;If you want peace,
              do not find fault with others. Rather, see your own faults,&rdquo;
              captures the essence of her practical wisdom.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Sri Sarada Devi was a beacon of strength and inspiration to the
              early Ramakrishna Order. When asked how she regarded all those
              who came to her, she replied, &ldquo;I am the mother of the
              virtuous, and I am also the mother of the wicked. Whenever you
              are in distress, just say to yourself, &lsquo;I have a mother.&rsquo;&rdquo;
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source of Strength */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="significance" title="Source of Strength and Inspiration" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Holy Mother remained a source of strength and inspiration to
              all throughout her life. Her very presence radiated a peace and
              spiritual power that transformed those around her. She lived a
              life of utter simplicity, spending her days in prayer, cooking,
              receiving devotees, and attending to the needs of those who came
              to her — all the while maintaining an unwavering inner serenity.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              She guided the monastic disciples of Sri Ramakrishna with a
              mother&apos;s loving care and instilled in them the confidence to
              carry on the great work Swami Vivekananda had initiated. She
              passed away on 21 July 1920, leaving behind a legacy of love and
              selflessness that continues to inspire millions across the world.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ramakrishna Math and Mission regard Sri Sarada Devi as the
              universal mother of all. Her birthday, Sarada Puja, is observed
              with great reverence at all centres of the Ramakrishna Order,
              including the Belagavi Ashrama.
            </p>
          </div>
        </div>
      </section>

      {/* Sayings */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="sayings" title="Sayings of the Holy Mother" />
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              "If you want peace, do not find fault with others. Rather, see your own faults. Learn to make the world your own. No one is a stranger, my child; the whole world is your own.",
              "I am the mother of the virtuous and the wicked alike. Whenever you are in distress, just say to yourself, \u2018I have a mother.\u2019",
              "One must be patient like the earth. What iniquities are being perpetrated on her, yet she quietly endures them all.",
            ].map((quote, i) => (
              <blockquote
                key={i}
                className="reveal"
                style={{
                  background: "#F3EDE4",
                  borderLeft: "4px solid #C4922A",
                  padding: "24px 30px",
                  margin: 0,
                }}
              >
                <p style={{ fontSize: "16px", color: "#2D2A26", lineHeight: 1.85, textAlign: "justify", fontStyle: "italic" }}>
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
