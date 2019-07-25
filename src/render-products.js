import { lineTotes } from './register.js';
import store from './data/store.js';

export default function rendersProducts(product) {
    const li = document.createElement('li');
    li.className = product.category;
    li.title = product.description;
   
    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.code + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    li.appendChild(p);

    const usd = product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = product.code;
    addButton.addEventListener('click', () => {
        store.placeProductInCart(product.code);
    });
    p.appendChild(addButton); 

    return li;
}

export function rendersCart(cart, objects) {
    const tr = document.createElement('tr');
    
    const prodName = document.createElement('td');
    prodName.textContent = cart.code;
    tr.appendChild(prodName);
    
    const quantity = document.createElement('td');
    quantity.textContent = cart.quantity;
    tr.appendChild(quantity);
    
    const total = document.createElement('td');
    let apple = store.getProducts(objects, cart.code);
 
    const outValue = lineTotes(apple.price, cart.quantity);
    total.textContent = outValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(total);
    

    return tr;
}
