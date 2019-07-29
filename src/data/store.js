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
        let productList = store.get('productsList');
        console.log(productList);
        if(!productList) {
            store.save('productsList', products);
            productList = products;
        }
        return productList;
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
    getProducts(arrayList, code) {
        for(let i = 0; i < arrayList.length; i++) {
            const product = arrayList[i];
            if(arrayList.code === code) {
                return product;
            }
        }
        return null;
    },
    addProduct(product) {
        const products = store.pullFromProducts();
        products.push(product);
        store.save('productsList', products); 
    }
};  






export default store;