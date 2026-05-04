export default function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div
      id={id}
      className="scroll-mt-28"
      style={{
        textAlign: isCenter ? "center" : "left",
        marginBottom: "40px",
      }}
    >
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: "38px",
          fontWeight: 600,
          color: "#1A1A1A",
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#7A756D",
            maxWidth: isCenter ? "600px" : "none",
            margin: isCenter ? "0 auto" : "0",
            fontSize: "16px",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          width: "55px",
          height: "3px",
          background: "#B8860B",
          margin: isCenter ? "18px auto 0" : "18px 0 0",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
