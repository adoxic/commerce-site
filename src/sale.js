import products from './data/products.js';
import rendersProducts from './render-products.js';

const list = document.getElementById('product');
const showAll = document.getElementById('all');
const bathBomb = document.getElementById('bath-bomb');
const soap = document.getElementById('soap');
const sets = document.getElementById('soap sets');
const stuff = document.getElementsByClassName('bath bomb');


for(let i = 0; i < products.length; i++) {
    const banana = products[i];
    const dom = rendersProducts(banana);
    list.appendChild(dom);
    dom.classList.add('hidden');
}

showAll.addEventListener('click', () => {
    
    stuff.classList.remove('hidden');
});