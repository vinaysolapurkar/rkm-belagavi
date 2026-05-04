import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Value Education – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function ValueEducationPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Value Education"
        subtitle="Developing character and strengthening the will through enduring human values, guided by the vision of Swami Vivekananda."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Value Education" },
        ]}
      />

      <section style={{ padding: "70px 0 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ position: "relative", width: "100%", overflow: "hidden", boxShadow: "0 8px 35px rgba(0,0,0,0.15)", borderRadius: "8px" }}>
            <Image
              src="/images/Scholarships-1.jpg"
              alt="Scholarship distribution ceremony for meritorious students"
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Value education is a cornerstone of the Ramakrishna Mission Ashrama&apos;s
              educational activities. Guided by the vision of Swami Vivekananda, who taught
              that education must develop character and strengthen the will, the Ashrama works
              to inculcate enduring human values in students, teachers, and the wider community
              of Belagavi and Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section style={{ padding: "50px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Merit-cum-Means Scholarships" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Since 2005, the Ramakrishna Mission Ashrama, Belagavi has been distributing
              merit-cum-means scholarships to meritorious but financially needy college
              students across Karnataka. The scholarship programme recognises students who
              have demonstrated academic excellence and are in genuine need of financial
              support to continue their higher education.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The scholarships are awarded annually through a transparent selection process
              that considers both academic merit and economic background. Over the years,
              hundreds of students from diverse disciplines — including science, commerce,
              arts, and professional courses — have benefited from this programme and gone
              on to achieve success in their chosen fields.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ashrama believes that financial constraints should never be a barrier to
              a deserving student&apos;s education. By supporting these students, the Ashrama
              not only helps individuals but also contributes to the overall development of
              society.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers' Conventions */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Teachers' Conventions" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ashrama organises teachers&apos; conventions to help educators reflect on
              their role as nation-builders. Teachers are seen not merely as conveyors of
              information but as guides and character-builders who shape the lives of the
              next generation. These conventions bring together teachers from schools and
              colleges in the region for a day of inspiration and collective dialogue.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The conventions feature talks by monks and scholars on Swami Vivekananda&apos;s
              educational philosophy, discussions on the challenges of modern education,
              and practical sessions on how value education can be integrated into the
              existing curriculum. Teachers leave with renewed enthusiasm and fresh
              perspectives to bring to their classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Value Education Programmes */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Value Education Programmes" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Value education programmes are conducted in schools and colleges across
              Belagavi district, reaching thousands of students each year. These interactive
              sessions cover themes such as truthfulness, respect, compassion, service,
              patriotism, and the importance of a disciplined lifestyle. Stories from the
              lives of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda are used to
              illustrate these values in an engaging and relatable way.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ashrama&apos;s monks and trained volunteers conduct these sessions, which
              are designed to be age-appropriate, participatory, and thought-provoking.
              The programmes aim to complement formal academic education by addressing
              the development of a student&apos;s inner life — their values, attitudes,
              and character.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              It is the firm conviction of the Ashrama that value education, when introduced
              at the school and college level, lays the foundation for a generation of
              responsible, compassionate, and productive citizens who will contribute
              meaningfully to society.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <Link href="/activities" className="btn-orange">
              &larr; &nbsp;Back to Activities
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
