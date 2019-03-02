import { be, Browser, have, perform, by } from 'selenidejs';

export class TodoMvc {

    constructor(private readonly browser: Browser) {
        this.browser = browser;
    }
    
    tasks = this.browser.all('#todo-list>li');

    async open() {
        await this.browser.open('/');
    }

    async add(...taskTexts: string[]) {
        for (const text of taskTexts) {
            await this.browser.element('#new-todo')
                .type(text)
                .then(perform.pressEnter);
        }
    }

    async assertTexts(...taskTexts: string[]) {
        await this.tasks.filteredBy(be.visible).should(have.exactTexts(...taskTexts));
    }

    async filterActive() {
        await this.browser.element(by.linkText('Active')).click();
    }

    async filterCompleted() {
        await this.browser.element(by.linkText('Completed')).click();
    }

    async filterAll() {
        await this.browser.element(by.linkText('All')).click();
    }

    async toggle(taskText: string) {
        await this.tasks.elementBy(have.exactText(taskText)).element('.toggle').click();
    }
}