import { bindProducts } from "./products.js";
const params = new window.URLSearchParams(window.location.search);

const filterBy = params.get('filter-by');
const filterValue = params.get('filter-value');
const sort = params.get('sort');


if (sort != null) {
    document.querySelector('#sort').value = sort;
}

const productsElement = document.querySelector('#products');


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
        document.querySelector('.filter-body').appendChild(filterElement)
        const filterItems = filterElement.querySelector('.filter-items');
        products.map(prod => prod[item]).filter((value, index, self) => {
            if (self.indexOf(value) === index) {
                const filterItem = document.createElement('div');
                filterItem.classList.add('filter-item');
                filterItem.innerHTML = `
                    <label class='filter-item-name' for='check-${value}'>${value}</label>
                    <input onclick='this.form.submit()' type='checkbox' id='check-${value}' class='filter-check' value='${value}' name='filter-value' />
                `;
                filterItems.appendChild(filterItem);
            }
        }
        )
    });
}

window.onload = () => {

    let products = JSON.parse(sessionStorage.getItem('products'));
    const path = location.pathname.split('.html')[0].split('/').pop();
    switch (path) {
        case 'smartphone':
            products = products.filter(p => p.category === 'smartphone');
            break;
        case 'desktops':
            products = products.filter(p => p.category === 'desktop');
            break;
        case 'accessories':
            products = products.filter(p => p.category === 'accessory');
            break;
        case 'laptop':
            products = products.filter(p => p.category === 'laptop');
            break;
        default:
            break;
    }
    bindFiltering(products, ['brand', 'color']);

    let filteredProducts = products.filter((p) => p[filterBy] == filterValue);

    switch (sort) {
        case 'az':
            filteredProducts = filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
        case 'za':
            filteredProducts = filteredProducts.sort((a, b) => b.brand.localeCompare(a.brand));
            break;
        case 'to-lowest':
            filteredProducts = filteredProducts.sort((a, b) => {
                let aPrice = a.price;
                let bPrice = b.price;
                if (a.discount.isDiscount) {
                    aPrice = a.discount.priceDiscount;
                }
                if (b.discount.isDiscount) {
                    bPrice = b.discount.priceDiscount;
                }
                return bPrice - aPrice;
            });
            break;
        case 'to-highest':
            filteredProducts = filteredProducts.sort((a, b) => {
                let aPrice = a.price;
                let bPrice = b.price;
                if (a.discount.isDiscount) {
                    aPrice = a.discount.priceDiscount;
                }
                if (b.discount.isDiscount) {
                    bPrice = b.discount.priceDiscount;
                }
                return aPrice - bPrice;
            });
            break;
        default:
            document.querySelector('#sort').value = 'relevant';
            break;
    }
    bindProducts(filteredProducts, productsElement);

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
    const prices = filteredProducts.map(p => p.discount.isDiscount ? p.discount.priceDiscount : p.price);

    const maxPrice = Math.max.apply(Math, prices);
    const minPrice = Math.min.apply(Math, prices);

    const filterBody = document.querySelector('.filter-body');
    const filterIcon = document.querySelector('.filter-icon');
    window.onresize = () => {

        if (window.innerWidth > 800) {
            filterBody.classList.remove('hidden');
            filterIcon.classList.remove('rotate')
        }
        else {
            filterBody.classList.add('hidden');
        }
    }
    if (window.innerWidth < 800) {
        filterBody.classList.add('hidden');
    }

    document.querySelector('.filter-head').onclick = () => {
        if (window.innerWidth < 800) {
            filterBody.classList.toggle('hidden');
        }
        filterIcon.classList.toggle('rotate');
    }

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
        const newProducts = filteredProducts.filter(p => p.discount.isDiscount ? p.discount.priceDiscount <= max : p.price <= max);
        productsElement.innerHTML = '';
        bindProducts(newProducts, productsElement);
    }

}
