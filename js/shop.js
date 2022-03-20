
let params = new window.URLSearchParams(window.location.search);

let filterBy = params.get('filter-by');
let filterValue = params.get('filter-value');

let productsElement = document.querySelector('#products');


const bindProducts = (products) => {
    if (products.length > 0) {
        products.map(s => {
            var product = document.createElement('div');
            product.classList.add('product')
            product.innerHTML = `
            <div style="background-image: url('${s.img}');" class="product-image"></div>
            <div class="product-body">
                <div class="product-title">${s.brand} ${s.model}</div>
                <div class="product-price">
                ${s.discount.isDiscount ?
                    `<div class="discount-price">${s.discount.priceDiscount.toFixed(2)} &euro;</div>` : ''
                }   
                <div class='${s.discount.isDiscount ? "discount" : ''}'>${s.price.toFixed(2)} &euro;</div>
                </div>
                <div class="product-buttons">
                    <a href='/details.html?product-id=${s.id}' class="btn product-btn">More info</a>
                    <div class="btn btn-info product-btn">Add to cart</div>
                </div>
                `;
            productsElement.appendChild(product);
        })
    }
    else {
        productsElement.innerHTML = '<div>No products found</div>';
    }
}




const bindFiltering = (products, filterNames) => {

    filterNames.map(item => {
        var filterElement = document.createElement('div');
        filterElement.classList.add('filter')
        filterElement.innerHTML = `
        <div class="filter-header">
            <div class='filter-name'>${item}</div>
            <div>
                <svg class='plus' width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                        fill="currentColor" />
                </svg>
                <svg class='hidden minus' width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                        fill="currentColor" />
                </svg>
            </div>
        </div>
        <form class='filter-items hidden'>
            <input value=${item} name='filter-by' type='hidden'/>
        </form>
    `;
        document.querySelector('.product-filter').appendChild(filterElement)
        var filterItems = filterElement.querySelector('.filter-items');
        products.map(prod => prod[item]).filter((value, index, self) => {
            if (self.indexOf(value) === index) {
                var filterItem = document.createElement('div');
                var label = document.createElement('label');
                var input = document.createElement('input');
                filterItem.classList.add('filter-item');
                label.classList.add('filter-item-name');
                label.htmlFor = input.id = `check-${value}`;
                label.innerHTML = input.value = value;
                input.classList.add('filter-check');
                input.type = 'checkbox';
                input.name = 'filter-value';
                input.onclick = (e) => {
                    filterItems.submit();
                }
                filterItem.appendChild(label);
                filterItem.appendChild(input);
                filterItems.appendChild(filterItem);
            }
        }
        )

    });
}

window.onload = () => {

    let sessionProducts = JSON.parse(sessionStorage.getItem('products'));
    var path = location.pathname.split('.html')[0];
    let products = sessionProducts;
    switch (path) {
        case '/smartphone':
            products = products.filter(p => p.category === 'smartphone');
            break;
        case '/desktops':
            products = products.filter(p => p.category === 'desktop');
            break;
        case '/accessories':
            products = products.filter(p => p.category === 'accessory');
            break;
        case '/laptop':
            products = products.filter(p => p.category === 'laptop');
            break;
        default:
            break;
    }
    bindFiltering(products, ['brand', 'color']);
    bindProducts(products.filter((p) => p[filterBy] == filterValue));

    const filterHeader = document.querySelectorAll('.filter-header');
    const pluses = document.querySelectorAll('.plus');
    const minuses = document.querySelectorAll('.minus');
    const filterItems = document.querySelectorAll('.filter-items');
    const priceInput = document.querySelector('#price-Input')
    const outputPrice = document.querySelector('.output-price')
    const minOut = document.querySelector('.min-price')

    filterHeader.forEach((filter, i) => {
        filter.onclick = () => {
            pluses[i].classList.toggle('hidden');
            minuses[i].classList.toggle('hidden');
            filterItems[i].classList.toggle('hidden');
        }
    })
    var prices = products.map(p => p.discount.isDiscount ? p.discount.priceDiscount : p.price);

    const maxPrice = Math.max.apply(Math, prices);
    const minPrice = Math.min.apply(Math, prices);

    if (products.length > 0) {
        priceInput.min = minPrice;
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        minOut.innerHTML = `${minPrice} &euro;`;
        outputPrice.innerHTML = `${Math.round(priceInput.value)} &euro;`;
    }

    priceInput.oninput = (e) => {
        const max = parseInt(e.target.value) + 2;
        outputPrice.innerHTML = `${Math.round(e.target.value)} &euro;`;
        let newProducts = products.filter(p => p.discount.isDiscount ? p.discount.priceDiscount <= max : p.price <= max);
        productsElement.innerHTML = '';
        bindProducts(newProducts);
    }

}

