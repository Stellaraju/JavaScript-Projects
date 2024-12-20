// Initialize the cart as an empty array
let cart = [];

// Function to add a pizza to the cart
function addToCart(pizzaName, price) {
    // Add pizza to cart
    cart.push({ name: pizzaName, price: price });

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart display
    cartItemsContainer.innerHTML = '';

    // If the cart is empty, show a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items added to the cart yet.</p>';
    } else {
        // Show the items in the cart
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItemsContainer.appendChild(itemElement);
        });

        // Update total price
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        totalPriceElement.textContent = `Total: $${totalPrice}`;
    }
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}
