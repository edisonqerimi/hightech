let marginBottom = 0;
const addToCart = (productId) => {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user == null) {
        location.href = './login.html';
    }
    else {
        let carts = JSON.parse(sessionStorage.getItem('carts'));
        let product = JSON.parse(sessionStorage.getItem('products')).find(p => p.id === productId);
        let cartIndex = carts.findIndex(c => c.productId === productId);
        if (carts.some(c => c.productId == productId)) {
            carts[cartIndex].amount += 1;
        } 
        else {
            carts.push({
                amount: 1,
                userId: user.id,
                productId: productId,
            })
        }

        sessionStorage.setItem('carts', JSON.stringify(carts));
        const addedCarts = document.querySelector('.added-carts');
        const addedCart = document.createElement('div');
        addedCart.classList.add('added-cart');
        addedCart.innerHTML = `${product.brand} ${product.model} added to cart`;
        addedCarts.prepend(addedCart);
        setTimeout(() => {
            addedCarts.removeChild(addedCarts.lastElementChild);
        }, 3000)
    }
}