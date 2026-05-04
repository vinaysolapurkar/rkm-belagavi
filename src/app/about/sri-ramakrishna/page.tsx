import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Sri Ramakrishna – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function SriRamakrishnaPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Sri Ramakrishna"
        subtitle="The great 19th-century mystic whose spiritual realizations form the bedrock of the Ramakrishna Movement."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Sri Ramakrishna" },
        ]}
      />

      {/* Portrait + Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="grid-portrait" style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "50px", alignItems: "start" }}>
            <div className="reveal-left">
              <div style={{ boxShadow: "0 8px 35px rgba(0,0,0,0.15)", overflow: "hidden", width: "250px" }}>
                <Image
                  src="/images/Ramakrishna.jpg"
                  alt="Sri Ramakrishna Paramahamsa"
                  width={250}
                  height={320}
                  style={{ width: "250px", height: "auto" }}
                  sizes="250px"
                />
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", color: "#2C2C2C", marginTop: "12px", fontWeight: 600 }}>
                Sri Ramakrishna (1836–1886)
              </p>
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
                Sri Ramakrishna Paramahamsa was born on 18 February 1836 in the
                rural village of Kamarpukur, outside Calcutta (now Kolkata), in
                Bengal, India. His life (1836–1886) was a living testament to
                truth, universality, love, and purity — qualities that shone
                through every aspect of his extraordinary existence.
              </p>
              <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
                As a young man he became a priest at the Dakshineswar Kali Temple
                on the banks of the Ganges. There he was seized by an
                unquenchable thirst for union with God. His intense longing led
                him through a series of profound spiritual disciplines and direct
                mystical experiences that transformed him into one of the greatest
                spiritual figures of the modern age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life and Teachings */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="life" title="Life and Teachings" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Sri Ramakrishna practiced various spiritual disciplines, treading
              different paths within Hinduism — Vaishnavism, Tantra, and Advaita
              Vedanta. Remarkably, he also practiced Islam and Christianity, and
              in each case attained direct experience of God through that path.
              On the basis of these personal realizations he declared with
              absolute conviction that all religions lead to the same ultimate
              goal — the realization of God.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              His teachings were simple and concrete, often illustrated with
              parables drawn from everyday life. He spoke in Bengali to fishermen
              and scholars alike, and his words carried the stamp of direct
              experience rather than book learning. He had no formal education
              and yet the greatest scholars of his time marvelled at the depth
              of his wisdom.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Sri Ramakrishna attracted disciples from all walks of life. His
              chief disciple was Narendranath Datta, who later became Swami
              Vivekananda and carried Sri Ramakrishna&apos;s message to the West.
              Sri Ramakrishna passed away on 16 August 1886, but his influence
              continues to permeate spiritual life across the world through the
              Ramakrishna Movement.
            </p>
          </div>
        </div>
      </section>

      {/* Sayings */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="sayings" title="Sayings of Sri Ramakrishna" />
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              "He is born in vain who, having attained the human birth, so difficult to get, does not attempt to realize God in this very life.",
              "You see many stars in the sky at night, but not when the sun rises. Can you therefore say that there are no stars in the heavens during the day? O man, because you cannot find God in the days of your ignorance, say not that there is no God.",
              "Be not a traitor in your thoughts. Be sincere; act according to your thoughts; and you shall surely succeed. Pray with a sincere and simple heart, and your prayers will be heard.",
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

      {/* Recommended Reading */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="reading" title="Recommended Reading" />
          </div>
          <div className="reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "20px" }}>
              The following books are recommended for those who wish to learn more
              about the life and teachings of Sri Ramakrishna:
            </p>
            <ul className="ul-list" style={{ marginLeft: "20px" }}>
              <li>
                <span style={{ fontWeight: 600, color: "#2D2A26" }}>The Gospel of Sri Ramakrishna</span>{" "}
                — M. (Mahendranath Gupta); translated by Swami Nikhilananda.
                Published by Ramakrishna-Vivekananda Center, New York.
              </li>
              <li>
                <span style={{ fontWeight: 600, color: "#2D2A26" }}>Sri Ramakrishna the Great Master</span>{" "}
                — Swami Saradananda. Published by Sri Ramakrishna Math, Chennai.
              </li>
              <li>
                <span style={{ fontWeight: 600, color: "#2D2A26" }}>Ramakrishna and His Disciples</span>{" "}
                — Christopher Isherwood. Published by Vedanta Press.
              </li>
              <li>
                <span style={{ fontWeight: 600, color: "#2D2A26" }}>Sri Ramakrishna: A Biography</span>{" "}
                — Swami Nikhilananda. Published by Ramakrishna-Vivekananda Center, New York.
              </li>
              <li>
                <span style={{ fontWeight: 600, color: "#2D2A26" }}>Sayings of Sri Ramakrishna</span>{" "}
                — Published by Sri Ramakrishna Math, Chennai.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
