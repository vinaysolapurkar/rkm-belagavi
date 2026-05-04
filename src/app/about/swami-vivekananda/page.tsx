import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Swami Vivekananda – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function SwamiVivekanandaPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Swami Vivekananda"
        subtitle="Chief disciple of Sri Ramakrishna who carried the message of Vedanta to the world and founded the Ramakrishna Mission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Swami Vivekananda" },
        ]}
      />

      {/* Portrait + Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="grid-portrait" style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "50px", alignItems: "start" }}>
            <div className="reveal-left">
              <div style={{ boxShadow: "0 8px 35px rgba(0,0,0,0.15)", overflow: "hidden", width: "250px" }}>
                <Image src="/images/swami-vivekananda-portrait.jpg" alt="Swami Vivekananda" width={250} height={320} style={{ width: "250px", height: "auto" }} />
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", color: "#2C2C2C", marginTop: "12px", fontWeight: 600 }}>Swami Vivekananda (1863–1902)</p>
            </div>
            <div className="reveal-right">
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Swami Vivekananda (1863–1902), born Narendranath Datta on 12
              January 1863 in Calcutta, was the chief disciple of Sri Ramakrishna
              Paramahamsa and one of the most influential spiritual figures of the
              modern age. Possessed of a brilliant intellect, a deep spiritual
              nature, and immense physical vitality, Narendranath was drawn to
              Sri Ramakrishna and was profoundly transformed by his contact with
              the Master.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              After Sri Ramakrishna&apos;s passing in 1886, Swamiji took the vow
              of monasticism and spent years wandering across India as a
              parivrajaka — a wandering monk — coming into direct contact with
              the poverty, suffering, and spiritual potential of the Indian
              masses. This experience kindled in him a burning desire to serve
              the poor as living manifestations of God.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="chicago" title="Parliament of Religions, Chicago, 1893" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              In 1893, Swami Vivekananda represented Hinduism at the Parliament
              of the World&apos;s Religions in Chicago. His famous opening words —
              &ldquo;Sisters and Brothers of America&rdquo; — electrified the
              audience and earned him a standing ovation. His addresses at the
              Parliament brought the universal message of Vedanta to the Western
              world for the first time and established him as a towering
              representative of Indian spirituality and culture.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "30px" }}>
              Over the next three years Swamiji toured America and England,
              delivering lectures and establishing Vedanta Societies. He returned
              to India in 1897 to a hero&apos;s welcome, and his reception across
              the country was unprecedented. His lectures during this tour
              electrified Indians with a new sense of pride in their spiritual
              heritage and a call to serve the nation.
            </p>
            <blockquote style={{
              background: "#fff",
              borderLeft: "4px solid #C4922A",
              padding: "24px 30px",
              margin: "0 0 16px 0",
            }}>
              <p style={{ fontSize: "16px", color: "#2D2A26", lineHeight: 1.85, textAlign: "justify", fontStyle: "italic" }}>
                &ldquo;Sisters and Brothers of America — it fills my heart with joy
                unspeakable to rise in response to the warm and cordial welcome
                which you have given us. I thank you in the name of the most
                ancient order of monks in the world; I thank you in the name of
                the mother of religions; and I thank you in the name of millions
                and millions of Hindu people of all classes and sects.&rdquo;
              </p>
              <p style={{ textAlign: "right", fontSize: "14px", color: "#2C2C2C", fontWeight: 600, marginTop: "12px" }}>
                — Parliament of the World&apos;s Religions, Chicago, 11 September 1893
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founding the Mission */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="mission" title="Founding the Ramakrishna Mission" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              On his return to India, Swami Vivekananda founded the Ramakrishna
              Mission on 1 May 1897, with the twin ideals of the realization of
              God and the service of man. The Mission was to embody his vision of
              Practical Vedanta — applying the highest spiritual truths to the
              practical work of alleviating human suffering and uplifting society.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              In 1898 he established the Belur Math on the western bank of the
              Ganges near Calcutta, which became the headquarters of the
              Ramakrishna Math and Mission. Despite a rapidly failing body, he
              poured himself into the work of organizing the Order, training
              disciples, writing, and lecturing.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Swami Vivekananda passed away on 4 July 1902 at the age of
              thirty-nine. His brief but blazing life of service, scholarship,
              and spiritual fire transformed the spiritual landscape of India
              and the world. His message of the divinity of the soul, the
              harmony of religions, and the service of man as the worship of
              God continues to inspire millions.
            </p>
          </div>
        </div>
      </section>

      {/* Belagavi connection */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal" style={{
            background: "#fff",
            borderLeft: "4px solid #C4922A",
            padding: "35px 40px",
            boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#2D2A26", marginBottom: "12px" }}>
              Swamiji&apos;s Visit to Belagavi
            </h3>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "20px" }}>
              During his parivrajaka days, Swami Vivekananda visited Belagavi
              from 16 to 27 October 1892 and stayed as a guest of two families
              in the city. Learn more about this remarkable visit and the
              impressions Swamiji left on those who were fortunate enough to
              meet him.
            </p>
            <Link href="/about/swamiji-in-belagavi" className="btn-orange">
              Read About Swamiji in Belagavi &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
