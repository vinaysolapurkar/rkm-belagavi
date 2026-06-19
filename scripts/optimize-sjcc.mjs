import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "fs";
import { join, extname } from "path";

const SRC = "C:/Users/vinay/projects/rkm/silver-jubliee-pics";
const OUT = "C:/Users/vinay/projects/rkm/public/images/silver-jubilee";

mkdirSync(OUT, { recursive: true });

const slug = (name) =>
  name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();

let totalIn = 0;
let totalOut = 0;
const results = [];

for (const f of files) {
  const inPath = join(SRC, f);
  const outName = `${slug(f)}.jpg`;
  const outPath = join(OUT, outName);
  const inSize = statSync(inPath).size;

  await sharp(inPath)
    .rotate() // respect EXIF orientation
    .resize({ width: 1500, height: 1500, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 68, mozjpeg: true, progressive: true })
    .toFile(outPath);

  const outSize = statSync(outPath).size;
  totalIn += inSize;
  totalOut += outSize;
  results.push({ src: f, out: outName, kb: Math.round(outSize / 1024) });
}

console.log(JSON.stringify(results, null, 2));
console.log(
  `\nDONE: ${files.length} images | ${(totalIn / 1048576).toFixed(0)} MB -> ${(totalOut / 1048576).toFixed(1)} MB`
);
