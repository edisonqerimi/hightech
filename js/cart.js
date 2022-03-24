const user = JSON.parse(sessionStorage.getItem('currentUser'));
if (user == null) {
    window.location = './login.html';
}




const divTable = document.querySelector('#table')
const fetchCarts = () => {
    let carts = JSON.parse(sessionStorage.getItem('carts'));
    let products = JSON.parse(sessionStorage.getItem('products'));
    carts = carts.filter(c => c.userId === user.id)
    if (carts.length > 0) {
        divTable.innerHTML = `
      <table class='tbl'>
        <tr class='table-head'>
          <th>User Id</th>
          <th>Username</th>
          <th>Product Id</th>
          <th>Product</th>
          <th style = "background:'transparent';"></th>
        </tr>
      </table>
      `
        carts.map(cart => {
            const row = divTable.querySelector('table').insertRow();
            let product = products.find(p => p.id === cart.productId)
            row.classList.add('table')

            row.innerHTML = `
        <td>${cart.userId}</td>
        <td>${user.username}</td>
        <td>${cart.productId}</td>
        <td>${product.brand} ${product.model}</td>
        <td><button onclick="handleDelete(${cart.id})" class="btn">delete</button></td>
      `
        }
        );
    }
    else {
        divTable.innerHTML = '<div class="valid">No products in your cart found!</div>';
    }
}

const handleDelete = (id) => {
    let carts = JSON.parse(sessionStorage.getItem('carts'));
    carts = carts.filter(cart => cart.id !== id)
    sessionStorage.setItem('carts', JSON.stringify(carts));
    fetchCarts()
}

window.onload = () => {
    fetchCarts();
}