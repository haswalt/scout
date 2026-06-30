const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rmzzrb",
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {},
  },
});
