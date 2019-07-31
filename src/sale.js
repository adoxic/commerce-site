import rendersProducts from './render-products.js';
import store from './data/store.js';

const list = document.getElementById('product');
const showAll = document.getElementById('all');
const bathBomb = document.getElementById('bath-bomb');
const soap = document.getElementById('soap');
const sets = document.getElementById('sets');

const localData = store.pullFromProducts();

showAll.addEventListener('click', () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
      
    for(let i = 0; i < localData.length; i++) {
        const objectFromData = localData[i];
        const dom = rendersProducts(objectFromData);
        list.appendChild(dom);     
        
    }  
});


soap.addEventListener('click', () => {  
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const category = 'soap';
    newFunction(category);  
});



bathBomb.addEventListener('click', () => {   
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for(let i = 0; i < localData.length; i++) {
        const localObject = localData[i];
        if(localObject.category === 'bath bomb') {
            const dom = rendersProducts(localObject);
            list.appendChild(dom);    
        }
        
    }  
});

sets.addEventListener('click', () => {  
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for(let i = 0; i < localData.length; i++) {
        const localObject = localData[i];
        if(localObject.category === 'soap set') {
            const dom = rendersProducts(localObject);
            list.appendChild(dom);    
        }
        
    }  
});

function newFunction(category) {
    for(let i = 0; i < localData.length; i++) {
        const localObject = localData[i];
        if(localObject.category === category) {
            const dom = rendersProducts(localObject);
            list.appendChild(dom);
        }
    }
}
