

// const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if (currentUser != null) {
    if (currentUser.role !== 'admin') {
        window.location = './index.html'
    }
}
else {
    window.location = './index.html'
}

const divTable = document.querySelector('#table')
const validEdit = document.getElementById('validEdit')

const editModal = document.querySelector('#editModal')
const editSection = document.querySelector('#editSection')
const deleteModal = document.querySelector('#deleteModal')
const deleteSection = document.querySelector('#deleteSection')
const validDelete = document.querySelector('#validDelete')

let editedFirst = document.querySelector('#editedFirst')
let editedLast = document.querySelector('#editedLast')
let editedUsername = document.querySelector('#editedUsername')


const fetchUsers = () => {
    let users = JSON.parse(sessionStorage.getItem('users'));
    if (users.length > 0) {
        divTable.innerHTML = `
      <table class='tbl'>
        <tr class='table-head'>
          <th>Id</th>
          <th>Username</th>
          <th>Role</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th style = "background:'transparent';"></th>
          <th style = "background:'transparent';"></th>
        </tr>
      </table>
      `
        users.map(user => {
            const row = divTable.querySelector('table').insertRow();

            row.classList.add('table')

            row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.role}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td><button onclick="handleEdit(${user.id})" class="btn btn-info">edit</button></td>
        <td><button onclick="handleDelete(${user.id})" class="btn">delete</button></td>
      `
        }
        );
    }
    else {
        divTable.innerHTML = '<div class="valid">No users found!</div>';
    }
}

const handleEdit = (id) => {
    let users = JSON.parse(sessionStorage.getItem('users'));
    userIndex = users.findIndex((u => u.id == id));

    validEdit.innerHTML = ''
    editedFirst.value = users[userIndex].firstName;
    editedLast.value = users[userIndex].lastName;
    editedUsername.value = users[userIndex].username;
    editModal.classList.remove('hidden');
    editedFirst.focus();

    document.querySelector('#editTitle').innerHTML = `Edit user: ${users[userIndex].username}`
    document.querySelector('#editSection').onsubmit = (e) => {
        e.preventDefault();
        if (editedFirst.value.replace(' ', '') != '' &&
            editedFirst.value.replace(' ', '') != '' &&
            editedUsername.value.replace(' ', '') != '') {

            users[userIndex].firstName = editedFirst.value;
            users[userIndex].lastName = editedLast.value;
            users[userIndex].username = editedUsername.value;
            sessionStorage.setItem('users', JSON.stringify(users));
            editModal.classList.add('hidden')

            fetchUsers()
        }
        else {
            validEdit.innerHTML = 'Fields cannot be blank!'
        }
    }
}
const handleDelete = (id) => {
    deleteModal.classList.remove('hidden');
    let users = JSON.parse(sessionStorage.getItem('users'));
    const user = users.find(u => u.id == id);
    document.querySelector('.deleteTitle').innerHTML = user.username;
    validDelete.innerHTML = ''
    document.querySelector('#deleteUser').onclick = () => {
        if (user.role === 'admin') {
            validDelete.innerHTML = 'User with admin role cannot be removed!'
        }
        else {
            users = users.filter(user => user.id !== id)
            sessionStorage.setItem('users', JSON.stringify(users));
            fetchUsers()
            deleteModal.classList.add('hidden');
        }
    }
}

window.onload = () => {
    fetchUsers();

    document.querySelector('#hideEdit').onclick = () => {
        editModal.classList.add('hidden');
        editedFirst.value = editedLast.value = editedUsername = '';
    }

    document.querySelector('#hideDelete').onclick = () => {
        deleteModal.classList.add('hidden');
    }
    document.onmouseup = (e) => {
        if (!editSection.contains(e.target)) {
            editModal.classList.add('hidden');
        }
        if(!deleteSection.contains(e.target)){
            deleteModal.classList.add('hidden')
        }
    };
}