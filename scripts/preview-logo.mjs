import sharp from "sharp";
import { readFileSync } from "fs";

const { default: sharpLib } = await import("sharp");

// Composite: navy bg + logo PNG
await sharpLib({
  create: { width: 700, height: 140, channels: 3, background: "#0d2240" }
})
  .composite([{ input: "/Users/vader/CAREDMVPREP.COM/public/logo-header-new.png", top: 0, left: 0 }])
  .png()
  .toFile("/Users/vader/CAREDMVPREP.COM/public/logo-preview-dark.png");

console.log("Done — logo-preview-dark.png");
