import order from './order.js';
import { rendersCart } from './render-products.js';
// import makesTotal from './register.js';
import { lineTotes, getProducts } from './register.js';
import products from './data/products.js';

const tableLocation = document.getElementById('cart-table');

function thingy(cart) {
    for(let i = 0; i < cart.length; i++) {
        const element = cart[i].code;
        const cartTableData = rendersCart(element, products);
        console.log(cartTableData);
    }
}

const why = thingy(order);



