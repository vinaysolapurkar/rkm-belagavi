import Link from "next/link";

const socialChannels = [
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029Vb0I74wLikg9O3VjhD2b",
    color: "#25D366",
    d: "M17.472,14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94,1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198,0-.52.074-.792.372-.272.297-1.04,1.016-1.04,2.479,0,1.462,1.065,2.875,1.213,3.074.149.198,2.096,3.2,5.077,4.487.709.306,1.262.489,1.694.625.712.227,1.36.195,1.871.118.571-.085,1.758-.719,2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421,7.403h-.004a9.87,9.87,0,0,1-5.031-1.378l-.361-.214-3.741.982L4.045,17.62l-.235-.374a9.86,9.86,0,0,1-1.51-5.26c.001-5.45,4.436-9.884,9.888-9.884a9.825,9.825,0,0,1,6.988,2.896,9.83,9.83,0,0,1,2.892,6.994c-.003,5.45-4.437,9.884-9.885,9.884ZM20.52,3.449C18.24,1.245,15.24.001,12.05,0,5.495,0,.16,5.335.157,11.892a11.86,11.86,0,0,0,1.587,5.945L.057,24l6.305-1.654a11.882,11.882,0,0,0,5.683,1.448h.005c6.554,0,11.890-5.335,11.893-11.893A11.821,11.821,0,0,0,20.52,3.449Z"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/Belgaumashrama",
    color: "#FF0000",
    d: "M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.75,15.02V8.98L15.5,12Z"
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: "#141F1F", color: "#AAA59D" }}>
        <div className="site-container grid-footer" style={{ paddingTop: "56px", paddingBottom: "56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
          {/* About */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid #B8860B" }}>About Us</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.7, marginBottom: "20px", textAlign: "justify" }}>
              Sometime in 1998, Revered Swami Smaranananda ji Maharaj, the then General Secretary,
              Ramakrishna Math and Ramakrishna Mission initiated a research into Swami
              Vivekananda&apos;s stay in Belagavi.
            </p>
            <Link href="/about" style={{ display: "inline-block", background: "#B8860B", color: "#fff", padding: "8px 16px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", textDecoration: "none", transition: "background 0.2s" }}>
              Read More
            </Link>
          </div>

          {/* Secondary Menu */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid #B8860B" }}>Secondary Menu</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Become a Monk", href: "/get-involved" },
                { label: "Flood Relief", href: "/activities/relief" },
                { label: "Swamiji on Strength!", href: "/about/swamiji-in-belagavi" },
                { label: "Swami Vivekananda Memorial", href: "/memorial" },
                { label: "FCRA Requirements", href: "/donate" },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: "10px" }}>
                  <Link href={item.href} style={{ color: "#AAA59D", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-[#B8860B]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid #B8860B" }}>Main Menu</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Ashrama at Fort", href: "/ashrama" },
                { label: "Swami Vivekananda Memorial", href: "/memorial" },
                { label: "Activities", href: "/activities" },
                { label: "Events", href: "/events" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: "10px" }}>
                  <Link href={item.href} style={{ color: "#AAA59D", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-[#B8860B]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid #B8860B" }}>Contact US</h3>
            <div style={{ fontSize: "13px" }}>
              <p style={{ lineHeight: 1.7, marginBottom: "12px" }}>
                Ramakrishna Mission Ashrama, Fort,<br />
                Belagavi &ndash; 590016,<br />
                Karnataka
              </p>
              <p style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Phone:</strong> 0831 -243 2789/ 243 0789
              </p>
              <p>
                <strong style={{ color: "#fff" }}>Email:</strong>{" "}
                <a href="mailto:belgaum@rkmm.org" style={{ color: "#B8860B", textDecoration: "none", transition: "color 0.2s" }}>belgaum@rkmm.org</a>
              </p>

              {/* Social Media Presence */}
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #333" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#fff", marginBottom: "12px" }}>
                  Connect With Us
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                  {socialChannels.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#1f2d2d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        transition: "all 0.2s",
                      }}
                      className="hover:!bg-[#B8860B]"
                    >
                      <svg style={{ width: "18px", height: "18px" }} fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #333" }}>
          <div className="site-container" style={{ padding: "18px 0", textAlign: "center", fontSize: "12px", color: "#777" }}>
            &copy; {new Date().getFullYear()} Ramakrishna Mission Ashrama, Belagavi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
