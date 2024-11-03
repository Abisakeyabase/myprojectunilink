fetch('collection.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
)
        class ShoppingCart {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = 0;
        this.loadCart();
    }

    addToCart(product) {
        this.cartItems.push(product);
        this.updateLocalStorage();
        this.renderCart();
    }

    updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    loadCart() {
        this.renderCart();
    }

    renderCart() {
        const cartItemsList = document.getElementById('cartItems');
        cartItemsList.innerHTML = '';
        this.total = 0;

        this.cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(listItem);
            this.total += parseFloat(item.price);
        });

        document.getElementById('totalPrice').textContent = `Total: $${this.total.toFixed(2)}`;
    }
}

const shoppingCart = new ShoppingCart();

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const product = {
            id: productElement.dataset.id,
            name: productElement.dataset.name,
            price: productElement.dataset.price
        };
        shoppingCart.addToCart(product);
    });
});
