import view from '../js/views/cartPage.js';

let result, db, expectation;

describe('Cart page view', () => {
    it('should return empty cart page view', function () {
        db = {
            products: []
        };

        localStorage.setItem('cart', JSON.stringify([]));

        expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Кошик</h2>
                <div class="row">
    
                </div>
            </div>
        `;
        result = view(db);
        expect(result).toEqual(expectation);
    });

    it('should return filled cart page view', function () {
        db = {
            products: [
                {
                    id: 6,
                    name: 'product-name',
                    img: 'product-img',
                    price: 7
                },
                {
                    id: 1,
                    name: 'product-name',
                    img: 'product-img',
                    price: 5
                }
            ]
        };

        localStorage.setItem('cart', JSON.stringify([{ id: 1, count: 1 }]));

        expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Кошик</h2>
                <div class="row">
    
                    <div id="card-1" class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/1">
                                <img src="product-img" class="card-img-top" alt="product-name">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">
                                        product-name<br>
                                        x<span id="quantity-1" class="text-dark text-center">1</span> =
                                        <span id="total-1" class="text-dark text-center pt-2">5</span> грн.
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div id="delete-1" class="delete-button btn btn-warning text-dark font-weight-bold d-block mt-2 ml-auto mr-auto">
                            Видалити
                        </div>
                    </div>
                
                </div>
            </div>
        `;

        result = view(db);
        expect(result).toEqual(expectation);
    });
});