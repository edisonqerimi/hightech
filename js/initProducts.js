import { products } from './products.js'

if (sessionStorage.getItem('products') === null) {
    sessionStorage.setItem('products', JSON.stringify(products));
}
