import fs from "fs";
import path from "path";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";
import DonateForm from "@/components/DonateForm";

export const metadata = {
  title: "Give Online – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

// The online form appears only once the Zoho Payments credentials are set in Vercel.
const onlineGivingReady = ["ZOHO_ACCOUNT_ID", "ZOHO_API_KEY", "ZOHO_CLIENT_ID", "ZOHO_CLIENT_SECRET", "ZOHO_REFRESH_TOKEN"]
  .every((k) => process.env[k]);

// The online hundi block appears once the Ashrama's hundi UPI QR is saved here.
const HUNDI_QR = "/images/hundi-qr.png";
// Same signed Bank of Baroda merchant link the hundi QR encodes (from the e-Hundi standee).
const HUNDI_UPI_ID = "ramak96866406@barodampay";
const HUNDI_UPI_LINK =
  "upi://pay?pa=ramak96866406@barodampay&pn=RAMAKRISHNA%20MISSION%20ASHRAMA&mc=&tn=Verified%20Merchant&am=&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEUCIAKEBXjkchgRJCSPhOBGk7Gxt8UjjMeRZXZ8c6IM9cEDAiEAmvrb1c6a1Y6oJsqhBtEYFO+fehncKCwo+P+YwHafkF4=";
const hundiReady = fs.existsSync(path.join(process.cwd(), "public", HUNDI_QR));

export default function DonatePage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Give Online"
        subtitle="Your generous contribution helps sustain the Ashrama's spiritual, educational, medical, and relief activities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate" },
        ]}
      />

      {/* Support Our Mission */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Support Our Mission" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission Ashrama, Belagavi carries out a wide range of spiritual,
              educational, cultural, medical, and relief activities for the welfare of the
              community. All these activities are sustained by the generous contributions of
              devotees and well-wishers who share in the Ashrama&apos;s mission of serving
              God in man.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "24px" }}>
              Your donation — however large or small — helps the Ashrama continue and expand
              its activities: conducting annual celebrations, distributing scholarships to
              deserving students, providing free eye surgeries through Sri Sharada Netralaya,
              undertaking flood relief and welfare activities, and maintaining the historic
              Swami Vivekananda Memorial sites.
            </p>
            <div style={{
              background: "#F3EDE4",
              borderLeft: "4px solid #2C2C2C",
              padding: "20px 28px",
            }}>
              <p style={{ color: "#2D2A26", fontWeight: 600, fontSize: "15px", lineHeight: 1.7 }}>
                Donations to Ramakrishna Mission Ashrama, Belagavi are exempt from Income Tax
                under <strong>Section 80G</strong> of the Income Tax Act, 1961.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Give Online */}
      {onlineGivingReady && (
      <section id="give-online" style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Donate Online" />
          </div>
          <div className="reveal" style={{ maxWidth: "720px", margin: "0 auto", background: "#fff", border: "1px solid #e0d5cc", padding: "32px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
            <DonateForm />
          </div>

          {hundiReady && (
            <div className="reveal" style={{ maxWidth: "720px", margin: "30px auto 0", background: "#fff", border: "1px dashed #c9b79c", padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              <div style={{ flex: "1 1 280px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#2D2A26", marginBottom: "10px" }}>
                  Prefer not to share your PAN? Offer to the Online Hundi
                </h3>
                <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.7, marginBottom: "10px" }}>
                  Scan this QR code with any UPI app, or tap &ldquo;Pay with UPI app&rdquo; on your
                  phone, and offer any amount. No name, email or other details are needed.
                </p>
                <p style={{ fontSize: "14px", color: "#2D2A26", fontWeight: 600, lineHeight: 1.6, background: "#F3EDE4", borderLeft: "3px solid #C4922A", padding: "10px 14px" }}>
                  No receipt will be issued for hundi offerings. They are treated as hundi
                  collection and cannot be assigned to a specific purpose.
                </p>
              </div>
              <div style={{ flex: "0 0 auto", margin: "0 auto", textAlign: "center" }}>
                <img src={HUNDI_QR} alt="Online Hundi UPI QR code" width={240} height={240} style={{ width: "240px", maxWidth: "100%", height: "auto", border: "1px solid #e0d5cc" }} />
                <p style={{ marginTop: "8px", fontSize: "13px", color: "#5A5650" }}>
                  UPI ID: <strong style={{ color: "#2D2A26" }}>{HUNDI_UPI_ID}</strong>
                </p>
                <a href={HUNDI_UPI_LINK} className="btn-orange" style={{ display: "block", marginTop: "10px", padding: "10px 16px", fontSize: "12px" }}>
                  Pay with UPI app
                </a>
                <a href={HUNDI_QR} download="RKM-Belagavi-Hundi-QR.png" style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "#2C2C2C", fontWeight: 600 }}>
                  Download QR
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      )}

      {/* Other Ways to Donate */}
      <section style={{ padding: "70px 0", background: onlineGivingReady ? undefined : "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title={onlineGivingReady ? "Other Ways to Donate" : "How to Donate"} />
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", maxWidth: "900px", margin: "0 auto" }}>
            {/* Bank Transfer */}
            <div className="reveal" style={{ border: "1px solid #e0d5cc", padding: "28px", background: "#fff", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(117,58,15,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg className="w-5 h-5" style={{ color: "#2C2C2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26" }}>Bank Transfer / NEFT</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#5A5650" }}>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Account Name:</span> Ramakrishna Mission Ashrama</p>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Bank:</span> Please contact the Ashrama for current bank details</p>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Phone:</span> <a href="tel:+918312432789" style={{ color: "#5A5650", textDecoration: "none" }}>0831-243 2789</a></p>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Email:</span> <a href="mailto:belgaum@rkmm.org" style={{ color: "#2C2C2C", textDecoration: "none", fontWeight: 600 }}>belgaum@rkmm.org</a></p>
              </div>
            </div>

            {/* Cheque / DD */}
            <div className="reveal" style={{ border: "1px solid #e0d5cc", padding: "28px", background: "#fff", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(117,58,15,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg className="w-5 h-5" style={{ color: "#2C2C2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D2A26" }}>Cheque / Demand Draft</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#5A5650" }}>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Payable to:</span> Ramakrishna Mission Ashrama</p>
                <p><span style={{ fontWeight: 600, color: "#2D2A26" }}>Send to:</span></p>
                <p style={{ lineHeight: 1.6 }}>
                  Ramakrishna Mission Ashrama<br />
                  Fort, Belagavi &ndash; 590016<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Exemption */}
      <section style={{ padding: "70px 0", background: onlineGivingReady ? "#F3EDE4" : undefined }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Income Tax Exemption (Section 80G)" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              All donations to the Ramakrishna Mission Ashrama, Belagavi are eligible for
              deduction under Section 80G of the Income Tax Act, 1961. Donors will receive
              an official receipt which may be used to claim the tax deduction when filing
              income tax returns.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Please ensure that you provide your full name, address, and PAN number
              when making a donation so that the receipt can be issued correctly. For any
              queries regarding tax receipts, please contact the Ashrama at{" "}
              <a href="mailto:belgaum@rkmm.org" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                belgaum@rkmm.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FCRA */}
      <section style={{ padding: "70px 0", background: onlineGivingReady ? undefined : "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Foreign Donations (FCRA)" />
          </div>
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "16px" }}>
              The Ramakrishna Mission Ashrama, Belagavi accepts foreign contributions in
              compliance with the Foreign Contribution (Regulation) Act (FCRA). Donors
              residing outside India who wish to contribute are requested to contact the
              Ashrama directly to obtain the necessary bank account details designated for
              foreign contributions, as required under FCRA regulations.
            </p>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Please note that foreign contributions must be received only in the FCRA
              designated account and that donors should ensure compliance with any applicable
              regulations in their country of residence. For further details, please write
              to{" "}
              <a href="mailto:belgaum@rkmm.org" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                belgaum@rkmm.org
              </a>{" "}
              or call{" "}
              <a href="tel:+918312432789" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                0831-243 2789
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "70px 0", background: onlineGivingReady ? "#F3EDE4" : undefined }}>
        <div className="site-container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.7, marginBottom: "24px" }}>
              For any queries regarding donations, please feel free to contact us.
              The Ashrama welcomes your support and deeply appreciates your generosity.
            </p>
            <Link href="/contact" className="btn-orange">
              Contact the Ashrama &nbsp;&rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
