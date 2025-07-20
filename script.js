const productList = [
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        product_name: 'Assorted Coffee',
        price: 55.00,
        rating: 4,
        category: 'Groceries',
        old_price: null,
        is_sale: false,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg',
        product_name: 'Cashew Butter',
        price: 35.00,
        rating: 4.5,
        category: 'Groceries',
        old_price: 45.00,
        is_sale: true,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg',
        product_name: 'Diabetics Cookies',
        price: 20.00,
        rating: 5,
        category: 'Groceries',
        old_price: 25.00,
        is_sale: true,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-300x300.jpg',
        product_name: 'Egg',
        price: 34.00,
        rating: 4,
        category: 'Groceries',
        old_price: null,
        is_sale: false,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg',
        product_name: 'Fresh Orange Juice',
        price: 20.00,
        rating: 4.5,
        category: 'Juice',
        old_price: 25.00,
        is_sale: true,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg',
        product_name: 'Natural Honey',
        price: 20.00,
        rating: 5,
        category: 'Groceries',
        old_price: 25.00,
        is_sale: true,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
        product_name: 'Hand Sanitizer',
        price: 20.00,
        rating: 5,
        category: 'Groceries',
        old_price: 25.00,
        is_sale: true,
    },
    {
        image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
        product_name: 'Red Chillies',
        price: 15.00,
        rating: 5,
        category: 'Groceries',
        old_price: null,
        is_sale: false,
    }
];

const getCart = () => {
    const cartString = localStorage.getItem('shoppingCart');
    return cartString ? JSON.parse(cartString) : [];
};

const saveCart = (cart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

const updateCartHeader = () => {
    const cart = getCart();
    const cartCountSpan = document.querySelector('.cart-count');
    const cartInfoSpan = document.querySelector('.cart-info');

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    if (cartCountSpan) {
        cartCountSpan.textContent = totalItems;
    }
    if (cartInfoSpan) {
        cartInfoSpan.textContent = totalPrice.toFixed(2);
    }
};

const renderProducts = (productsToRender) => {
    const productGridContainer = document.querySelector('.product-grid');

    let product_html = '';

    if (productsToRender.length === 0) {
        product_html = '<p style="text-align: center; grid-column: 1 / -1; font-size: 1.2em; color: #777;">No products found matching your search.</p>';
    } else {
        productsToRender.forEach((item) => {
            const generateStars = (rating) => {
                let starsHtml = '';
                for (let i = 0; i < Math.floor(rating); i++) {
                    starsHtml += '<i class="fas fa-star"></i>';
                }
                if (rating % 1 !== 0) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                }
                for (let i = 0; i < (5 - Math.ceil(rating)); i++) {
                    starsHtml += '<i class="far fa-star"></i>';
                }
                return starsHtml;
            };

            product_html += `
                <div class="product-card">
                    <a href="product-details-${item.product_name.toLowerCase().replace(/\s/g, '-')}.html" class="product-link">
                        <div class="product-image-wrapper">
                            <img src="${item.image}" alt="${item.product_name}">
                            ${item.is_sale ? '<span class="sale-badge">Sale!</span>' : ''}
                        </div>
                        <div class="product-details">
                            <span class="product-category">${item.category}</span>
                            <h4 class="product-title">${item.product_name}</h4>
                            <div class="product-rating">
                                ${generateStars(item.rating)}
                            </div>
                            <p class="product-price">
                                ${item.old_price !== null ? `<span class="old-price">${item.old_price.toFixed(2)}</span>` : ''}
                                <span class="current-price">${item.price.toFixed(2)}</span>
                            </p>
                        </div>
                    </a>
                    <button class="add-to-cart-btn"
                            data-product-id="${item.product_name.toLowerCase().replace(/\s/g, '-')}"
                            data-product-name="${item.product_name}"
                            data-product-price="${item.price}"
                            data-product-image="${item.image}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
        });
    }

    productGridContainer.innerHTML = product_html;
    addAddToCartListeners();
};

const addAddToCartListeners = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = parseFloat(button.dataset.productPrice);
            const productImage = button.dataset.productImage;

            let cart = getCart();

            const existingItemIndex = cart.findIndex(item => item.id === productId);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
            }

            saveCart(cart);
            updateCartHeader();

            const cartIcon = document.querySelector('.cart-icon');
            if (cartIcon) {
                cartIcon.classList.add('bounced');
                setTimeout(() => {
                    cartIcon.classList.remove('bounced');
                }, 500);
            }
        });
    });
};

const handleSearch = () => {
    const searchInput = document.querySelector('.search-box input');
    const searchTerm = searchInput.value.toLowerCase().trim(); 

    const filteredProducts = productList.filter(product => {
        return product.product_name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm);
    });

    renderProducts(filteredProducts); 
};


document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productList);

    updateCartHeader();

    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
});