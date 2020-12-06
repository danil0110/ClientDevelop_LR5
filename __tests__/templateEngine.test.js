import { TestScheduler } from "jest";
import TemplateEngine from '../js/templateEngine.js';

const templateEngine = new TemplateEngine();

describe('Template engine:', () => {
    test('should render view', () => {
        document.body.innerHTML = `<main></main>`;
        templateEngine.render(`our view`);
        expect(document.body.innerHTML).toEqual(`<main>our view</main>`);
    });
});