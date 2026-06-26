import sharp from "sharp";
import { writeFileSync } from "fs";

// Render directly at 700x140 — no resize, font-size matches pixel output 1:1
// Measured: CARE@120px font = 380px, DMV = 300px, Prep ≈ 280px
// At font-size=62 (62/120 scale): CARE=197px, DMV=155px, Prep=145px → total 497+gaps fits in 700-174=526px

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="140" viewBox="0 0 700 140" fill="none">

  <!-- ── CAR DOME ICON (icon paths all scaled to 700x140 space) ── -->

  <!-- Outer dome arch -->
  <path d="M 16 134 Q 14 6 86 6 Q 158 6 160 134"
        stroke="white" stroke-width="2.8" stroke-linecap="round" fill="none"/>

  <!-- Car body (front-facing) -->
  <path d="M 36 112 L 36 86 Q 36 79 42 75
           L 54 58 Q 60 46 86 44
           Q 112 46 118 58 L 130 75
           Q 136 79 136 86 L 136 112 Z"
        stroke="white" stroke-width="2.2" stroke-linejoin="round" fill="none"/>

  <!-- Windshield -->
  <path d="M 57 75 L 62 54 Q 86 48 110 54 L 115 75 Z"
        stroke="white" stroke-width="1.8" stroke-linejoin="round" fill="none"/>

  <!-- Headlights -->
  <rect x="36.5" y="92" width="22" height="11" rx="3"
        stroke="white" stroke-width="1.6" fill="none"/>
  <rect x="113.5" y="92" width="22" height="11" rx="3"
        stroke="white" stroke-width="1.6" fill="none"/>

  <!-- Grille -->
  <rect x="70" y="98" width="32" height="9" rx="2.5"
        stroke="white" stroke-width="1.4" fill="none" opacity="0.75"/>

  <!-- Hood crease -->
  <line x1="86" y1="75" x2="86" y2="92"
        stroke="white" stroke-width="1" opacity="0.32"/>

  <!-- Road swoosh -->
  <path d="M 22 130 Q 68 118 118 126 Q 148 132 178 124"
        stroke="#00FF66" stroke-width="3.2" stroke-linecap="round" fill="none"/>
  <path d="M 14 138 Q 70 124 130 134 Q 162 140 195 131"
        stroke="#00FF66" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.55"/>

  <!-- ── TEXT — positions based on measured character widths ── -->

  <!-- CARE: x=174, width=197px → ends at ~371 -->
  <text x="174" y="104"
        font-family="'Arial Black', 'Arial Bold', Arial, Helvetica, sans-serif"
        font-size="62" font-weight="900" fill="white">CARE</text>

  <!-- DMV: x=381 (10px gap after CARE), width=155px → ends at ~536 -->
  <text x="381" y="104"
        font-family="'Arial Black', 'Arial Bold', Arial, Helvetica, sans-serif"
        font-size="62" font-weight="900" fill="#00FF66">DMV</text>

  <!-- Prep: x=546 (10px gap after DMV), width=145px → ends at ~691 -->
  <text x="546" y="104"
        font-family="'Arial Black', 'Arial Bold', Arial, Helvetica, sans-serif"
        font-size="62" font-weight="700" fill="white">Prep</text>

</svg>`;

writeFileSync("/Users/vader/CAREDMVPREP.COM/public/logo-header.svg", svg);

const { default: sharpLib } = await import("sharp");

await sharpLib(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile("/Users/vader/CAREDMVPREP.COM/public/logo-header-new.png");

console.log("Done — 700x140 direct render");
