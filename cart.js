document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items-table tbody');
    const cartTotalsContainer = document.querySelector('.cart-totals');
    const emptyCartMessage = document.querySelector('.empty-cart-message'); 

    const getCart = () => {
        const cartString = localStorage.getItem('shoppingCart');
        return cartString ? JSON.parse(cartString) : [];
    };

    const saveCart = (cart) => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        renderCart(); 
        updateCartHeader(); 
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


    const renderCart = () => {
        const cart = getCart();
        cartItemsContainer.innerHTML = ''; 
        let subtotal = 0;

        if (cart.length === 0) {
            if (emptyCartMessage) {
                emptyCartMessage.style.display = 'block'; 
            }
            if (cartTotalsContainer) {
                cartTotalsContainer.style.display = 'none'; 
            }
            return; 
        } else {
            if (emptyCartMessage) {
                emptyCartMessage.style.display = 'none'; 
            }
            if (cartTotalsContainer) {
                cartTotalsContainer.style.display = 'block'; 
            }
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; vertical-align: middle; margin-right: 10px;">
                    ${item.name}
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-product-id="${item.id}">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-product-id="${item.id}" readonly>
                        <button class="quantity-btn increase" data-product-id="${item.id}">+</button>
                    </div>
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-item-btn" data-product-id="${item.id}"><i class="fas fa-times-circle"></i></button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        const shipping = 5.00; 
        const total = subtotal + shipping;

        document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('cart-shipping').textContent = shipping.toFixed(2);
        document.getElementById('cart-total').textContent = total.toFixed(2);

        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', (e) => updateQuantity(e.target.dataset.productId, 1));
        });
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', (e) => updateQuantity(e.target.dataset.productId, -1));
        });
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => removeItem(e.target.closest('button').dataset.productId));
        });
    };

    const updateQuantity = (productId, change) => {
        let cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === productId);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity < 1) {
                cart[itemIndex].quantity = 1; 
            }
            saveCart(cart); 
        }
    };

    const removeItem = (productId) => {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart); 
    };

    renderCart();
    updateCartHeader(); 
});