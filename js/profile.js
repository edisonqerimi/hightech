
if (currentUser == null) {
    window.location = './index.html'
}

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');

document.querySelector('.fullname-title').innerHTML = `${currentUser.firstName} ${currentUser.lastName}`;
firstName.value = `${currentUser.firstName}`;
lastName.value = `${currentUser.lastName}`;
username.value = `${currentUser.username}`;
email.value = `${currentUser.email}`;

document.querySelector('#profile-form').onsubmit = () => {



    let users = JSON.parse(sessionStorage.getItem('users'));
    userIndex = users.findIndex((u => u.id == currentUser.id));

    users[userIndex].firstName = currentUser.firstName = firstName.value;
    users[userIndex].lastName = currentUser.lastName = lastName.value;
    users[userIndex].username = currentUser.username = username.value;
    users[userIndex].email = currentUser.email = email.value;


    sessionStorage.setItem('users', JSON.stringify(users));

    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}