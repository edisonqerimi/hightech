
const products = [
    {
        'id': 1,
        'brand': 'Apple',
        'model': 'iPhone 13 Pro Max',
        'category': 'smartphone',
        'price': 1199.50,
        'description': `The biggest Pro camera system upgrade ever.
         Super Retina XDR display with ProMotion for a faster, more responsive feel.
         Lightning-fast A15 Bionic chip. Superfast 5G.1 Durable design and the best battery life ever in an iPhone.`,
        'color': 'blue',
        'discount': {
            'isDiscount': true,
            'priceDiscount': 1150.49,
        },
        'stock': true,
        'amount': 30,
        'img': './img/iphone13promax.png',
        'productDetails': {
            'soC': 'A14 Bionic',
            'ram': 6,
            'battery': '4352mAh',
            'screenSize': '6.7"',
            'storage': '256GB',
            'releaseDate': '2021-09-24',
            'display': 'Super Retina XDR OLED, 120Hz',
            'mainCamera': '12+12+12MP+LiDAR scanner',
            'selfieCamera': '12MP',
            'os': 'iOS 15'
        }
    },
    {
        'id': 2,
        'brand': 'Samsung',
        'model': 'Galaxy S22 Ultra 5G',
        'category': 'smartphone',
        'price': 1149.50,
        'color': 'green',
        'description': `The Note that isn't a Note, yet it may very well end up being the last Note - Samsung's Galaxy S22 Ultra has some big shoes to fill.
         Attempting to appeal to both productivity-focused stylus lovers and photography enthusiasts,
         the latest Ultra will either be the ultimate phone, period, or fall short for either group in some way.`,
        'discount': {
            'isDiscount': true,
            'priceDiscount': 1079.50,
        },
        'discount': true,
        'amount': 20,
        'img': './img/s22ultra_green.png',
        'productDetails': {
            'soC': 'Exynos 2200',
            'ram': 12,
            'battery': '5000mAh',
            'screenSize': '6.8"',
            'storage': '256GB',
            'releaseDate': '2022-02-25',
            'display': 'Dynamic AMOLED 2X, 120Hz',
            'mainCamera': '108+10+10+12MP',
            'selfieCamera': '40MP',
            'os': 'Android 12'
        }
    },
    {
        'id': 3,
        'brand': 'Google',
        'model': 'Pixel 6 Pro',
        'category': 'smartphone',
        'price': 999.50,
        'description': `The Google Pixel 6 Pro is leagues ahead of its predecessors in hardware,
         software, and design with a brand-new set of camera sensors, a new and unique design,
         and plenty of new software features that leverage Google's custom-made Tensor chip.`,
        'color': 'black',
        'discount': {
            'isDiscount': false,
            'priceDiscount': 949.99,
        },
        'stock': true,
        'amount': 20,
        'img': './img/pixel6pro.jpg',
        'productDetails': {
            'soC': 'Google Tensor',
            'ram': 12,
            'battery': '5003mAh',
            'screenSize': '6.8"',
            'storage': '256GB',
            'releaseDate': '2022-10-28',
            'display': 'LTPO AMOLED, 120Hz',
            'mainCamera': '50+48+12MP',
            'selfieCamera': '40MP',
            'os': 'Android 12'
        }
    },
    {
        'id': 4,
        'brand': 'HP',
        'model': 'ENVY 17t-ch000',
        'category': 'laptop',
        'price': 1099.99,
        'color': 'silver',
        'description': `Unleash your creativity with the HP ENVY 17 Laptop that gives you the performance,
         features and freedom to create the way you want. Powered by Intel® Core™ processor
        , brings your ideas to life in stunning colors that match your imagination. `,
        'discount': {
            'isDiscount': true,
            'priceDiscount': 699.99,
        },
        'amount': 40,
        'img': './img/envy.png',
        'productDetails': {
            'processor': 'Intel® Core™ i7-1165G7',
            'graphics': 'Intel® Iris® Xe Graphics',
            'ram': '16GB DDR4',
            'screenSize': '17.3"',
            'storage': '1TB SSD',
            'display': 'IPS',
            'os': 'Windows 11'
        }
    },
    {
        'id': 5,
        'brand': 'ASUS',
        'model': 'ROG Flow Z13 (2022) GZ301ZE',
        'category': 'laptop',
        'price': 1999.99,
        'description': `The ROG Flow Z13 is the most powerful all-purpose computer that you can get at this point in a compact 13-inch tablet form factor.
                        Asus aced the design and screen options, didn't skimp on inputs, features, or the IO,
                        and made sure the thermal design is perfectly capable of coping with the specs inside in demanding loads.`,
        'color': 'black',
        'discount': {
            'isDiscount': false,
            'priceDiscount': 1990.99,
        },
        'amount': 15,
        'img': './img/asusrogflow.png',
        'productDetails': {
            'processor': 'Intel®Core™ i9-12900H',
            'graphics': 'NVIDIA®GeForce RTX™ 3050 Ti',
            'ram': '8GB*2 LPDDR5',
            'screenSize': '13.4"',
            'storage': '1TB SSD',
            'display': 'IPS',
            'os': 'Windows 11'
        }
    },
    {
        'id': 6,
        'brand': 'Sony',
        'model': 'WH-1000XM4',
        'category': 'accessory',
        'price': 349.99,
        'color': 'black',
        'description': `Wireless Over-ear Industry Leading Noise Canceling Headphones with Microphone. 
                        To maximize noise-canceling performance, the WH-1000XM4 headphones incorporate two technologies: Personal Noise-Canceling Optimizer,
                        designed specifically for you, and Atmospheric Pressure Optimizing, designed specifically for air travel.`,
        'discount': {
            'isDiscount': true,
            'priceDiscount': 279.99,
        },
        'amount': 20,
        'img': './img/sony.png',
        'productDetails': {
            'batteryLife': '30 - 200 hours',
            'bluetooth': '5.0, ACC, LDAC, SBC',
            'batteryCharge': 'USB',
            'playbackController': 'Yes',
            'soundControl': 'Yes',
            'batteryIndication': 'Yes',
        }
    }
];

const bindProducts = (products, element) => {
    if (products.length > 0) {
        products.map(p => {
            var product = document.createElement('div');
            product.classList.add('product')
            product.innerHTML = `
            <div style="background-image: url('${p.img}');" class="product-image"></div>
            <div class="product-body">
                <div class="product-title">${p.brand} ${p.model}</div>
                <div class="product-price">
                ${p.discount.isDiscount ?
                    `<div class="discount-price">${p.discount.priceDiscount.toFixed(2)} &euro;</div>` : ''
                }   
                <div class='${p.discount.isDiscount ? "discount" : ''}'>${p.price.toFixed(2)} &euro;</div>
                </div>
                <div class="product-buttons">
                    <a href='/details.html?product-id=${p.id}' class="btn product-btn">More info</a>
                    <div onclick='addToCart(${p.id})' class="btn btn-info product-btn">Add to cart</div>
                </div>
                `;
            element.appendChild(product);
        })
    }
    else {
        element.innerHTML = '<div>No products found</div>';
    }
}


export { products, bindProducts }

