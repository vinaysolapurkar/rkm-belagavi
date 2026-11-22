// node screenshot.mjs <baseUrl> <outDir> <focusText> <path...>
// Saves a desktop and a phone screenshot of each page, scrolled so the changed
// text (focusText) is in view. Falls back to the top of the page.
import { chromium } from "playwright-core";

const [base, outDir, focus, ...pages] = process.argv.slice(2);
const views = [
  ["desktop", { width: 1366, height: 1000 }],
  ["phone", { width: 390, height: 844 }],
];

const browser = await chromium.launch();
let n = 0;
for (const pagePath of pages) {
  for (const [label, viewport] of views) {
    const page = await browser.newPage({ viewport });
    await page.goto(base + pagePath, { waitUntil: "networkidle" });
    // Show scroll-reveal content without needing to scroll through the page.
    await page.evaluate(() =>
      document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-children").forEach((el) => el.classList.add("visible"))
    );
    if (focus) {
      const target = page.getByText(focus, { exact: false }).first();
      if (await target.count()) {
        await target.evaluate((el) => el.scrollIntoView({ block: "center" }));
        await page.waitForTimeout(500);
      }
    }
    await page.screenshot({ path: `${outDir}/${String(++n).padStart(2, "0")}-${label}.png` });
    await page.close();
  }
}
await browser.close();
