
const addToCart = (productId) => {
    if (currentUser == null) {
        location.href = './login.html';
    }
    else {
        let carts = JSON.parse(sessionStorage.getItem('carts'));
        let product = JSON.parse(sessionStorage.getItem('products')).find(p => p.id === productId);
        let cartIndex = carts.findIndex(c => c.productId === productId && c.userId === currentUser.id);
        if (carts.some(c => c.productId == productId && c.userId == currentUser.id)) {
            carts[cartIndex].amount += 1;
        }
        else {
            carts.push({
                amount: 1,
                userId: currentUser.id,
                productId: productId,
            })
        }
        console.log(carts)
        sessionStorage.setItem('carts', JSON.stringify(carts));
        const addedCarts = document.querySelector('.added-carts');
        const addedCart = document.createElement('div');
        addedCart.classList.add('added-cart');
        addedCart.innerHTML = `${product.brand} ${product.model} added to cart`;
        addedCarts.prepend(addedCart);
        cartCountEl.innerHTML = carts.filter(c => c.userId === currentUser.id).length;
        setTimeout(() => {
            addedCarts.removeChild(addedCarts.lastElementChild);
        }, 3000)
    }
}