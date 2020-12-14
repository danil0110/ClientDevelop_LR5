import view from '../js/views/categoriesPage.js';

let result, db;

describe('Categories view', () => {
    it('should return categories view', function () {
        let db = {
            categories: [
                {
                    id: 1,
                    name: 'category-name',
                    productIds: [1]
                }
            ],
            products: [
                {
                    id: 1,
                    name: 'product-name',
                    img: 'source/img'
                }
            ]
        };
        result = view(db);
        let expectation = `
            <div class="mt-4 pt-4">
                <h2 class="text-center text-dark font-weight-bold">Категорії</h2>
                <div class="row">
                
                    <div class="col-lg-4 col-md-6">
                        <div class="card pt-2 mt-5 ml-auto mr-auto" style="width: 18rem;">
                            <a href="#category/1">
                                <img src="source/img" class="card-img-top" alt="product-name">
                                <div class="card-body">
                                    <h4 class="card-text text-center text-dark">category-name</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
        expect(result).toEqual(expectation);
    });
});