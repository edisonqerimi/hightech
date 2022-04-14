
const params = new window.URLSearchParams(window.location.search);

if(JSON.parse(sessionStorage.getItem('currentUser'))!=null){
    window.location = './index.html';
}

let returnPath = params.get('returnUrl');

if (returnPath != null) {
    returnPath = returnPath.split('.html')[0].split('/').pop();;
}


const loginForm = document.querySelector('#loginForm');
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
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                if (returnPath != null && returnPath != '' && returnPath != 'login' && returnPath != 'register')
                    window.location = returnPath + '.html';
                else
                    window.location = './index.html';
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