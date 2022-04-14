
if(currentUser!=null){
    window.location = './index.html';
}

let users = JSON.parse(sessionStorage.getItem('users'));

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const confirmEmail = document.querySelector('#confirm-Email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-Password');

const registerForm = document.querySelector('#register-Form');
const validation = document.querySelector('.validation');


window.onload = () => {

    registerForm.onsubmit = (e) => {
        let errors = [];
        validation.innerHTML = '';
        const checkUsername = users.some(u => u.username === username.value);
        const checkEmail = users.some(u => u.email === email.value);
        e.preventDefault();
        if (checkUsername) {
            errors.push('Username is taken!');
        }
        if (checkEmail) {
            errors.push('An account with this email already exists!');
        }
        if (email.value != confirmEmail.value) {
            errors.push('Email and confirm email must match!')
        }
        if (password.value != confirmPassword.value) {
            errors.push('Password and confirm password must match!')
        }
        if (username.value.length < 6) {
            errors.push('Username must be longer than 6 characters!')
        }
        if (password.value.length < 8) {
            errors.push('Password must be longer than 6 characters!')
        }
        if (errors.length > 0) {
            errors.map(e => {
                const error = document.createElement('div');
                error.innerHTML = e;
                validation.appendChild(error);
            })

            registerForm.scrollIntoView({
                behavior: "smooth"
            })
        }
        else {
            var id = 1;
            if (users.length > 0) {
                id = Math.max.apply(Math, users.map((user => user.id))) + 1;
            }
            const user = {
                id: id,
                username: username.value,
                firstName:firstName.value,
                lastName:lastName.value,
                email:email.value,
                password:password.value,
            };
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            users.push(user);
            sessionStorage.setItem('users',JSON.stringify(users));
            window.location = './index.html';
        }
    }

}