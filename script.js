const showSpeciality = ()=> {
    const data = [
        {title:'Free Shipping',subtitle:'Above $5 only'},
        {title:'Certified Organic',subtitle:'100% Guarantee'},
        {title:'Huge Savings',subtitle:'At Lowest Price'},
        {title:'Easy Returns',subtitle:'No Questions Asked'},
    ];

    const cardContainer = document.getElementById('cardContainer');

    let specialityList = ''

    data.map((item)=> {
        specialityList = specialityList + `<div class="card">
                                            <h3>${item.title}</h3>
                                            <p>${item.subtitle}</p>
                                            </div>`

    })

    cardContainer.innerHTML = specialityList
}
showSpeciality()
const showBestSellProduct = ()=> {
    const bestProducts = [
        {
            image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
            category:'Groceries',
            name:'Assorted Coffee',
            rating:'5star',
            price:'$35'
        },
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-600x600.jpg',
            category:'Groceries',
            name:'Hand Sanitizer',
            rating:'3star',
            price:'$55'
        },
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-600x600.jpg',
            category:'Groceries',
            name:'Handpicked Red Chillies',
            rating:'4star',
            price:'$65'
        },
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-600x600.jpg',
            category:'Groceries',
            name:'Natural Extracted Edible Oil',
            rating:'4star',
            price:'$25'
        },
    ];

    const productContainer = document.getElementById('productContainer');

    let productList = ''

    bestProducts.map((item)=> {
       productList = productList + `<div class="product">
                                    <img src="${item.image}"></img>
                                    <p>${item.category}</p>
                                    <h5>${item.name}</h5>
                                    <p>${item.rating}</p>
                                    <p>${item.price}</p>
                                    </div>`

    })
    productContainer.innerHTML = productList

    const listItem = [
        {
            contentTitle:'Farm Fresh Fruits',
            subtitle:'Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.',
            button:'SHOP NOW',
            background:'img'
        },
        {
            contentTitle:'Fresh Vegetables',
            subtitle:'Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.',
            button:'SHOP NOW',
        },
        {
            contentTitle:'Organic Legume',
            subtitle:'Phasellus sed urna mattis, viverra libero sed, aliquam est.',
            button:'SHOP NOW',
        },
    ];

    const itemContainer = document.getElementById('itemContainer');

    let itemList = ''

    listItem.map((item)=> {
        itemList = itemList + `<div class="list">
                                <h3>${item.contentTitle}</h3>
                                <p>${item.subtitle}</p>
                                <button>${item.button}</buttton>
                                </div>`

    })
    itemContainer.innerHTML = itemList
}
showBestSellProduct()

const showTrendingProduct = ()=> {
    const trendProducts = [
        {
            image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
            category:'Groceries',
            name:'Assorted Coffee',
            rating:'5star',
            price:'$35'
        },
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-600x600.jpg',
            category:'Juice',
            name:'Fresh Orange Juice',
            rating:'4star',
            price:'$18'
        },
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-600x600.jpg',
            category:'Groceries',
            name:'Hand Sanitizer',
            rating:'3star',
            price:'$55'},
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-600x600.jpg',
            category:'Groceries',
            name:'Handpicked Red Chillies',
            rating:'4star',
            price:'$65'},
        
    ];

    const trendingProduct = document.getElementById('trendingProduct');

    let prodList = ''

    trendProducts.map((item)=> {
       prodList = prodList + `<div class="product">
                                <img src="${item.image}"></img>
                                <p>${item.category}</p>
                                <h5>${item.name}</h5>
                                <p>${item.rating}</p>
                                <p>${item.price}</p>
                                </div>`

    })
    trendingProduct.innerHTML = prodList

    }
showTrendingProduct()



const showEverythingPageProduct = ()=> {
    

    const productList = [
        {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        product_name:'Assorted Coffee',
        price:'$ 55.0',
        rating:'',
        category:'Groceries',
        offer_rate:'',
        is_sale: false,
    },
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg',
        product_name:'Cashew Butter',
        price:'$ 35.0',
        rating:'',
        category:'Groceries',
        offer_rate:'25',
        is_sale: true,
    },    
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg',
        product_name:'Diabetics Cookies',
        price:'$ 25.0',
        rating:'',
        category:'Groceries',
        offer_rate:'20',
        is_sale : true,
    },    
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-300x300.jpg',
        product_name:'Egg',
        price:'$ 34.0',
        rating:'',
        category:'Groceries',
        offer_rate:'20.0',
        is_sale: true,
    },
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg',
        product_name:'Fresh Juice',
        price:'$ 25.0',
        rating:'',
        category:'Juices',
        offer_rate:'20.0',
        is_sale: false,
    },
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg',
            product_name:'Organic Honey',
            price:'$ 25.0',
            rating:'',
            category:'Groceries',
            offer_rate:'20.0',
            is_sale: false,
    },
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
            product_name:'Hand Sanitizer',
            price:'$ 25.0',
            rating:'',
            category:'Groceries',
            offer_rate:'20.0',
            is_sale: true,
    },
    {
        image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
            product_name:'Red chillies',
            price:'$ 25.0',
            rating:'',
            category:'Groceries',
            offer_rate:'20.0',
            is_sale: false,
    }
    ]
    const productContainer=document.getElementById('product-card')

    let product_list = ''

    productList.map((items)=> {
        product_list = product_list + `<div class = "product-card">
                                        <img src="${items.image}">
                                        <span>"${items.category}"</span>
                                        <h4>"${items.product_name}"</h4>
                                        <p>"${items.price}"</p>
                                        <p>"${items.offer_rate}"</p>
                                        <p>"${items.rating}"</p>
                                        <span>"${items.is_sale}"</span>
                                        </div>`
    })

    productContainer.innerHTML=product_list
}

showEverythingPageProduct()