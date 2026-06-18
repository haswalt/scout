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
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setupTests.ts"],
    dir: "src",
  },
});
