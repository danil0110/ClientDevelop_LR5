import view from '../js/views/categoryPage.js';

let result, db, expectation;

describe('Single category page', () => {
    it('should return single category view', function () {
        db = {
            products: [
                {
                    id: 1,
                    name: 'product-name',
                    img: 'product-img',
                    categoryId: 1
                },
                {
                    id: 2,
                    name: 'product-name',
                    img: 'product-img',
                    categoryId: 4
                }
            ],
            categories: [
                {
                    id: 1,
                    name: 'category-name'
                }
            ]
        };

        expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Категорія "category-name"</h2>
                <div class="row">
    
                    <div class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#product/1">
                                <img src="product-img" class="card-img-top" alt="product-name">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">product-name</h4>
                                </div>
                            </a>
                        </div>
                    </div>
        
                </div>
            </div>
        `;

        result = view(db, 1);
        expect(result).toEqual(expectation);
    });
});