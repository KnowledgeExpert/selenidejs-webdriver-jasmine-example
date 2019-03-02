"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenidejs_1 = require("selenidejs");
class TodoMvc {
    constructor(browser) {
        this.browser = browser;
        this.tasks = this.browser.all('#todo-list>li');
        this.browser = browser;
    }
    async open() {
        await this.browser.open('/');
    }
    async add(...taskTexts) {
        for (const text of taskTexts) {
            await this.browser.element('#new-todo')
                .type(text)
                .then(selenidejs_1.perform.pressEnter);
        }
    }
    async assertTexts(...taskTexts) {
        await this.tasks.filteredBy(selenidejs_1.be.visible).should(selenidejs_1.have.exactTexts(...taskTexts));
    }
    async filterActive() {
        await this.browser.element(selenidejs_1.by.linkText('Active')).click();
    }
    async filterCompleted() {
        await this.browser.element(selenidejs_1.by.linkText('Completed')).click();
    }
    async filterAll() {
        await this.browser.element(selenidejs_1.by.linkText('All')).click();
    }
    async toggle(taskText) {
        await this.tasks.elementBy(selenidejs_1.have.exactText(taskText)).element('.toggle').click();
    }
}
exports.TodoMvc = TodoMvc;
