import products from './data/products.js';
import rendersProducts from './render-products.js';

const list = document.getElementById('product');
const showAll = document.getElementById('all');
const bathBomb = document.getElementById('bath-bomb');
const soap = document.getElementById('soap');
const sets = document.getElementById('sets');


showAll.addEventListener('click', () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
      
    for(let i = 0; i < products.length; i++) {
        const banana = products[i];
        const dom = rendersProducts(banana);
        list.appendChild(dom);     
        
    }  
});

soap.addEventListener('click', () => {  
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    } 
    for(let i = 0; i < products.length; i++) {
        const banana = products[i];
        if(banana.category === 'soap') {
            const dom = rendersProducts(banana);
            list.appendChild(dom);    
        }
        
    }  
});

bathBomb.addEventListener('click', () => {   
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for(let i = 0; i < products.length; i++) {
        const banana = products[i];
        if(banana.category === 'bath bomb') {
            const dom = rendersProducts(banana);
            list.appendChild(dom);    
        }
        
    }  
});

sets.addEventListener('click', () => {  
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for(let i = 0; i < products.length; i++) {
        const banana = products[i];
        if(banana.category === 'soap set') {
            const dom = rendersProducts(banana);
            list.appendChild(dom);    
        }
        
    }  
});