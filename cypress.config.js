const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress - Test Result Report',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    specPattern: 'cypress/e2e/*.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
