import rendersProducts from '../src/render-products.js';

const test = QUnit.test;

QUnit.module('Render Products');

test('renders a product', assert => {
    // arrange
    const bathBombPink = {
        code: 'Bath Bomb Pink',
        name: 'Rose Cake',
        image: 'assets/bathbomb-pink.jpg',
        description: 'Lovely floral sent, pink color',
        category: 'bath bomb',
        price: 6.00,
        cost: 0.25,
    };

    const expected = '<li class="bath bomb" title="Lovely floral sent, pink color"><h3>Rose Cake</h3><img src="assets/bathbomb-pink.jpg" alt="Bath Bomb Pink image"><p class="price">$6.00<button value="Bath Bomb Pink">Add</button></p></li>';
    
    // act
    const dom = rendersProducts(bathBombPink);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});    