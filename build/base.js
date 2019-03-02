"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenidejs_1 = require("selenidejs");
const selenium_webdriver_1 = require("selenium-webdriver");
beforeAll(async () => {
    const driver = new selenium_webdriver_1.Builder().withCapabilities(selenium_webdriver_1.Capabilities.chrome()).build();
    exports.browser = selenidejs_1.Browser
        .drivedBy(driver)
        .timeout(2000)
        .build();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});
afterAll(async () => {
    await exports.browser.quit();
});
