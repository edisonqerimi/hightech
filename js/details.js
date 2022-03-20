
let params = new window.URLSearchParams(window.location.search);
let id = params.get('product-id')

let products = JSON.parse(sessionStorage.getItem('products'));

let product = products.find(p => p.id == id);


document.getElementById('details').innerHTML = `
<div style="background-image:url('${product.img}')" class="d-photo">
    
</div>
<div class="main-details">
    <div class="main-first">
        <div class="product-title">${product.brand} ${product.model}</div>
        <div class="product-price">
            ${product.discount.isDiscount ?
        `<div class="discount-price">${product.discount.priceDiscount.toFixed(2)} &euro;</div>` : ''
    }   
                <div class='${product.discount.isDiscount ? "discount" : ''}'>${product.price.toFixed(2)} &euro;</div>  
        </div>
    </div>
    <div class="product-buttons">
        <a href='/shop.html' class="btn btn-red">Back to shop</a>
        <div class="btn btn-info">Add to cart</div>
    </div>
    
</div>
<div class="more-details">
 <div class='more-title'>All details</div>
 <div class='more-body'>
 
 </div>
</div>
`;

const detail = (name,value) =>{
 return `<div class='detail'>
            <div class='detail-name'>${name}</div>
            <div class='detail-value'>${value}</div>
        </div>`
}

window.onload = () => {
    var moreBody = document.querySelector('.more-body');
    var details = product.productDetails;
    if(product.category=='smartphone'){
        moreBody.innerHTML = `
        ${detail('System on Chip',details.soC)}
        ${detail('Operating System',details.os)}
        ${detail('RAM',details.ram + 'GB')}
        ${detail('Battery',details.battery)}
        ${detail('Screen size',details.screenSize)}
        ${detail('Display',details.display)}
        ${detail('Storage',details.storage)}
        ${detail('Main Camera',details.mainCamera)}
        ${detail('Selfie Camera',details.selfieCamera)}
        `
    }
    if(product.category=='laptop'){
        moreBody.innerHTML = `
        ${detail('Processor',details.processor)}
        ${detail('Graphics',details.graphics)}
        ${detail('RAM',details.ram + 'GB')}
        ${detail('Screen size',details.screenSize)}
        ${detail('Display',details.display)}
        ${detail('Storage',details.storage)}
        `
    }
}