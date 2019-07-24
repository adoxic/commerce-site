import order from './order.js';
import { rendersCart } from './render-products.js';
import makesTotal from './register.js';
import products from './data/products.js';

const tableLocation = document.getElementById('cart-table');
const totalLocation = document.getElementById('total');

function placeDataInTable(cart) {
    for(let i = 0; i < cart.length; i++) {
        const element = cart[i];
        const cartTableData = rendersCart(element, products);
        tableLocation.appendChild(cartTableData);
    }
}

function placeTotalInTable(order, products) {
    const total = makesTotal(order, products);
    const makeTd = document.createElement('td');
    makeTd.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    totalLocation.appendChild(makeTd);
}
placeTotalInTable(order, products);
placeDataInTable(order);



