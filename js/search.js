import { bindProducts } from "./products.js";
const params = new window.URLSearchParams(window.location.search);
const search = params.get('search')
const productsElement = document.querySelector('#products');
const searching = document.querySelector('#search-Param');


window.onload = () => {
    let products = JSON.parse(sessionStorage.getItem('products'));
    searching.innerHTML = search;
    bindProducts(products.filter(p => p.model.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())), productsElement)
}