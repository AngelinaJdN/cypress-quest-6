const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "0667dfb50271252d3eb41d11f859569a2571d1eca43829b3e15e5be03f20dcde",
  },
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});