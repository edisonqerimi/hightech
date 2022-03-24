const addToCart = (productId) => {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    let carts = JSON.parse(sessionStorage.getItem('carts'));
    carts.push({
        userId: user.id,
        productId: productId,
    })
    sessionStorage.setItem('carts', JSON.stringify(carts));
}