import * as main from '../js/main';

describe('Main:', () => {
    it('should display loading circle', function () {
        document.body.innerHTML = `<main></main>`;
        const result =
            `<main>
    <div class="mt-4 pt-4">
                <div class="loading-spinner"></div>
    </div>
    </main>`;
        main.displayLoadingSpinner();
        expect(document.body.innerHTML).toEqual(result);
    });
});