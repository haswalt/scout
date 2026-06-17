import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    coverage: {
      provider: "istanbul",
      exclude: ["styled-system/**", "**/*.{test,spec}.{ts,tsx}", "**/*.d.ts"],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setupTests.ts"],
    dir: "src",
  },
});
