import { defineConfig, devices } from "@playwright/test";

const port = 3100;
const mockApiPort = 3200;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["html", { open: "never" }], ["github"]] : "list",
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: [
    {
      command: `node tests/fixtures/homedata-server.mjs ${mockApiPort}`,
      cwd: ".",
      reuseExistingServer: !process.env.CI,
      timeout: 30_000,
      url: `http://127.0.0.1:${mockApiPort}/health`,
    },
    {
      command: `pnpm --filter webapp exec next dev --hostname 127.0.0.1 --port ${port}`,
      cwd: "../..",
      env: {
        HOMEDATA_API_KEY: "e2e-key",
        HOMEDATA_BASE_URL: `http://127.0.0.1:${mockApiPort}`,
      },
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
      url: baseURL,
    },
  ],
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
