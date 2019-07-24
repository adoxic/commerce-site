
export function getProducts(products, code) {
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        if(product.code === code) {
            return product;
        }
    }
    return null;
} 

export function lineTotes(thing, num) {
    return Number((thing * num).toFixed(2));
}


export default function makesTotal(cart, products) {
    let total = 0;
        
    for(let i = 0; i < cart.length; i++) {
        const element = cart[i].code;
        const howMany = cart[i].quantity;
        const object = getProducts(products, element);
        let newTotal = lineTotes(object.price, howMany);
        total += newTotal;
    }
    
    return total;
} 
