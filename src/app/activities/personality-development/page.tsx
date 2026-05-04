import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Personality Development – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function PersonalityDevelopmentPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Personality Development"
        subtitle="All-round development of youth — physical, intellectual, moral, and spiritual — inspired by the ideals of Swami Vivekananda."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Personality Development" },
        ]}
      />

      <section style={{ padding: "70px 0 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ position: "relative", width: "100%", overflow: "hidden", boxShadow: "0 8px 35px rgba(0,0,0,0.15)", borderRadius: "8px" }}>
            <Image
              src="/images/youth-day-2026.jpg"
              alt="Youth convention and personality development programme at the Ashrama"
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
              One of the primary aims of the Ramakrishna Mission Ashrama, Belagavi is the
              all-round development of youth — physical, intellectual, moral, and spiritual.
              Inspired by the ideals of Swami Vivekananda, who declared &ldquo;Education is the
              manifestation of the perfection already in man,&rdquo; the Ashrama conducts a range
              of personality development programmes for the younger generation.
            </p>
          </div>
        </div>
      </section>

      {/* Camps */}
      <section style={{ padding: "50px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Personality Development Camps" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ashrama regularly organises residential and non-residential personality
              development camps for the youth. These camps aim to build character, instil
              discipline, and awaken the latent potential within each participant. Sessions
              typically include lectures on the life and teachings of Swami Vivekananda,
              meditation and yoga practices, group discussions, and cultural activities.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Young men and women are encouraged to study Swami Vivekananda&apos;s inspiring
              works and to imbibe values such as fearlessness, self-reliance, service to
              others, and love for the motherland. The camps serve as a transformative
              experience, helping youth discover their inner strength and purpose in life.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Participants in these camps benefit from guided sessions on concentration and
              memory development, public speaking, leadership skills, and the practical
              application of Vedantic principles in daily life. The Ashrama believes that
              when a young person is grounded in strong values and a clear sense of purpose,
              they become a positive force for their family, community, and nation.
            </p>
          </div>
        </div>
      </section>

      {/* Youth Conventions */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Youth Conventions" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Youth conventions are organised by the Ashrama to bring together young people
              from across the region for a day of inspiration, reflection, and fellowship.
              These conventions serve as a platform for youth to learn about the life and
              teachings of Swami Vivekananda and to discuss how his ideals can be applied
              to the challenges of contemporary life.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Guest speakers — including monks of the Ramakrishna Order, educators, and
              social workers — share their experiences and insights. Cultural programmes,
              quiz competitions on the lives of Sri Ramakrishna and Swami Vivekananda, and
              elocution contests form part of the convention activities. The conventions
              are held on or around Swami Vivekananda&apos;s birth anniversary (January 12),
              observed as National Youth Day.
            </p>
          </div>
        </div>
      </section>

      {/* Vivekananda Yuvaka Sangha */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Vivekananda Yuvaka Sangha" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Vivekananda Yuvaka Sangha is a youth organisation affiliated with the
              Ramakrishna Mission Ashrama, Belagavi. It provides a structured platform for
              young men and women to engage with the Ashrama&apos;s activities throughout
              the year. Members of the Sangha participate in service activities, study
              circles, devotional singing (bhajans), and community outreach programmes.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Sangha regularly conducts study classes on the Gospel of Sri Ramakrishna,
              the Complete Works of Swami Vivekananda, and other devotional literature.
              Members are encouraged to practise regular meditation, maintain a disciplined
              lifestyle, and engage in selfless service — the hallmarks of a life inspired
              by the Ramakrishna tradition.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Through these activities, the Vivekananda Yuvaka Sangha aims to nurture a
              generation of youth who are rooted in Indian values, open-minded, and
              committed to the service of God in man. The Ashrama warmly welcomes any
              young person inspired by the ideals of Sri Ramakrishna and Swami Vivekananda
              to join the Sangha and participate in its activities.
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
