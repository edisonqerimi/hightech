

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


let sidebar = document.querySelector('#sidebar');

let showSidebar = document.getElementsByClassName('show-sidebar');

for (let i = 0; i < showSidebar.length; i++) {
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
})