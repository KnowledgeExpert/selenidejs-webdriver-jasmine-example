import { TodoMvc } from './pages/todomvc';
import { browser } from '../base';

describe('TodoMvc', () => {

    it('filters tasks', async () => {
        const todos = new TodoMvc(browser.with({baseUrl: 'http://todomvc.com/examples/emberjs'}));

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
