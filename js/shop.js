
import { products } from './products.js'

var productsElement = document.querySelector('#products')

if (sessionStorage.getItem('products') === null) {
    sessionStorage.setItem('products', JSON.stringify(products));
}

let sessionProducts = JSON.parse(sessionStorage.getItem('products'));

const getProducts = (products) => {
    if (products.length > 0) {
        products.map(s => {
            var product = document.createElement('div');
            product.innerHTML = `
        <div class="product">
        <div style="background-image: url('${s.img}');" class="product-image"></div>
        <div class="product-body">
            <div class="product-title">${s.brand} ${s.model}</div>
            <div class="product-price">
                <div class='${s.discount.isDiscount ? "discount" : ''}'>${s.price.toFixed(2)} &euro;</div>
                ${s.discount.isDiscount ?
                    `<div class="discount-price">${s.discount.priceDiscount.toFixed(2)} &euro;</div>` : ''
                }    
            </div>
            <div class="product-buttons">
                <a href='/details.html?product-id=${s.id}' class="btn btn-info">More info</a>
                <div class="btn btn-primary">Add to cart</div>
            </div>
        </div>
        `;
            productsElement.appendChild(product);
        })
    }
    else{
        productsElement.innerHTML = '<div>No products found</div>';
    }
}


window.onload = () => {

    var path = location.pathname.split('.html')[0];
    switch (path) {
        case '/shop':
            getProducts(sessionProducts);
            break;
        case '/smartphone':
            getProducts(sessionProducts.filter(p => p.category === 'smartphone'));
            break;
        case '/desktops':
            getProducts(sessionProducts.filter(p => p.category === 'desktop'));
            break;
        case '/accessories':
            getProducts(sessionProducts.filter(p => p.category === 'accessory'));
            break;
        case '/laptop':
            getProducts(sessionProducts.filter(p => p.category === 'laptop'));
            break;
        default:
            break;
    }
}

