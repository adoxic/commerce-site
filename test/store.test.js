import store from '../src/data/store.js';
import products from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Are things being stored?');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});


test('sent and received test', assert => {
    const key = 'puppy';
    const puppy = { name: 'Greg' };

    store.save(key, puppy);
    const returnedObject = store.get(key);
    const expected = puppy;
    
    assert.deepEqual(returnedObject, expected);
});    

test('sending an array and bootstrap', assert => {
    
    const returnedArray = store.pullFromProducts();
    const expected = products;
    
    assert.equal(returnedArray, expected);
});  

test('check that array is empty', assert => {
    

    const returnedObject = store.pullShoppingCart();
    const expected = [];
    
    assert.deepEqual(returnedObject, expected);
}); 

test('put a thing in the shopping cart array', assert => {
    

    const code = 'Bath Bomb Pink';
    
    const expected = [{
        code: 'Bath Bomb Pink',
        quantity: 1,
    }];
    
    store.placeProductInCart(code);
    const shoppingCart = store.pullShoppingCart();

    assert.deepEqual(shoppingCart, expected);
}); 

test('put a thing more than one thing in the shopping cart array', assert => {
    

    const code = 'Bath Bomb Pink';
    
    const expected = [{
        code: 'Bath Bomb Pink',
        quantity: 2,
    }];
    
    store.save('shopping-key', [{
        code: 'Bath Bomb Pink',
        quantity: 1,
    }]);
    store.placeProductInCart(code);
    const shoppingCart = store.pullShoppingCart();

    assert.deepEqual(shoppingCart, expected);
}); 


test('get an object form the array', assert => {
    

    const code = 'Bath Bomb Pink';
    
    const expected = 
        {
            code: 'Bath Bomb Pink',
            name: 'Rose Cake',
            image: 'assets/bathbomb-pink.jpg',
            description: 'Lovely floral sent, pink color',
            category: 'bath bomb',
            price: 6.00,
            cost: 0.25,
        };
    
    
    
    const shoppingCart = store.getItem(code);

    assert.deepEqual(shoppingCart, expected);
}); 

test('add new product from form', assert => {


    const expected = {
        code: 'Bath Bomb Gold',
        name: 'Gold Bomb',
        image: 'assets/bathbomb-gold.jpg',
        description: 'Lovely amber, with gold',
        category: 'bath bomb',
        price: 6.00,
        cost: 0.25,
    };

    store.pullFromProducts();

    store.addProduct(expected);

    const lastItem = store.get('productsList');

    const shoppingCart = store.getItem('Bath Bomb Gold');
    const addedObject = lastItem.slice(-1);

    assert.deepEqual(shoppingCart, expected);
    assert.deepEqual(addedObject[0], expected);
});