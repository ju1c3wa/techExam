const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "projectId": "3eprfk",

  viewportWidth: 1500,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
