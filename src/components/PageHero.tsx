import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1A2F2F 0%, #141F1F 50%, #1A1A1A 100%)",
        padding: "40px 0 35px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)",
        }}
      />
      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #B8860B, #D4C078)",
        }}
      />
      <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            style={{
              marginBottom: "16px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && (
                  <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    className="hover:!text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "#D4C078" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1
          style={{
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: subtitle ? "14px" : "0",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
