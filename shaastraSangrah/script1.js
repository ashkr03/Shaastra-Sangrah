let cart = [];
let total = 0;

function addToCart(itemName, price) {
	// Add item to cart array
    cart.push({ name: itemName, price: price });
    // Update UI
	total += price; //this line to update the total
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    document.getElementById('checkoutTotal').textContent = total.toFixed(2);
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.getElementsByClassName('product');
    for (let product of products) {
        const productName = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
        product.style.display = productName.includes(searchInput) ? 'inline-block' : 'none';
    }
}

function showCheckout() {
    document.getElementById("checkoutModal").style.display = "block";
    document.getElementById("checkoutTotal").innerText = document.getElementById("cartTotal").innerText;
}

function closeCheckout() {
    document.getElementById("checkoutModal").style.display = "none";
}

function cardPayment() {
    // Placeholder payment processing
    const status = document.getElementById("paymentStatus");
    status.style.color = 'green';
    status.innerText = "✅ Payment successful! Thank you.";
    setTimeout(() => {
        closeCard();
        document.getElementById("cartItems").innerHTML = "";
        document.getElementById("cartTotal").innerText = "0.00";
    }, 2000);
}


function logout() {
    // Show a beautiful thank you message
    const body = document.body;

    // Clear the page content
    body.innerHTML = '';

    // Create thank you message
    const message = document.createElement('div');
    message.style.display = 'flex';
    message.style.flexDirection = 'column';
    message.style.justifyContent = 'center';
    message.style.alignItems = 'center';
    message.style.height = '100vh';
    message.style.background = 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)';
    message.style.color = '#fff';
    message.style.fontFamily = 'Arial, sans-serif';
    message.innerHTML = `
        <h1 style="font-size: 3em; margin-bottom: 10px;">🙏 Thank You for Visiting!</h1>
        <p style="font-size: 1.5em;">We hope to see you again soon at <strong>Shaastra Sangrah</strong> 📚</p>
    `;

    body.appendChild(message);

    // Optional redirect after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html'; // Change this to your desired page
    }, 2000);
}

// Show upi form
document.getElementById('upi').addEventListener('click', () => {
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('selectupi').style.display = 'block';
});

function closeUpi() {
    document.getElementById("selectupi").style.display = "none";
}

// Show card form
document.getElementById('card').addEventListener('click', () => {
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('selectcard').style.display = 'block';
});

function closeCard() {
    document.getElementById("selectcard").style.display = "none";
}

// show upi payment info
function upiPayment() {
    // Placeholder payment processing
    const status = document.getElementById("paymentgo");
    status.style.color = 'green';
    status.innerText = "✅ Payment successful! Thank you.";
    setTimeout(() => {
        closeUpi();
        document.getElementById("cartItems").innerHTML = "";
        document.getElementById("cartTotal").innerText = "0.00";
    }, 2000);
}

//add or remove items from cart 
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₹${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})" style="margin-left: 5px; background-color: red; color: white; border: none; padding: 1px 3px; border-radius: 15px; cursor: pointer;">X</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cartTotal').textContent = total.toFixed(2);
    document.getElementById('checkoutTotal').textContent = total.toFixed(2);
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        total -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
    }
}