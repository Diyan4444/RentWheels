document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Search Functionality
    // ==========================================
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const vehicleBoxes = document.querySelectorAll(".vehicles_box");

    if (searchBtn && searchInput) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            vehicleBoxes.forEach(box => {
                const title = box.querySelector("h3").innerText.toLowerCase();
                if (title.includes(query)) {
                    box.style.display = "block"; 
                } else {
                    box.style.display = "none";
                }
            });
        };

        searchBtn.addEventListener("click", performSearch);
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") performSearch();
        });
    }

    // ==========================================
    // 2. Category Filter (Car, Bike, Scooter...)
    // ==========================================
    const categoryBoxes = document.querySelectorAll(".box[data-filter]");
    
    if (categoryBoxes.length > 0) {
        categoryBoxes.forEach(box => {
            box.addEventListener("click", (e) => {
                e.preventDefault(); 
                const filter = box.getAttribute("data-filter");
                
                vehicleBoxes.forEach(vBox => {
                    if (vBox.getAttribute("data-category") === filter) {
                        vBox.style.display = "block";
                    } else {
                        vBox.style.display = "none";
                    }
                });
            });
        });
    }

    // ==========================================
    // 3. Add to Cart (From Home Page)
    // ==========================================
    const cartButtons = document.querySelectorAll(".cart_1");
    
    cartButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const parentBox = e.target.closest(".vehicles_box");
            const title = parentBox.querySelector("h3").innerText;
            const priceText = parentBox.querySelector("h2").innerText; 
            const imageSrc = parentBox.querySelector("img").src;
            
            addToCart({ title, price: priceText, imageSrc });
            updateCartCount(); // <-- NEW: Updates the orange cart button immediately
            alert(`${title} has been added to your cart!`);
        });
    });

    // ==========================================
    // 4. Rent Now / Book (From Individual Pages)
    // ==========================================
    const btnBook = document.getElementById("btn-book");
    
    if (btnBook) {
        btnBook.addEventListener("click", (e) => {
            e.preventDefault();
            
            const title = document.querySelector("h1") ? document.querySelector("h1").innerText : document.title;
            const priceText = document.querySelector("h2") ? document.querySelector("h2").innerText : "Price at checkout";
            
            const images = document.querySelectorAll("img");
            let imageSrc = "";
            if (images.length > 1) {
                imageSrc = images[1].src; 
            } else if (images.length === 1) {
                imageSrc = images[0].src;
            }

            addToCart({ title, price: priceText, imageSrc });
            window.location.href = "cart.html"; 
        });
    }

    // --- LocalStorage Helper Function ---
    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem("rentWheelsCart")) || [];
        cart.push(item);
        localStorage.setItem("rentWheelsCart", JSON.stringify(cart));
    }

    // ==========================================
    // 5. Render Cart on cart.html
    // ==========================================
    const cartContainer = document.querySelector(".cart-container"); 
    
    // FIX: Removed the fragile URL check. Now it simply checks if the container exists!
    if (cartContainer) {
        renderCart();
    }

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem("rentWheelsCart")) || [];
        cartContainer.innerHTML = "<h1>Your Shopping Cart</h1><hr><br>";
            
        if (cart.length === 0) {
            cartContainer.innerHTML += "<p style='color: white;'>Your cart is currently empty.</p>";
        } else {
            const list = document.createElement("div");
            let totalAmount = 0; 

            cart.forEach((item, index) => {
                const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
                totalAmount += numericPrice;

                list.innerHTML += `
                <div style="background-color: rgba(0,0,0,0.8); border: 2px solid white; border-radius: 20px; padding: 20px; margin-bottom: 15px; display: flex; align-items: center; gap: 30px;">
                    <img src="${item.imageSrc}" style="width: 150px; border-radius: 10px;">
                    <div style="color: white;">
                        <h3>${item.title}</h3>
                         <h2 style="color: #ffdd00;">${item.price}</h2>
                        <button onclick="removeFromCart(${index})" style="background-color: #ff4c4c; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Remove</button>
                    </div>
                </div>
                `;
            });
            cartContainer.appendChild(list);
            
            cartContainer.innerHTML += `
                <div style="text-align: right; color: white; margin-top: 20px;">
                    <h2>Total Amount: <span style="color: #ffdd00;">₹${totalAmount} /day</span></h2>
                </div>
                <br><hr><br>
                <div style="text-align: right;">
                    <button id="checkoutBtn" class="dropbtn" style="background-color: #ffdd00; color: black; font-weight: bold; padding: 15px 30px; font-size: 20px; border-radius: 10px; cursor: pointer;">Proceed to Checkout</button>
                </div>
            `;

            document.getElementById("checkoutBtn").addEventListener("click", function() {
                this.innerText = "Processing...";
                this.style.backgroundColor = "#ccc";
                this.disabled = true;
                this.style.cursor = "not-allowed";

                alert("Payment processing...");

                setTimeout(() => {
                    alert("Payment Successful! Your ride is booked.");
                    localStorage.removeItem("rentWheelsCart"); 
                    renderCart(); 
                    updateCartCount(); // <-- NEW: Resets the navbar cart to empty
                }, 2000);
            });
        }
    }

    //CART CHanges
    function updateCartCount() {
        const cartBtn = document.getElementById("cart");
        if (cartBtn) {
            let cart = JSON.parse(localStorage.getItem("rentWheelsCart")) || [];
            if (cart.length > 0) {
                cartBtn.innerText = `Cart (${cart.length})`;
            } else {
                cartBtn.innerText = `Cart`;
            }
        }
    }

    // Call immediately so the number shows up as soon as the page loads
    updateCartCount();

    // Global Remove Function
    window.removeFromCart = function(index) {
        let cart = JSON.parse(localStorage.getItem("rentWheelsCart")) || [];
        cart.splice(index, 1); 
        localStorage.setItem("rentWheelsCart", JSON.stringify(cart));
        renderCart(); 
        updateCartCount(); // <-- NEW: Updates the navbar count when you delete an item
    };
});