import TemplateEngine from '../js/templateEngine.js';
const templateEngine = new TemplateEngine();

describe('Template engine:', function () {
    it('should render view', function () {
        document.body.innerHTML = `<main></main>`;
        templateEngine.render(`our view`);
        expect(document.body.innerHTML).toEqual(`<main>our view</main>`);
    });
});