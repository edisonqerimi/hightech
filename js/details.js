
let params = new window.URLSearchParams(window.location.search);
let id =  params.get('product-id')

let products = JSON.parse(sessionStorage.getItem('products'));

console.log(id)
console.log(products)

let product = products.find(p=>p.id == id);

console.log(product)

document.getElementById('details').innerHTML = `
<div style="background-image:url('${product.img}')" class="d-photo">
    
</div>
<div class="main-details">
    <div class="product-title">${product.brand} ${product.model}</div>
    <div class="product-price">
        <div class='${product.discount.isDiscount ? "discount" : ''}'>${product.price.toFixed(2)} &euro;</div>
        ${product.discount.isDiscount ?
        `<div class="discount-price">${product.discount.priceDiscount.toFixed(2)} &euro;</div>` : ''
    }    
    </div>

</div>
<div class="more-details">
    <div class="product-buttons">
    <a href='/shop.html' class="btn btn-info">Back to shop</a>
    <div class="btn btn-primary">Add to cart</div>
    </div>
</div>
`