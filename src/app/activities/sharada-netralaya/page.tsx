import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Sharada Netralaya – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function SharadaNetralayaPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Sharada Netralaya"
        subtitle="A charitable eye hospital rendering quality eye care to the community, particularly the economically weaker sections of society."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Sharada Netralaya" },
        ]}
      />

      <section style={{ padding: "70px 0 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ position: "relative", width: "100%", overflow: "hidden", boxShadow: "0 8px 35px rgba(0,0,0,0.15)", borderRadius: "8px" }}>
            <Image
              src="/images/home-ashrama.jpg"
              alt="Ramakrishna Mission Ashrama building, home of Sri Sharada Netralaya"
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
              Sri Sharada Netralaya is a charitable eye hospital set up within the premises of
              the Ramakrishna Mission Ashrama, Belagavi. It was established with the noble
              purpose of rendering quality eye care to the community, particularly to those
              belonging to the economically weaker sections of society who cannot afford
              private medical care.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginTop: "16px" }}>
              Started in 2008 in an independent single-storeyed building, the Netralaya conducts screening camps twice a week with suture-less surgeries and same-day discharge. As of end 2023, over 23,000 patients have been screened and more than 7,000 cataract surgeries performed free of cost.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "50px 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="About Sri Sharada Netralaya" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Named after Sri Sarada Devi — the Holy Mother, who is revered as the embodiment
              of compassion — Sri Sharada Netralaya embodies the ideal of service as worship.
              The hospital is situated in the Ashrama premises at Fort, Belagavi, making it
              accessible to patients from the city and surrounding rural areas.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              The Netralaya is staffed by qualified ophthalmologists and trained paramedical
              personnel who are committed to providing professional and compassionate care.
              Patients are received with warmth and treated with dignity, regardless of their
              financial background. The hospital is equipped with modern diagnostic and
              surgical equipment to ensure high-quality outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Cataract Surgeries */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Free Cataract Surgeries" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Since 2006, Sri Sharada Netralaya has been conducting free cataract surgeries
              for patients who cannot afford the cost of treatment. Cataract is one of the
              leading causes of avoidable blindness in India, particularly among the elderly
              and the rural poor. By providing free cataract surgeries, the Netralaya has
              restored the gift of sight to hundreds of patients who would otherwise have
              had no access to such treatment.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The free surgery programme is made possible through the generous contributions
              of donors and well-wishers of the Ashrama. Cataract screening camps are also
              organised in rural areas to identify patients in need and bring them to the
              hospital for treatment. These camps serve as an important outreach mechanism
              to ensure that eye care reaches those who are most in need.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              All surgical procedures are performed under sterile conditions following
              established medical protocols. Post-operative care and follow-up are provided
              to all patients to ensure successful recovery. The Netralaya takes pride in the
              high success rate of its cataract surgeries, which have given beneficiaries a
              new lease of life.
            </p>
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Medical Service to the Community" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              Beyond cataract surgeries, Sri Sharada Netralaya renders a wide range of eye
              care services to the community. These include diagnosis and treatment of
              refractive errors, glaucoma, diabetic retinopathy, corneal diseases, and
              other common eye conditions. Prescription glasses are provided at subsidised
              rates to patients with refractive errors.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Sri Sharada Netralaya stands as a shining example of the Ramakrishna Mission&apos;s
              philosophy of &ldquo;Shiva Jnane Jiva Seva&rdquo; — serving man as God. By
              alleviating suffering and restoring vision, the hospital fulfils the Mission&apos;s
              core commitment to the physical and social welfare of the community it serves.
            </p>
          </div>
        </div>
      </section>

      {/* Inauguration */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Inauguration" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Sri Sharada Netralaya was started in 2008 in an independent single-storeyed building within the Ashrama premises. The clinic was inaugurated in the presence of senior monks of the Ramakrishna Order, local dignitaries, doctors, and well-wishers of the Ashrama. Since its inception, the Netralaya has grown into a well-equipped facility conducting screening camps twice a week, with suture-less cataract surgeries and same-day discharge — a model of efficient and compassionate healthcare delivery.
            </p>
          </div>
        </div>
      </section>

      {/* IDBI Bank Donation */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Recent Support" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{
              background: "#fff",
              border: "1px solid #E8E2D8",
              borderLeft: "4px solid #B8860B",
              padding: "28px 32px",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
            }}>
              <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
                IDBI Bank Ltd. provided financial help of nearly Rs. 9.4 lakhs as part of their CSR Initiative in 2023-24, significantly enhancing the Netralaya&apos;s infrastructure and capabilities.
              </p>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px" }}>
                Funds were allocated to
              </p>
              <ul style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.85, paddingLeft: "20px", listStyleType: "disc" }}>
                <li style={{ marginBottom: "8px" }}>Repair and repurposing of a two-story structure for a Doctor Consultation-cum-Screening room</li>
                <li style={{ marginBottom: "8px" }}>Metal sheet roofing for the corridor between the Netralaya main building and the newly built Waiting room</li>
                <li style={{ marginBottom: "8px" }}>Outdoor metal shed for washing and drying OT linen</li>
                <li>20kVA Diesel Generator for the Netralaya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal" style={{ paddingTop: "70px" }}>
            <Link href="/activities" className="btn-orange">
              &larr; &nbsp;Back to Activities
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
