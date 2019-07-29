import rendersProducts from './render-products.js';
import store from './data/store.js';

const list = document.getElementById('product');
const showAll = document.getElementById('all');
const bathBomb = document.getElementById('bath-bomb');
const soap = document.getElementById('soap');
const sets = document.getElementById('sets');

const localData = store.pullFromProducts();




showAll.addEventListener('click', () => {
    clearPage();
    renderAll();  
});


soap.addEventListener('click', () => {  
    clearPage();
    ifCategoryRender('soap');  
});



bathBomb.addEventListener('click', () => {   
    clearPage();
    ifCategoryRender('bath bomb');
});

sets.addEventListener('click', () => {  
    clearPage();

    ifCategoryRender('soap sets'); 
});

function clearPage() {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function renderAll() {
    for(let i = 0; i < localData.length; i++) {
        const objectFromData = localData[i];
        const dom = rendersProducts(objectFromData);
        list.appendChild(dom);
    }
}

function ifCategoryRender(type) {
    for(let i = 0; i < localData.length; i++) {
        const localProduct = localData[i];
       
        if(localProduct.category === type) {
            const dom = rendersProducts(localProduct);
            list.appendChild(dom);
        }
        
    }
}