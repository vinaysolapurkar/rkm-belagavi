import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Gallery – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

const galleryCategories = [
  {
    id: "pictures",
    title: "Pictures",
    description:
      "A collection of photographs documenting the life and activities of the Ramakrishna Mission Ashrama, Belagavi. Browse images from annual celebrations, flood relief operations, inauguration ceremonies, and the historic Swami Vivekananda Memorial sites.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "videos",
    title: "Videos",
    description:
      "Video recordings of spiritual talks, discourses, and special events at the Ashrama. Includes recordings of talks by monks of the Ramakrishna Order, Annual Celebration programmes, and Online Japa Yajna sessions.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "audio",
    title: "Audio",
    description:
      "Audio recordings of spiritual talks, devotional music (bhajans), and discourses on sacred texts. Listen to the inspiring words of monks and scholars who have visited and spoken at the Ashrama.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    id: "articles",
    title: "Articles",
    description:
      "Articles and writings on Vedanta, the lives of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda, and the activities of the Ashrama. A resource for seekers interested in the spiritual and cultural work of the Ramakrishna Mission.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function GalleryPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Gallery"
        subtitle="Photographs, videos, audio recordings, and articles documenting the life and heritage of the Ashrama."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* Intro */}
      <section style={{ padding: "70px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify" }}>
              Welcome to the gallery of the Ramakrishna Mission Ashrama, Belagavi. Here
              you will find a growing collection of photographs, videos, audio recordings,
              and articles that document the life, activities, and heritage of the Ashrama.
              We invite you to explore and share in the spiritual and cultural richness of
              this historic institution.
            </p>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Browse by Category" />
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px", maxWidth: "900px", margin: "0 auto" }}>
            {galleryCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="reveal gallery-card"
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "30px",
                  border: "1px solid #e0d5cc",
                  borderRadius: "8px",
                  background: "#fff",
                  cursor: "default",
                }}
              >
                <div style={{ flexShrink: 0, color: "#2C2C2C" }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#2D2A26", marginBottom: "8px" }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#8A847C", lineHeight: 1.65 }}>
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ padding: "70px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#8A847C", fontSize: "16px", lineHeight: 1.7, marginBottom: "12px" }}>
              Gallery content is being updated. More pictures, videos, and articles will be
              added soon. Please check back for the latest additions.
            </p>
            <p style={{ color: "#8A847C", fontSize: "14px" }}>
              For enquiries about specific content, please{" "}
              <Link href="/contact" style={{ color: "#2C2C2C", fontWeight: 600, textDecoration: "none" }}>
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
