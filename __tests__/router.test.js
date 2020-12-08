import Router from '../js/router.js';
const router = new Router();

describe('Router:', function () {
    let db, viewName, categoryId, productId, offerId, hash;

    beforeEach(() => {
        viewName = 'homePage';
        categoryId = 0;
        productId = 0;
        offerId = 0;
        db = {};
    });

    it('should return object', function () {
        hash = ['', 'hash'];
        expect(router.findCorrectView(hash, db)).toBeInstanceOf(Object);
    });

    it('should return home page on wrong hash', function () {
        hash = ['', 'lalala'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'homePage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return home page on wrong hash', function () {
        hash = ['', 'lalala'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'homePage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return offer page', function () {
        hash = ['', 'offer', '2'];
        db = {
            offers: [
                {},
                {},
                {}
            ]
        }
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'offerPage',
            categoryId: 0,
            productId: 0,
            offerId: '2'
        })
    });

    it('should return categories page', function () {
        hash = ['', 'categories'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'categoriesPage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return single category page', function () {
        hash = ['', 'category', '2'];
        db = {
            categories: [
                {},
                {},
                {}
            ]
        }
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'categoryPage',
            categoryId: '2',
            productId: 0,
            offerId: 0
        })
    });

    it('should return product page', function () {
        hash = ['', 'product', '2'];
        db = {
            products: [
                {},
                {},
                {}
            ]
        }
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'productPage',
            categoryId: 0,
            productId: '2',
            offerId: 0
        })
    });

    it('should return cart page', function () {
        hash = ['', 'cart'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'cartPage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return complete order page', function () {
        hash = ['', 'order', '424'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'orderCompletePage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return order page', function () {
        hash = ['', 'order'];
        expect(router.findCorrectView(hash, db)).toEqual({
            viewName: 'orderPage',
            categoryId: 0,
            productId: 0,
            offerId: 0
        })
    });

    it('should return object', function () {
        expect(router.getCurrentPath(db)).toBeInstanceOf(Object);
    });

});