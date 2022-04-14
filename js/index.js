

window.addEventListener('scroll', hideTitle, false);
window.addEventListener('resize', hideTitle, false);


function hideTitle(e) {
    if (window.scrollY >= 80 && window.innerWidth > 768) {
        document.querySelector('.nav-title').style.display = 'none'
    }
    else {
        document.querySelector('.nav-title').style.display = 'block'
    }
}

const searchInput = document.querySelector('.search-input');

document.querySelector('.search-item').onclick = (e) => {
    searchInput.classList.toggle('hidden');
    searchInput.focus();
};

const sidebar = document.querySelector('#sidebar');

document.querySelectorAll('.show-sidebar').forEach(el => el.onclick = () => {
    sidebar.style.display = 'block';
});

document.onmouseup = (e) => {
    if (!sidebar.contains(e.target)) {
        sidebar.style.display = 'none';
    }
};

document.querySelectorAll('.close, .side-row').forEach(el => el.onclick = () => {
    sidebar.style.display = 'none';
})

if (JSON.parse(sessionStorage.getItem('banner-closed'))) {
    document.querySelector('.banner').style.display = 'none';
}

document.querySelector('.close-banner').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    sessionStorage.setItem('banner-closed', true);
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'none'
    }
    if (window.innerWidth < 768) {
        searchInput.classList.add('hidden')
    }
})

let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let currentUserCarts;
const cartCountEl = document.querySelector('.cart-count');
if (currentUser != null) {
    cartCountEl.classList.remove('hidden');
    currentUserCarts = JSON.parse(sessionStorage.getItem('carts')).filter(c => c.userId === currentUser.id);
    cartCountEl.innerHTML = currentUserCarts.length;
}

const accountNav = document.querySelector('#account-items-nav');
const accountSide = document.querySelector('#account-items-side');

if (currentUser != null) {

    if (currentUser.role == 'admin') {
        accountNav.innerHTML = accountSide.innerHTML = `
                    <a class='account-icon' href='./profile.html'>
                        ${profileIcon}
                        <div>Account</div>
                    </a>
                    <a class='account-icon' href="./administration.html">
                        ${adminIcon}
                        <div>Admin</div>
                    </a>
                    <a class='account-icon' href="./logout.html">
                        ${logoutIcon}
                        <div>Log Out</div>
                    </a>
        `;
    }
    else {
        accountNav.innerHTML = accountSide.innerHTML = `
                <a class='account-icon' href='./profile.html'>
                    ${profileIcon}
                    <div>Account</div>
                </a>
                <a class='account-icon' href="./logout.html">
                    ${logoutIcon}
                    <div>Log Out</div>
                </a>
        `;
    }
}
