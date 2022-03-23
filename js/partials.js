const returnUrl = window.location.pathname;


const profileIcon = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="outside" fill-rule="evenodd" clip-rule="evenodd"
            d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
            fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
            fill="currentColor" />
        </svg>
`;

const loginIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="currentColor" />
        <path d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z" fill="currentColor" />
    </svg>
`;
const supportIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2607 21.9966C12.174 21.9988 12.0871 22 12 22C11.9128 22 11.8259 21.9988 11.7393 21.9966C7.68318 21.8928 4.22762 19.3738 2.7573 15.8242C1.74192 13.3674 1.7476 10.588 2.77433 8.13481C3.27688 6.93672 4.00599 5.85718 4.90808 4.94979L4.94983 4.90804C5.85259 4.01056 6.92574 3.28429 8.1165 2.78202C10.5894 1.74123 13.3958 1.73933 15.87 2.77633C17.0688 3.27993 18.1488 4.01042 19.0562 4.91407L19.0859 4.94373C19.9989 5.86054 20.7351 6.95351 21.2392 8.16721C21.7279 9.34662 21.9812 10.6006 21.999 11.8573C21.9997 11.9047 22 11.9523 22 12C22 12.0506 21.9996 12.1012 21.9989 12.1516C21.9376 16.2743 19.3814 19.7925 15.7731 21.2637C14.6481 21.7213 13.4566 21.9656 12.2607 21.9966ZM14.0322 15.4464L16.906 18.3202C14.0281 20.5599 9.97192 20.5599 7.09402 18.3202L9.96779 15.4464C11.2175 16.1845 12.7825 16.1845 14.0322 15.4464ZM8.55358 14.0322L5.67981 16.906C3.44007 14.0281 3.44007 9.97192 5.67981 7.09402L8.55358 9.96779C7.81548 11.2175 7.81548 12.7825 8.55358 14.0322ZM10.0824 12.5694C10.0773 12.5523 10.0725 12.5351 10.0679 12.5179C9.97738 12.179 9.97738 11.821 10.0679 11.4821C10.1556 11.1537 10.3282 10.8434 10.5858 10.5858C10.8299 10.3417 11.1213 10.1739 11.4306 10.0824C11.4477 10.0773 11.4649 10.0725 11.4821 10.0679C11.821 9.97738 12.179 9.97737 12.5179 10.0679C12.8463 10.1556 13.1566 10.3282 13.4142 10.5858C13.6583 10.8299 13.8261 11.1213 13.9176 11.4306C13.9227 11.4477 13.9275 11.4649 13.9321 11.4821C14.0226 11.821 14.0226 12.179 13.9321 12.5179C13.8444 12.8462 13.6718 13.1566 13.4142 13.4142C13.1701 13.6583 12.8787 13.8261 12.5694 13.9176C12.5523 13.9227 12.5351 13.9275 12.5179 13.9321C12.179 14.0226 11.821 14.0226 11.4821 13.9321C11.1538 13.8444 10.8434 13.6718 10.5858 13.4142C10.3417 13.1701 10.1739 12.8787 10.0824 12.5694ZM14.0322 8.55357C12.7825 7.81548 11.2175 7.81548 9.96779 8.55357L7.09402 5.6798C9.97192 3.44007 14.0281 3.44007 16.906 5.6798L14.0322 8.55357ZM18.3202 16.906C20.5599 14.0281 20.5599 9.97192 18.3202 7.09402L15.4464 9.96779C16.1845 11.2175 16.1845 12.7825 15.4464 14.0322L18.3202 16.906Z" fill="currentColor" />
    </svg>
`;

const hamburgerIcon = `
    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="currentColor" />
        <path
            d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
            fill="currentColor" />
        <path
            d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
            fill="currentColor" />
    </svg>
`;

const logoIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class='logo' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
`;

const searchIcon = `
    <svg class="search" width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
        fill="currentColor" />
    </svg>
`;

const registerIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" />
    </svg>
`;

const bagIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
            fill="currentColor" />
    </svg>
`;

const cartIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor" /><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor" /><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor" />
    </svg>
`

const closeIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
        fill="currentColor" />
    </svg>
`;

const logoutIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z" fill="currentColor" />
        <path d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z" fill="currentColor" />
    </svg>
`
const adminIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" fill="currentColor" />
    </svg>
`

document.getElementById('nav').innerHTML = `
        <div class="hamburger show-sidebar">${hamburgerIcon}</div>

        <div class="nav-start">
            <a class='icon-title' href="index.html">
                ${logoIcon}
                <div class="nav-title">HIGH TECH</div>
            </a>

            <div class="items">
                <a id='shop-item' href="./shop.html" class="nav-item">
                    <div>Shop</div>
                    <!--${bagIcon}-->
                </a>
                <a href="./shop.html" class="nav-item">
                    <div>Support</div>
                    <!--${supportIcon}-->
                </a>
            </div>
        </div>

        <div class="nav-end">

            <form action="/search.html">
                <input class='search-input hidden' name='search' placeholder='Search products'/>
            </form>
    
            <div class="search-item">
              ${searchIcon}
            </div>

            <div class="profile icon-item">
                ${profileIcon}
            <div id='account' class='account-navbar hidden'>
                <div id="account-items-nav" class="account-items-nav">
                    <a class='account-icon login' href="./login.html?returnUrl=${returnUrl}">
                        ${loginIcon}
                        <div>Log In</div>
                    </a>
                    <a class='account-icon register' href="./register.html">
                        ${registerIcon}
                        <div>Register</div>
                    </a>
                </div>
            </div>
            </div>
            <a href="#" class="cart icon-item">
                ${cartIcon}
            </a>
            </div>
        </div>
`

document.getElementById('sidebar').innerHTML = `
    <div class='close'>${closeIcon}</div>

    <div class="side-title-container">
        <a class='side-title' href="index.html">
            <div class='logo'>${logoIcon}</div>
            <div>HIGH TECH</div>
        </a>
    </div>
    <form class='side-form' action="/search.html">
        <input class='search-input side-search' name='search' placeholder='Search products'/>
    </form>
    <div id='account-side' class="account-items">
        <div id='account-items-side' class="account-items-side">
            <a class='account-icon' href="./login.html?returnUrl=${returnUrl}">
                ${loginIcon}
                <div>Log In</div>
            </a>
            <a class='account-icon' href="./register.html">
                ${registerIcon}
                <div>Register</div>
            </a>
        </div>
    </div>
    <div class="side-items">
        <a href="./shop.html" class="item-1 side-row">
            <div class="side-item">All categories</div>
        </a>

        <a href="./desktops.html" class="item-2 side-row">
            <div class="side-item">Desktops</div>
        </a>

        <a href="./laptop.html" class="item-2 side-row">
            <div class="side-item">Laptops</div>
        </a>

        <a href="./smartphone.html" class="item-3 side-row">
            <div class="side-item">Smartphones</div>
        </a>

        <a href="./accessories.html" class="item-3 side-row">
            <div class="side-item">Accessories</div>
        </a>
        <a href="./support.html" class="item-3 side-row">
            <div class="side-item">Support</div>
        </a>
    </div>
`

document.querySelector('.banner').innerHTML = `
    <!-- Empty div needed for justify between -->
    <div></div> 

    <div>Free domestic shipping.</div>
    <div class="close-banner">${closeIcon}</div>
`;

document.querySelector('.footer').innerHTML = `
    <div>Edison Qerimi - 2022 Open Source</div>
    
    <div>
        <img width="35px" src="./img/mastercard.png" alt="MasterCard">
        <img width="35px" src="./img/visa.png" alt="Visa">
    </div>
`
