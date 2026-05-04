import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Welfare Activities – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function WelfareActivitiesPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Welfare Activities"
        subtitle="Serving man as God — the Ashrama's deep commitment to the welfare of the underprivileged community."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Welfare Activities" },
        ]}
      />

      {/* Hero Image */}
      <section style={{ padding: "70px 0 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden", boxShadow: "0 8px 35px rgba(0,0,0,0.15)" }}>
            <Image
              src="/images/winter-relief.jpg"
              alt="Welfare Activities – Winter Relief Distribution"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "70px 0 50px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Ramakrishna Mission Ashrama, Belagavi has always been deeply committed to
              the welfare of the community it serves. Inspired by Swami Vivekananda&apos;s
              teaching that service to man is service to God, the Ashrama undertakes a wide
              range of welfare activities for the benefit of the underprivileged sections
              of society.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section style={{ padding: "50px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Distribution of Food, Clothing, and Essential Supplies" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              One of the most direct forms of service undertaken by the Ashrama is the
              distribution of food, clothing, and essential household supplies to the
              underprivileged. These distributions are organised on special occasions
              such as the birth anniversaries of Sri Ramakrishna, Sri Sarada Devi, and
              Swami Vivekananda, as well as during festivals and in response to specific
              community needs.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Nutritious food packets and cooked meals are distributed to the needy,
              including the elderly, the homeless, and residents of economically
              disadvantaged neighbourhoods. Clothing is provided to those who require
              it, with special attention paid to the needs of children and the elderly.
              Essential household items — including blankets during the winter months —
              are also distributed to ensure basic comfort and dignity for all recipients.
            </p>
          </div>
        </div>
      </section>

      {/* Service to the Underprivileged */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Service to the Underprivileged" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ashrama&apos;s welfare activities extend beyond material support. The
              organisation works to address the root causes of poverty and disadvantage
              through education, skills training, and community empowerment. By providing
              scholarships to meritorious students from poor families, the Ashrama helps
              open doors to higher education that would otherwise remain closed.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ashrama collaborates with local NGOs, government bodies, and concerned
              citizens to identify and assist the most vulnerable members of the community.
              Special attention is given to the needs of widows, orphans, the elderly,
              and persons with disabilities. The welfare programmes are implemented with
              sensitivity and respect for the dignity of all recipients.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              In all its welfare activities, the Ashrama is guided by the principle that
              true service is offered not as charity but as worship — recognising the
              Divine presence in every human being. This attitude transforms the act of
              giving into a spiritual practice and invests it with deeper meaning for
              both the giver and the receiver.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Commitment */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="An Ongoing Commitment" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The welfare activities of the Ramakrishna Mission Ashrama, Belagavi are not
              occasional or one-off events but form part of a sustained, year-round
              commitment to community service. The Ashrama continuously seeks to identify
              new needs and find effective ways to address them.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The generous support of donors, volunteers, and well-wishers of the Ashrama
              makes these welfare activities possible. The Ashrama gratefully acknowledges
              all contributions — whether of time, money, or material — and assures donors
              that their gifts are used wisely and with accountability for the benefit
              of those who need it most.
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
