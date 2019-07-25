import products from './products.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    pullFromProducts() {
        let returnedProducts = store.get(products);
        if(!returnedProducts) {
            store.save('productsList', products);
            returnedProducts = products;
        }
        return products;

    },
    pullShoppingCart() {
        let shoppingCart = store.get('shopping-key');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    placeProductInCart(code) {
        const shopping = store.pullShoppingCart();
        let checkIfInCartMakingObjet = store.getProducts(shopping, code);
        
        if(checkIfInCartMakingObjet) {
            
            checkIfInCartMakingObjet.quantity++;
        } else {
            const checkIfInCartMakingObjet = {
                code: code,
                quantity: 1
            };
            shopping.push(checkIfInCartMakingObjet);
        }

        store.save('shopping-key', shopping);
    },
    getItem(code) {
        let returned = store.pullFromProducts();
        let objectFromProductArray = store.getProducts(returned, code); 
        store.save('object-key', objectFromProductArray);
        return objectFromProductArray;
    },
    getProducts(products, code) {
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            if(product.code === code) {
                return product;
            }
        }
        return null;
    } 
};  






export default store;