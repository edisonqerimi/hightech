

window.addEventListener('scroll', hideTitle, false);
window.addEventListener('resize', hideTitle, false);


function hideTitle(e) {
    if (window.scrollY >= 80 && window.innerWidth>768) {
        document.querySelector('.nav-title').style.display = 'none'
    }
    else {
        document.querySelector('.nav-title').style.display = 'block'
    }
}

var searchInput = document.querySelector('.search-input');
var account = document.querySelector('.account-container');

document.querySelector('.search-item').onclick = (e)=>{
    searchInput.classList.toggle('hidden');
    searchInput.focus();
};

document.querySelector('.profile').onmouseenter = () =>{
    account.style.display = 'flex';
}
document.querySelector('.profile').onmouseleave = () =>{
    account.style.display = 'none';
}

let sidebar = document.querySelector('#sidebar');

let showSidebar = document.getElementsByClassName('show-sidebar');

let length = showSidebar.length;

for (let i = 0; i < length; i++) {
    showSidebar[i].addEventListener('click', () => {
        sidebar.style.display = 'block';
    })
}


document.querySelector('.close').addEventListener('click', () => {
    sidebar.style.display = 'none';
})

document.querySelector('.close-banner').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'none'
    }
    if(window.innerWidth<768){
        searchInput.classList.add('hidden')
    }
})