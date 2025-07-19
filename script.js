const productList=[
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