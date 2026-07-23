// Generates the Poonguzhali Psychology app icon + splash source images at
// build time. Runs in GitHub Actions (Linux) using `sharp` (a dependency of
// @capacitor/assets), so no image tools are needed on any local machine.
//
// The mark is a gold "TP" monogram inside a thin gold ring, on the app's
// plum→terracotta gradient. Drawn as vector paths (no fonts required) so it
// renders identically everywhere.

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "assets");
mkdirSync(OUT, { recursive: true });

const PLUM_A = "#7a3d74";
const PLUM_B = "#c9694f";
const GOLD = "#f4d08a";
const DARK = "#16111c";

// "TP" monogram inside a ring, normalised in a 1024×1024 box and drawn with
// round-cap strokes (font-free vector paths).
function monogramGroup(k, tx, ty) {
  return `
  <g transform="translate(${tx},${ty}) scale(${k})"
     fill="none" stroke="${GOLD}" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="512" cy="512" r="430" stroke-width="26" />
    <g stroke-width="70">
      <!-- T -->
      <line x1="288" y1="342" x2="484" y2="342" />
      <line x1="386" y1="342" x2="386" y2="682" />
      <!-- P -->
      <line x1="556" y1="342" x2="556" y2="682" />
      <path d="M556 342 L632 342 A104 104 0 0 1 632 550 L556 550" />
    </g>
  </g>`;
}

// Build an SVG of size S with an optional background and a centred glyph
// scaled to `gs` (fraction of the canvas).
function svg(S, bg, gs) {
  const k = (S * gs) / 1024;
  const box = 1024 * k;
  const tx = (S - box) / 2;
  const ty = (S - box) / 2;
  let background = "";
  if (bg === "grad") {
    background = `<rect width="${S}" height="${S}" fill="url(#g)"/>`;
  } else if (bg === "dark") {
    background = `<rect width="${S}" height="${S}" fill="${DARK}"/>`;
  }
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${PLUM_A}"/>
      <stop offset="1" stop-color="${PLUM_B}"/>
    </linearGradient>
  </defs>
  ${background}
  ${monogramGroup(k, tx, ty)}
</svg>`);
}

async function render(name, S, bg, gs) {
  await sharp(svg(S, bg, gs)).png().toFile(join(OUT, name));
  console.log("  ✓", name);
}

console.log("Generating Poonguzhali Psychology icons…");
await render("icon.png", 1024, "grad", 0.78);
await render("icon-only.png", 1024, "grad", 0.78);
await render("icon-foreground.png", 1024, "none", 0.62);
await render("icon-background.png", 1024, "grad", 0);
await render("splash.png", 2732, "grad", 0.32);
await render("splash-dark.png", 2732, "dark", 0.32);
console.log("Done.");
