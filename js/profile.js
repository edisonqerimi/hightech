let user = JSON.parse(sessionStorage.getItem('currentUser'));

if (user == null) {
    window.location = './index.html'
}

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');

document.querySelector('.fullname-title').innerHTML = `${user.firstName} ${user.lastName}`;
firstName.value = `${user.firstName}`;
lastName.value = `${user.lastName}`;
username.value = `${user.username}`;
email.value = `${user.email}`;

document.querySelector('#profile-form').onsubmit = () => {



    let users = JSON.parse(sessionStorage.getItem('users'));
    userIndex = users.findIndex((u => u.id == user.id));

    users[userIndex].firstName = user.firstName = firstName.value;
    users[userIndex].lastName = user.lastName = lastName.value;
    users[userIndex].username = user.username = username.value;
    users[userIndex].email = user.email = email.value;


    sessionStorage.setItem('users', JSON.stringify(users));

    sessionStorage.setItem('currentUser', JSON.stringify(user));
}