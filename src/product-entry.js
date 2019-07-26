import store from './data/store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
   
    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('image'),
        category: formData.get('category'),
        price: +formData.get('price'),
        cost: +formData.get('cost'),
        description: formData.get('description')
    };
    
    store.addProduct(product);
    
    alert('product saved!');

    form.reset();

    
});