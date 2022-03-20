
const products = [
    {
        'id': 1,
        'brand': 'Apple',
        'model': 'iPhone 13 Pro Max',
        'category': 'smartphone',
        'price': 1199.50,
        'color':'blue',
        'discount': {
            'isDiscount': true,
            'priceDiscount': 1150.49,
        },
        'stock': true,
        'amount': 30,
        'img': 'http://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png',
        'productDetails': {
            'soC': 'A14 Bionic',
            'ram':6,
            'battery':'4352mAh',
            'screenSize':'6.7"',
            'storage':'256GB',
            'releaseDate':'2021-09-24',
            'display':'Super Retina XDR OLED, 120Hz',
            'mainCamera':'12+12+12MP+LiDAR scanner',
            'selfieCamera':'12MP',
            'os':'iOS 15'
        }
    },
    {
        'id': 2,
        'brand': 'Samsung',
        'model': 'Galaxy S22 Ultra 5G',
        'category': 'smartphone',
        'price': 1149.50,
        'color':'green',
        'discount': {
            'isDiscount': true,
            'priceDiscount': 1079.50,
        },
        'discount': true,
        'amount': 20,
        'img': 'https://mypreordercontent.azureedge.net/my-rainbow-preorder-11416/public/images/s22ultra_green_v1_03.png',
        'productDetails': {
            'soC': 'Exynos 2200',
            'ram':12,
            'battery':'5000mAh',
            'screenSize':'6.8"',
            'storage':'256GB',
            'releaseDate':'2022-02-25',
            'display':'Dynamic AMOLED 2X, 120Hz',
            'mainCamera':'108+10+10+12MP',
            'selfieCamera':'40MP',
            'os':'Android 12'
        }
    },
    {
        'id': 3,
        'brand': 'Google',
        'model': 'Pixel 6 Pro',
        'category': 'smartphone',
        'price': 999.50,
        'color':'black',
        'discount': {
            'isDiscount': false,
            'priceDiscount': 949.99,
        },
        'stock': true,
        'amount': 20,
        'img': 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483635_sd.jpg;maxHeight=640;maxWidth=550',
        'productDetails': {
            'soC': 'Google Tensor',
            'ram':12,
            'battery':'5003mAh',
            'screenSize':'6.8"',
            'storage':'256GB',
            'releaseDate':'2022-10-28',
            'display':'LTPO AMOLED, 120Hz',
            'mainCamera':'50+48+12MP',
            'selfieCamera':'40MP',
            'os':'Android 12'
        }
    },
    {
        'id': 4,
        'brand': 'HP',
        'model': 'ENVY 17t-ch000',
        'category': 'laptop',
        'price': 1099.99,
        'color':'silver',
        'discount': {
            'isDiscount': true,
            'priceDiscount': 699.99,
        },
        'amount': 40,
        'img': 'https://www.hp.com/us-en/shop/app/assets/images/product/24L48AV_1/center_facing.png?_=1637663766555&imwidth=270&imdensity=1',
        'productDetails': {
            'processor': 'Intel® Core™ i7-1165G7',
            'graphics':'Intel® Iris® Xe Graphics',
            'ram':'16GB DDR4',
            'screenSize':'17.3"',
            'storage':'1TB SSD',
            'display':'IPS',
            'os':'Windows 11'
        }
    },
    {
        'id': 5,
        'brand': 'ASUS',
        'model': 'ROG Flow Z13 (2022) GZ301ZE',
        'category': 'laptop',
        'price': 1999.99,
        'color':'black',
        'discount': {
            'isDiscount': false,
            'priceDiscount': 1990.99,
        },
        'amount': 15,
        'img': 'https://dlcdnwebimgs.asus.com/gain/932397FC-538C-4318-BFF4-E530EDADAE2D/w1000/h732',
        'productDetails': {
            'processor': 'Intel®Core™ i9-12900H',
            'graphics':'NVIDIA®GeForce RTX™ 3050 Ti',
            'ram':'8GB*2 LPDDR5',
            'screenSize':'13.4"',
            'storage':'1TB SSD',
            'display':'IPS',
            'os':'Windows 11'
        }
    }
];

export {products}

