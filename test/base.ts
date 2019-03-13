import { Browser } from 'selenidejs';
import { Builder, Capabilities } from 'selenium-webdriver';

export let browser: Browser;

beforeAll(async () => {
    const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

    browser = Browser
        .drivedBy(driver)
        .timeout(2000)
        .build();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterAll(async () => {
    await browser.quit();
});