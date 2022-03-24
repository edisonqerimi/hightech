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
        <td><button onclick="handleDelete(${cart.productId})" class="btn">delete</button></td>
      `
        }
        );
    }
    else {
        divTable.innerHTML = '<div class="valid">No products in your cart found!</div>';
    }
}
const deleteModal = document.querySelector('#deleteModal')
const handleDelete = (id) => {
    let carts = JSON.parse(sessionStorage.getItem('carts'));
    let products = JSON.parse(sessionStorage.getItem('products'));
    deleteModal.classList.remove('hidden');
    const product = products.find(p => p.id == id);
    document.querySelector('.deleteTitle').innerHTML = `${product.brand} ${product.model}`;
    validDelete.innerHTML = ''
    document.querySelector('#deleteUser').onclick = () => {
        carts = carts.filter(cart => cart.productId !== id)
        sessionStorage.setItem('carts', JSON.stringify(carts));
        fetchCarts()
        deleteModal.classList.add('hidden');
    }
}

window.onload = () => {
    fetchCarts();
    document.querySelector('#hideDelete').onclick = () => {
        deleteModal.classList.add('hidden');
    }

}