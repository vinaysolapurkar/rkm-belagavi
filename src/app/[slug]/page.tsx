import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SubpageLayout from "@/components/SubpageLayout";
import { loadPage, pageSlugs, type Block } from "@/lib/pages";

// Pages written through the Telegram content bot (src/content/pages/*.json).
// Every other address is a 404 — this route never serves anything else.
export const dynamicParams = false;

export function generateStaticParams() {
  return pageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const page = loadPage((await params).slug);
  return { title: `${page?.title ?? "Page"} – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI` };
}

// **bold** and [text](link) inside paragraphs, list items and quotes.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} style={{ color: "#2D2A26" }}>{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link && /^(\/|https:\/\/|mailto:|tel:)/.test(link[2])) {
          return (
            <a key={i} href={link[2]} style={{ color: "#B8860B", fontWeight: 600 }} {...(link[2].startsWith("https://") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

const paragraph: React.CSSProperties = { fontSize: "16px", color: "#5A5650", lineHeight: 1.85, textAlign: "justify", marginBottom: "18px" };

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={i} style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "30px", fontWeight: 600, color: "#1A2F2F", margin: "36px 0 14px", lineHeight: 1.3 }}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return <p key={i} style={paragraph}><Inline text={block.text} /></p>;
    case "image":
      return (
        <figure key={i} style={{ margin: "28px 0" }}>
          <Image src={block.src} alt={block.alt} width={900} height={600} style={{ width: "100%", height: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} sizes="(max-width: 900px) 100vw, 900px" />
          {block.caption && <figcaption style={{ textAlign: "center", fontSize: "14px", color: "#7A756D", marginTop: "10px", fontStyle: "italic" }}>{block.caption}</figcaption>}
        </figure>
      );
    case "list":
      return (
        <ul key={i} style={{ ...paragraph, textAlign: "left", paddingLeft: "22px", listStyle: "disc" }}>
          {block.items.map((item, j) => <li key={j} style={{ marginBottom: "6px" }}><Inline text={item} /></li>)}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} style={{ background: "#F3EDE4", borderLeft: "4px solid #B8860B", padding: "20px 28px", margin: "28px 0" }}>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "22px", color: "#2D2A26", lineHeight: 1.6, fontStyle: "italic" }}><Inline text={block.text} /></p>
          {block.author && <p style={{ marginTop: "8px", fontSize: "14px", fontWeight: 700, color: "#B8860B" }}>— {block.author}</p>}
        </blockquote>
      );
    case "button":
      return (
        <p key={i} style={{ margin: "24px 0" }}>
          {block.href.startsWith("/") ? (
            <Link href={block.href} className="btn-orange">{block.text} &nbsp;&rsaquo;</Link>
          ) : (
            <a href={block.href} className="btn-orange" target="_blank" rel="noopener noreferrer">{block.text} &nbsp;&rsaquo;</a>
          )}
        </p>
      );
    default:
      return null;
  }
}

export default async function ContentPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const page = loadPage((await params).slug);
  if (!page || page.hidden) notFound();

  return (
    <SubpageLayout>
      <PageHero title={page.title} subtitle={page.subtitle} breadcrumbs={[{ label: "Home", href: "/" }, { label: page.title }]} />
      <section style={{ padding: "60px 0 80px" }}>
        <div className="site-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>{page.blocks.filter((b) => !b.hidden).map(renderBlock)}</div>
        </div>
      </section>
    </SubpageLayout>
  );
}
