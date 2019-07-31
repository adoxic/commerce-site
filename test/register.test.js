import products from '../src/data/products.js';
import { lineTotes } from '../src/register.js';
import makesTotal from '../src/register.js';
import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('register');

test('find product', assert => {
    // arrange
    const code = 'Bath Bomb Orange';
    const expected = {
        code: 'Bath Bomb Orange',
        name: 'Marmalade',
        image: 'assets/bathbomb-orange.jpg',
        description: 'Lovely citirus sent, orange color',
        category: 'bath bomb',
        price: 6.00,
        cost: 0.25,
    };
    // act
    const foundProduct = store.getProducts(products, code);
    // assert
    assert.deepEqual(foundProduct, expected);
});

test('does math work?', assert => {
    // arrange
    const price = 1.05;
    const quantity = 4;
    const expected = 4.20;
    // act
    const foundProduct = lineTotes(price, quantity);
    // assert
    assert.equal(foundProduct, expected);
}); 



test('does loop work', assert => {
    // arrange
    const cart = [{
        code: 'Bath Bomb Pink',
        quantity: 2,
    }, {
        code: 'Bath Bomb Orange',
        quantity: 6,
    }];
    
    const expected = 48.00;
    // act
    const foundProduct = makesTotal(cart, products);
    // assert
    assert.equal(foundProduct, expected);
}); 