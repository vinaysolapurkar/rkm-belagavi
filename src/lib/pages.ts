import fs from "fs";
import path from "path";

// Simple content pages: one JSON file per page in src/content/pages/<slug>.json,
// shown at /<slug>. The Telegram content bot creates and edits these; they can
// only use the block types below, so a page can never contain code.

export type Block = (
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "button"; text: string; href: string }
) & { hidden?: boolean };

export type ContentPage = {
  title: string;
  subtitle?: string;
  hidden?: boolean;
  blocks: Block[];
};

const DIR = path.join(process.cwd(), "src/content/pages");

export function pageSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => /^[a-z0-9-]+\.json$/.test(f))
    .map((f) => f.replace(/\.json$/, ""))
    .filter((slug) => !loadPage(slug)?.hidden);
}

export function loadPage(slug: string): ContentPage | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as ContentPage;
}
