document.addEventListener('DOMContentLoaded', () => {

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

    function renderCartItems() {
        const cart = getCart();
        const cartTableBody = document.querySelector('.cart-items-table tbody');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
        const cartTableWrapper = document.querySelector('.cart-table-wrapper');
        const cartTotalsDiv = document.querySelector('.cart-totals');
        const cartSubtotalSpan = document.getElementById('cart-subtotal');
        const cartTotalSpan = document.getElementById('cart-total');
        const cartShippingSpan = document.getElementById('cart-shipping'); 

        if (!cartTableBody || !emptyCartMessage || !cartTableWrapper || !cartTotalsDiv || !cartSubtotalSpan || !cartTotalSpan) {
            console.error("One or more essential cart elements not found. Check your cart.html structure.");
            return;
        }

        cartTableBody.innerHTML = '';

        let subtotal = 0;
        const shippingCost = 0.00; 
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartTableWrapper.style.display = 'none';
            cartTotalsDiv.style.display = 'none';
        } else {
            emptyCartMessage.style.display = 'none';
            cartTableWrapper.style.display = 'block';
            cartTotalsDiv.style.display = 'block';

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="cart-product">
                        <img src="${item.image}" alt="${item.name}">
                        <span>${item.name}</span>
                    </td>
                    <td class="cart-price">$${item.price.toFixed(2)}</td>
                    <td class="cart-quantity">
                        <div class="quantity-controls">
                            <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                        </div>
                    </td>
                    <td class="cart-item-total">$${itemTotal.toFixed(2)}</td>
                    <td class="cart-remove">
                        <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                    </td>
                `;
                cartTableBody.appendChild(row);
            });
        }

        const total = subtotal + shippingCost;
        cartSubtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
        cartShippingSpan.textContent = `$${shippingCost.toFixed(2)}`;
        cartTotalSpan.textContent = `$${total.toFixed(2)}`;

        addQuantityChangeListeners();
        addRemoveItemListeners();
    }

    function addQuantityChangeListeners() {
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        const quantityInputs = document.querySelectorAll('.quantity-input');

        decreaseButtons.forEach(button => {
            button.removeEventListener('click', handleQuantityChange); 
            button.addEventListener('click', handleQuantityChange);
        });

        increaseButtons.forEach(button => {
            button.removeEventListener('click', handleQuantityChange); 
            button.addEventListener('click', handleQuantityChange);
        });

        quantityInputs.forEach(input => {
            input.removeEventListener('change', handleQuantityChange); 
            input.addEventListener('change', handleQuantityChange);
            input.removeEventListener('input', enforceMinQuantity); 
            input.addEventListener('input', enforceMinQuantity); 
        });
    }

    function handleQuantityChange(event) {
        const button = event.currentTarget;
        const itemId = button.dataset.id;
        const cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === itemId);

        if (itemIndex > -1) {
            let newQuantity;
            if (button.classList.contains('increase-quantity')) {
                newQuantity = cart[itemIndex].quantity + 1;
            } else if (button.classList.contains('decrease-quantity')) {
                newQuantity = cart[itemIndex].quantity - 1;
            } else if (button.classList.contains('quantity-input')) {
                newQuantity = parseInt(button.value);
            }

            if (isNaN(newQuantity) || newQuantity < 1) {
                newQuantity = 1;
            }

            cart[itemIndex].quantity = newQuantity;
            saveCart(cart);
            renderCartItems(); 
            updateCartHeader();
        }
    }

    function enforceMinQuantity(event) {
        const input = event.currentTarget;
        if (parseInt(input.value) < 1) {
            input.value = 1; 
        }
    }

    function addRemoveItemListeners() {
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.removeEventListener('click', handleRemoveItem); 
            button.addEventListener('click', handleRemoveItem);
        });
    }

    function handleRemoveItem(event) {
        const button = event.currentTarget;
        const itemId = button.dataset.id;
        let cart = getCart();

        cart = cart.filter(item => item.id !== itemId); 

        saveCart(cart);
        renderCartItems(); 
        updateCartHeader(); 
    }

    updateCartHeader(); 
    renderCartItems(); 
});