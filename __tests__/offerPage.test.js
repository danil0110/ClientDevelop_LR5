import view from '../js/views/offerPage.js';

let result, db, expectation;

describe('Offer page view', () => {
    it('should return offer view', function () {
        db = {
            offers: [
                {
                    id: 1,
                    name: 'offer-name',
                    slogan: 'offer-slogan',
                    description: 'offer-desc',
                    img: 'offer-img'
                }
            ]
        };

        expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold mb-5">offer-slogan</h2>
                <img class="w-100 mb-4 rounded shadow" src="offer-img" draggable="false" alt="offer-name" />
                <h2 class="text-center text-dark font-weight-bold mb-4">offer-name</h2>
                <p class="text-center">offer-desc</p>
            </div>
        `;

        result = view(db, 1);
        expect(result).toEqual(expectation);
    });
});