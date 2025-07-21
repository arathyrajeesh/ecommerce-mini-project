document.addEventListener('DOMContentLoaded', () => {

    const productList = [
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
            product_name: 'Assorted Coffee',
            price: 55.0,
            rating: 4,
            category: 'Groceries',
            offer_rate: 0,
            is_sale: false,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg',
            product_name: 'Cashew Butter',
            price: 35.0,
            rating: 5,
            category: 'Groceries',
            offer_rate: 25,
            is_sale: true,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg',
            product_name: 'Diabetics Cookies',
            price: 25.0,
            rating: 3,
            category: 'Groceries',
            offer_rate: 20,
            is_sale: true,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-300x300.jpg',
            product_name: 'Egg',
            price: 34.0,
            rating: 4,
            category: 'Groceries',
            offer_rate: 20,
            is_sale: true,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg',
            product_name: 'Fresh Juice',
            price: 25.0,
            rating: 4,
            category: 'Juice',
            offer_rate: 0,
            is_sale: false,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg',
            product_name: 'Organic Honey',
            price: 25.0,
            rating: 5,
            category: 'Groceries',
            offer_rate: 0,
            is_sale: false,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
            product_name: 'Hand Sanitizer',
            price: 25.0,
            rating: 2,
            category: 'Groceries',
            offer_rate: 20,
            is_sale: true,
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
            product_name: 'Red Chillies',
            price: 25.0,
            rating: 3,
            category: 'Groceries',
            offer_rate: 0,
            is_sale: false,
        }
    ];

    let currentProducts = [...productList];

    const productGridContainer = document.querySelector('.product-grid');
    const resultsDisplay = document.querySelector('.sort-options p');
    const sortSelect = document.querySelector('.sort-customize-group select');
    const searchInput = document.querySelector('.search-product-filter input');
    const searchButton = document.querySelector('.search-product-filter button');
    const categoryLinks = document.querySelectorAll('.category-filter ul li a');

    const cartInfoSpan = document.querySelector('.cart-info');
    const cartCountSpan = document.querySelector('.cart-count');

    let cartTotal = 0.00;
    let itemCount = 0;

    function updateCartDisplay() {
        cartInfoSpan.textContent = cartTotal.toFixed(2);
        cartCountSpan.textContent = itemCount;
    }

    productGridContainer.addEventListener('click', (event) => {
        const addToCartButton = event.target.closest('.add-to-cart-btn');

        if (addToCartButton) {
            event.preventDefault();

            const price = parseFloat(addToCartButton.dataset.price);

            cartTotal += price;
            itemCount++;
            updateCartDisplay();
        }
    });

    updateCartDisplay();


    const minRangeInput = document.querySelector('.min-range');
    const maxRangeInput = document.querySelector('.max-range');
    const minPriceValueSpan = document.getElementById('min-price-value');
    const maxPriceValueSpan = document.getElementById('max-price-value');
    const filterButton = document.querySelector('.filter-button');

    function updatePriceDisplay() {
        let minVal = parseInt(minRangeInput.value);
        let maxVal = parseInt(maxRangeInput.value);

        if (minVal > maxVal) {
            [minVal, maxVal] = [maxVal, minVal];
            minRangeInput.value = minVal;
            maxRangeInput.value = maxVal;
        }

        minPriceValueSpan.textContent = minVal.toFixed(0);
        maxPriceValueSpan.textContent = maxVal.toFixed(0);
    }

    minRangeInput.addEventListener('input', updatePriceDisplay);
    maxRangeInput.addEventListener('input', updatePriceDisplay);

    filterButton.addEventListener('click', () => {
        filterAndRenderProducts();
    });

    minRangeInput.value = 15;
    maxRangeInput.value = 35;
    updatePriceDisplay();


    function renderProducts(productsToRender) {
        productGridContainer.innerHTML = '';
        if (productsToRender.length === 0) {
            productGridContainer.innerHTML = '<p>No products found matching your criteria.</p>';
            resultsDisplay.textContent = 'Showing 0 of 0 results';
            return;
        }

        const itemsPerPage = 9;
        const totalItems = productsToRender.length;
        const displayCount = Math.min(itemsPerPage, totalItems);
        resultsDisplay.textContent = `Showing 1-${displayCount} of ${totalItems} results`;


        productsToRender.slice(0, itemsPerPage).forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            let oldPriceHtml = '';
            let currentPrice = product.price;
            if (product.is_sale && product.offer_rate > 0) {
                const calculatedOldPrice = product.price / (1 - product.offer_rate / 100);
                oldPriceHtml = `<span class="old-price">$${calculatedOldPrice.toFixed(2)}</span>`;
            }

            let starsHtml = '';
            for (let i = 0; i < 5; i++) {
                if (i < product.rating) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }

            productCard.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.product_name}">
                    ${product.is_sale ? '<span class="sale-badge">Sale</span>' : ''}
                    <div class="product-overlay">
                        <a href="#" class="quick-view-btn" data-id="${product.id || product.product_name}"><i class="fas fa-eye"></i></a>
                    </div>
                </div>
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h4 class="product-title">${product.product_name}</h4>
                    <div class="product-rating">
                        ${starsHtml}
                    </div>
                    <p class="product-price">
                        ${oldPriceHtml}
                        <span class="current-price">$${currentPrice.toFixed(2)}</span>
                    </p>
                    <a href="#" class="add-to-cart-btn" data-price="${product.price}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                </div>
            `;
            productGridContainer.appendChild(productCard);
        });
    }

    function filterAndRenderProducts() {
        let filtered = [...productList];

        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.product_name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm)
            );
        }

        const activeCategoryLink = document.querySelector('.category-filter ul li a.active-category');
        if (activeCategoryLink) {
            const selectedCategory = activeCategoryLink.textContent.split('(')[0].trim().toLowerCase();
            if (selectedCategory !== 'all') {
                filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory);
            }
        }

        const minPrice = parseInt(minPriceValueSpan.textContent);
        const maxPrice = parseInt(maxPriceValueSpan.textContent);
        filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

        const sortBy = sortSelect.value;
        switch (sortBy) {
            case 'Sort by popularity':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'Sort by average rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'Sort by latest':
                break;
            case 'Sort by price: low to high':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'Sort by price: high to low':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'Default sorting':
            default:
                filtered.sort((a, b) => a.product_name.localeCompare(b.product_name));
                break;
        }

        currentProducts = filtered;
        renderProducts(currentProducts);
    }

    sortSelect.addEventListener('change', filterAndRenderProducts);
    searchButton.addEventListener('click', filterAndRenderProducts);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterAndRenderProducts();
        }
    });
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active-category'));
            link.classList.add('active-category');
            filterAndRenderProducts();
        });
    });

    filterAndRenderProducts();
});