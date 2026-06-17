import { defineConfig } from "@pandacss/dev";
import scoutPreset from "@repo/ui/preset";

export default defineConfig({
  preflight: true,
  presets: [scoutPreset],
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  importMap: "@repo/ui",
  outdir: "styled-system",
  jsxFramework: "react",
});
