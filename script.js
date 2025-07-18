
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
            price:'$55'},
        {
            image:'https://websitedemos.net/organic-shop-02/wp-conten…ploads/sites/465/2018/06/red-chillies-600x600.jpg',
            category:'Groceries',
            name:'Handpicked Red Chillies',
            rating:'4star',
            price:'$65'},
        {
            image:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-600x600.jpg',
            category:'Groceries',
            name:'Natural Extracted Edible Oil',
            rating:'4star',
            price:'$25'},
    ];

    const productContainer = document.getElementById('productContainer');

    let productList = ''

    bestProducts.map((item)=> {
       productList = productList + `<div class="product">
                                    <img src="${item.image}"></img>
                                    <p>${item.category}</p>
                                    <p>${item.name}</p>
                                    <p>${item.rating}</p>
                                    <p>${item.price}</p>
                                    </div>`

    })
    console.log(productContainer)
    productContainer.innerHTML = productList























