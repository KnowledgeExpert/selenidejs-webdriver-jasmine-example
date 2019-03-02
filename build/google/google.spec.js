"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const selenidejs_1 = require("selenidejs");
describe('Google', () => {
    it('should search', async () => {
        await base_1.browser.open('https://google.com/ncr');
        await base_1.browser.element(selenidejs_1.by.name('q')).setValue('selenium').then(selenidejs_1.perform.pressEnter);
        await base_1.browser.all('#ires .g').should(selenidejs_1.have.size(14))
            .then(selenidejs_1.find.first)
            .then(selenidejs_1.should.match(selenidejs_1.have.text('Selenium automates browsers')))
            .then(selenidejs_1.find.element('.r>a'))
            .then(selenidejs_1.perform.click);
        await base_1.browser.should(selenidejs_1.have.title('Selenium - Web Browser Automation'));
    });
    /* OR:

    it('should search', async () => {
        await browser.open('/ncr');

        const query = browser.element(by.name('q'));
        await query.setValue('selenium');
        await query.pressEnter();

        const results = browser.all('.srg .g');
        await results.should(have.size(10));
        await results.first.should(have.text('Selenium automates browsers'));
        await results.first.element('.r>a').click();

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });

    */
});
