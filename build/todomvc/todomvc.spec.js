"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todomvc_1 = require("./pages/todomvc");
const base_1 = require("../base");
describe('TodoMvc', () => {
    it('filters tasks', async () => {
        const todos = new todomvc_1.TodoMvc(base_1.browser.with({ baseUrl: 'http://todomvc.com/examples/emberjs' }));
        await todos.open();
        await todos.add('a', 'b', 'c');
        await todos.assertTexts('a', 'b', 'c');
        await todos.toggle('b');
        await todos.filterActive();
        await todos.assertTexts('a', 'c');
        await todos.filterCompleted();
        await todos.assertTexts('b');
        await todos.filterAll();
        await todos.assertTexts('a', 'b', 'c');
    });
});
