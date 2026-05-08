import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Contact – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function ContactPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Contact Us"
        subtitle="We welcome your enquiries, feedback, and correspondence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Main Content */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>

            {/* Left Column — Contact Info + Map */}
            <div className="reveal-left">
              <h2 style={{ fontSize: "30px", fontWeight: 700, color: "#2D2A26", marginBottom: "30px" }}>Reach Us</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "35px" }}>
                {/* Address */}
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(117,58,15,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg className="w-6 h-6" style={{ color: "#2C2C2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#2D2A26", marginBottom: "4px", fontSize: "16px" }}>Address</h3>
                    <p style={{ color: "#5A5650", fontSize: "15px", lineHeight: 1.6 }}>
                      Ramakrishna Mission Ashrama<br />
                      Fort, Belagavi &ndash; 590016<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(117,58,15,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg className="w-6 h-6" style={{ color: "#2C2C2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#2D2A26", marginBottom: "4px", fontSize: "16px" }}>Phone</h3>
                    <p style={{ color: "#5A5650", fontSize: "15px", lineHeight: 1.6 }}>
                      <a href="tel:+918312432789" style={{ color: "#5A5650", textDecoration: "none" }}>0831-243 2789</a><br />
                      <a href="tel:+918312970320" style={{ color: "#5A5650", textDecoration: "none" }}>0831-297 0320</a> /{" "}
                      <a href="tel:+918312970321" style={{ color: "#5A5650", textDecoration: "none" }}>297 0321</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(117,58,15,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg className="w-6 h-6" style={{ color: "#2C2C2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#2D2A26", marginBottom: "4px", fontSize: "16px" }}>Email</h3>
                    <a href="mailto:belgaum@rkmm.org" style={{ color: "#2C2C2C", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
                      belgaum@rkmm.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{ overflow: "hidden", border: "1px solid #e0d5cc", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <iframe
                  src="https://maps.google.com/maps?q=Ramakrishna+Mission+Ashrama+Fort+Belagavi+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ramakrishna Mission Ashrama, Belagavi — Google Maps"
                />
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <div className="reveal-right">
              <h2 style={{ fontSize: "30px", fontWeight: 700, color: "#2D2A26", marginBottom: "30px" }}>Send a Message</h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} action="#" method="POST">
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#2D2A26", marginBottom: "6px" }}>
                    Your Name <span style={{ color: "#C4922A" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e0d5cc",
                      fontSize: "15px",
                      color: "#2D2A26",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#2D2A26", marginBottom: "6px" }}>
                    Your Email <span style={{ color: "#C4922A" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e0d5cc",
                      fontSize: "15px",
                      color: "#2D2A26",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#2D2A26", marginBottom: "6px" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number (optional)"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e0d5cc",
                      fontSize: "15px",
                      color: "#2D2A26",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#2D2A26", marginBottom: "6px" }}>
                    Subject <span style={{ color: "#C4922A" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Subject of your message"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e0d5cc",
                      fontSize: "15px",
                      color: "#2D2A26",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#2D2A26", marginBottom: "6px" }}>
                    Your Message <span style={{ color: "#C4922A" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message here..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #e0d5cc",
                      fontSize: "15px",
                      color: "#2D2A26",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  />
                </div>

                <button type="submit" className="btn-orange" style={{ width: "100%", textAlign: "center", padding: "14px 28px", fontSize: "15px" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
