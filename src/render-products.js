import { getProducts } from './register.js';
import { lineTotes } from './register.js';

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

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = product.code;
    p.appendChild(button); 

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
    let apple = getProducts(objects, cart.code);
 
    const outValue = lineTotes(apple.price, cart.quantity);
    total.textContent = outValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(total);
    

    return tr;
}
