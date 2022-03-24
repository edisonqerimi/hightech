const addToCart = (productId) => {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user == null) {
        location.href = './login.html';
    }
    else {
        let carts = JSON.parse(sessionStorage.getItem('carts'));
        let product = JSON.parse(sessionStorage.getItem('products')).find(p => p.id === productId);
        var id = 1;
        if (carts.length > 0) {
            id = Math.max.apply(Math, carts.map((user => user.id))) + 1;
        }
        carts.push({
            id: id,
            userId: user.id,
            productId: productId,
        })
        sessionStorage.setItem('carts', JSON.stringify(carts));
        document.querySelector('.added-cart').innerHTML = `${product.brand} ${product.model} added to cart`;
        document.querySelector('.added-cart').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.added-cart').classList.add('hidden');
        }, 1500)
    }
}