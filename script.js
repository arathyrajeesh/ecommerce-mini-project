document.addEventListener('DOMContentLoaded', () => {

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
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-300x300.jpg',
            product_name: 'Organic Face Scrub',
            price: 30.00,
            rating: 4,
            category: 'Groceries',
            old_price: null,
            is_sale: false,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-300x300.jpg',
            product_name: 'Pulses From Organic Farm',
            price: 18.00,
            rating: 4.5,
            category: 'Groceries',
            old_price: 22.00,
            is_sale: true,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat-300x300.jpg',
            product_name: 'Wheat From Organic Farms',
            price: 8.00,
            rating: 3.5,
            category: 'Vegetables',
            old_price: null,
            is_sale: false,
        },
        {
            image: 'https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg',
            product_name: 'Fresh Apples',
            price: 25.00,
            rating: 5,
            category: 'Fresh Fruits',
            old_price: null,
            is_sale: false,
        },
        {
            image: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
            product_name: 'Kiwi Fruit',
            price: 12.00,
            rating: 4,
            category: 'Fresh Fruits',
            old_price: null,
            is_sale: false,
        },
        {
            image: 'https://gabbarfarms.com/cdn/shop/products/Spinach.jpg?v=1620713074',
            product_name: 'Fresh Spinach',
            price: 7.00,
            rating: 4.5,
            category: 'Vegetables',
            old_price: null,
            is_sale: false,
        }
    ];

    const productsPerPage = 9; 
    let currentPage = 1;     

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartHeader() {
        const cart = getCart();
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);

        const cartInfoSpan = document.querySelector('.cart-info');
        const cartCountSpan = document.querySelector('.cart-count');

        if (cartInfoSpan) cartInfoSpan.textContent = total;
        if (cartCountSpan) cartCountSpan.textContent = count;
    }

    const popupOverlay = document.getElementById('popupOverlay');
    const alertMessageDiv = document.getElementById('alertMessage');

    function showCustomAlert(message, type = 'success') {
        if (!popupOverlay || !alertMessageDiv) {
            console.error("Popup overlay or alert message div not found! Check your HTML IDs.");
            return;
        }

        alertMessageDiv.innerHTML = '';
        const icon = document.createElement('i');
        icon.classList.add('fas');

        if (type === 'success') {
            icon.classList.add('fa-check-circle');
            alertMessageDiv.style.backgroundColor = '#d4edda';
            alertMessageDiv.style.borderColor = '#c3e6cb';
            icon.style.color = '#28a745';
        } else if (type === 'error') {
            icon.classList.add('fa-times-circle');
            alertMessageDiv.style.backgroundColor = '#f8d7da';
            alertMessageDiv.style.borderColor = '#f5c6cb';
            icon.style.color = '#dc3545';
        }

        alertMessageDiv.appendChild(icon);
        const textNode = document.createTextNode(message);
        alertMessageDiv.appendChild(textNode);

        popupOverlay.classList.add('show');

        setTimeout(() => {
            popupOverlay.classList.remove('show');
        }, 3000);
    }

    function addToCart(product) {
        const cart = getCart();
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        saveCart(cart);
        updateCartHeader();
        showCustomAlert("Item added to cart successfully!");
    }

    function renderProducts(productsToRender, pageNumber) {
        const productGrid = document.querySelector('.product-grid');
        if (!productGrid) {
            console.warn("Product grid container not found in the DOM.");
            return;
        }

        productGrid.innerHTML = ''; 

        const startIndex = (pageNumber - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsOnPage = productsToRender.slice(startIndex, endIndex);

        productsOnPage.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productId = product.product_name.toLowerCase().replace(/\s/g, '-');

            productCard.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.product_name}">
                    ${product.is_sale ? '<span class="sale-badge">Sale</span>' : ''}
                </div>
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h4 class="product-title">${product.product_name}</h4>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <p class="product-price">
                        ${product.old_price ? `<span class="old-price">$${product.old_price.toFixed(2)}</span>` : ''}
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                    </p>
                    <button class="add-to-cart-btn"
                        data-product-id="${productId}"
                        data-product-name="${product.product_name}"
                        data-product-price="${product.price}"
                        data-product-image="${product.image}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        const totalProductsFiltered = productsToRender.length;
        const startShowing = Math.min(startIndex + 1, totalProductsFiltered);
        const endShowing = Math.min(endIndex, totalProductsFiltered);
        const showingResultsText = document.querySelector('.sort-options p');
        if (showingResultsText) {
            if (totalProductsFiltered === 0) {
                showingResultsText.textContent = "No results found.";
            } else {
                showingResultsText.textContent = `Showing ${startShowing}-${endShowing} of ${totalProductsFiltered} results`;
            }
        }

        addAddToCartListeners();
    }

    function addAddToCartListeners() {
        const buttons = document.querySelectorAll('.add-to-cart-btn');
        buttons.forEach(button => {
            button.removeEventListener('click', handleAddToCartButtonClick);
            button.addEventListener('click', handleAddToCartButtonClick);
        });
    }

    function handleAddToCartButtonClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const product = {
            id: button.dataset.productId,
            name: button.dataset.productName,
            price: parseFloat(button.dataset.productPrice),
            image: button.dataset.productImage
        };
        addToCart(product);
    }

    function renderPagination(productsToPaginate) {
        const paginationContainer = document.querySelector('.pagination');
        if (!paginationContainer) {
            console.warn("Pagination container not found.");
            return;
        }

        paginationContainer.innerHTML = ''; 

        const totalPages = Math.ceil(productsToPaginate.length / productsPerPage);

        if (totalPages <= 1) { 
            paginationContainer.style.display = 'none';
            return;
        } else {
            paginationContainer.style.display = 'flex'; 
        }

        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.textContent = '\u00AB'; 
        prevLink.classList.add('pagination-link');
        if (currentPage === 1) {
            prevLink.classList.add('disabled');
        } else {
            prevLink.addEventListener('click', (e) => {
                e.preventDefault();
                goToPage(currentPage - 1);
            });
        }
        paginationContainer.appendChild(prevLink);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('pagination-link');
            if (i === currentPage) {
                pageLink.classList.add('active'); 
            }
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                goToPage(i);
            });
            paginationContainer.appendChild(pageLink);
        }

        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.textContent = '\u00BB'; 
        nextLink.classList.add('pagination-link');
        if (currentPage === totalPages) {
            nextLink.classList.add('disabled');
        } else {
            nextLink.addEventListener('click', (e) => {
                e.preventDefault();
                goToPage(currentPage + 1);
            });
        }
        paginationContainer.appendChild(nextLink);
    }

    function goToPage(pageNumber) {
        const totalPages = Math.ceil(applyFilters(productList).length / productsPerPage);
        if (pageNumber < 1) pageNumber = 1;
        if (pageNumber > totalPages) pageNumber = totalPages;

        currentPage = pageNumber;
        const filteredProducts = applyFilters(productList); 
        renderProducts(filteredProducts, currentPage);
        renderPagination(filteredProducts); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function applyFilters(products) {
        const minRangeInput = document.querySelector('.min-range');
        const maxRangeInput = document.querySelector('.max-range');
        const searchTermInput = document.querySelector('.searchTerm');

        const min = minRangeInput ? parseInt(minRangeInput.value) : 0;
        const max = maxRangeInput ? parseInt(maxRangeInput.value) : 100;
        const searchTerm = searchTermInput ? searchTermInput.value.toLowerCase() : '';

        return products.filter(p => {
            const priceMatch = p.price >= min && p.price <= max;
            const searchMatch = p.product_name.toLowerCase().includes(searchTerm);
            return priceMatch && searchMatch;
        });
    }

    function handleFilterChange() {
        currentPage = 1; 
        const filtered = applyFilters(productList);
        renderProducts(filtered, currentPage);
        renderPagination(filtered);
    }

    const filterButton = document.querySelector('.filter-button');
    if (filterButton) filterButton.addEventListener('click', handleFilterChange);

    const searchInput = document.querySelector('.searchTerm');
    if (searchInput) {
        searchInput.addEventListener('input', handleFilterChange); 
    }

    const rangeInputs = document.querySelectorAll('.min-range, .max-range');
    rangeInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                const minPriceDisplay = document.getElementById('min-price-value');
                const maxPriceDisplay = document.getElementById('max-price-value');

                if (minPriceDisplay && maxPriceDisplay) {
                    minPriceDisplay.textContent = document.querySelector('.min-range').value;
                    maxPriceDisplay.textContent = document.querySelector('.max-range').value;
                }
            });
        }
    });

    updateCartHeader(); 
    const initialFilteredProducts = applyFilters(productList); 
    renderProducts(initialFilteredProducts, currentPage); 
    renderPagination(initialFilteredProducts); 
});




document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.querySelector('.signin-form');
    const signupForm = document.querySelector('.signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showSigninLink = document.getElementById('show-signin');

    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            signinForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }

    if (showSigninLink) {
        showSigninLink.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            signinForm.style.display = 'block';
        });
    }
});