import view from '../js/views/orderCompletePage.js';

let result, db;

let expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Дякуємо! :)</h2>
                <h3 class="text-center text-dark font-weight-bold">Ваше замовлення №123</h3>
                <div class="d-flex justify-content-center row mt-5">
                    <div class="complete-order">
                        <ul class="list-group">
    
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">product-name</span>
                                    <span>5 грн.</span>
                                </div>
                                <span class="badge badge-warning badge-pill">x1</span>
                            </li>
                        
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="text-dark font-weight-bold">Сума</span>
                                    <span>5 грн.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

db = {
    products: [
        {
            id: 3,
            name: 'product-name',
            price: 3
        },
        {
            id: 1,
            name: 'product-name',
            price: 5
        }
    ]
};

window.location.hash = '#order/123';

describe('Order complete page', () => {
    it('should return order complete page view (with span)', function () {
        localStorage.setItem('cart', JSON.stringify([{ id: 1, count: 1 }]));

        let span = document.createElement('span');
        span.id = 'cartQuantity';
        document.body.append(span);

        result = view(db);
        expect(result).toEqual(expectation);
    });

    it('should return order complete page view (without span)', function () {
        localStorage.setItem('cart', JSON.stringify([{ id: 1, count: 1 }]));

        result = view(db);
        expect(result).toEqual(expectation);
    });
});