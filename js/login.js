
const params = new window.URLSearchParams(window.location.search);

const returnPath = params.get('returnUrl');

const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const validation = document.querySelector('.validation');

window.onload = () => {
    let users = JSON.parse(sessionStorage.getItem('users'));
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === usernameInput.value);

        if (user != null) {
            if (user.password === passwordInput.value) {
                sessionStorage.setItem('actualUser', JSON.stringify(user));
                window.location = returnPath;
            }
            else {
                validation.innerHTML = 'Wrong credentials!';
            }
        }
        else {
            validation.innerHTML = 'Wrong credentials!';
        }
    })
}