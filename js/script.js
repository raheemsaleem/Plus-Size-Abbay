
    // Product Data
    const products = [
      // Abayas (Women)
      { id: 1, name: 'Classic Black Abaya', price: 89.99, category: 'abayas', subCategory: 'closed-abayas', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=415&q=80' },
      { id: 2, name: 'Embroidered Navy Abaya', price: 129.99, category: 'abayas', subCategory: 'embroidered', image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80' },
      { id: 3, name: 'Open Front Abaya - Beige', price: 99.99, category: 'abayas', subCategory: 'open-abayas', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=483&q=80' },
      { id: 4, name: 'Gold Embellished Abaya', price: 199.99, category: 'abayas', subCategory: 'embroidered', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80' },
      { id: 5, name: 'Closed Abaya - Burgundy', price: 109.99, category: 'abayas', subCategory: 'closed-abayas', image: 'https://images.unsplash.com/photo-1623607915241-a3151d59d9c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=479&q=80' },
      
      // Hijabs (Women)
      { id: 6, name: 'Premium Chiffon Hijab - Dusty Pink', price: 24.99, category: 'hijabs', subCategory: 'chiffon-hijabs', image: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 7, name: 'Jersey Hijab - 5 Pack (Assorted)', price: 34.99, category: 'hijabs', subCategory: 'jersey-hijabs', image: 'https://images.unsplash.com/photo-1584036668003-f9a7e1a2e7c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1935&q=80' },
      { id: 8, name: 'Printed Hijab - Floral Design', price: 29.99, category: 'hijabs', subCategory: 'printed-hijabs', image: 'https://images.unsplash.com/photo-1620912189865-1e8f33b4b7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80' },
      { id: 9, name: 'Chiffon Hijab - Emerald Green', price: 26.99, category: 'hijabs', subCategory: 'chiffon-hijabs', image: 'https://images.unsplash.com/photo-1605197629157-39e531d8c6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 10, name: 'Nido Jersey Hijab - Black', price: 19.99, category: 'hijabs', subCategory: 'jersey-hijabs', image: 'https://images.unsplash.com/photo-1610632380989-680fe9ff6d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80' },
      
      // Kids Hijabs (Separate Section)
      { id: 11, name: 'Kids Chiffon Hijab Set - Pink', price: 15.99, category: 'kids-hijabs', ageGroup: '3-6 years', image: 'https://images.unsplash.com/photo-1623851789881-852e3b5f5c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 12, name: 'Kids Jersey Hijab - Mint Green', price: 12.99, category: 'kids-hijabs', ageGroup: '7-10 years', image: 'https://images.unsplash.com/photo-1623851789881-852e3b5f5c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 13, name: 'Kids Printed Hijab - Butterflies', price: 14.99, category: 'kids-hijabs', ageGroup: '3-6 years', image: 'https://images.unsplash.com/photo-1623851789881-852e3b5f5c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 14, name: 'Kids Chiffon Hijab - Lavender', price: 16.99, category: 'kids-hijabs', ageGroup: '7-10 years', image: 'https://images.unsplash.com/photo-1623851789881-852e3b5f5c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' },
      { id: 15, name: 'Kids Hijab with Bow - Set of 2', price: 22.99, category: 'kids-hijabs', ageGroup: '3-8 years', image: 'https://images.unsplash.com/photo-1623851789881-852e3b5f5c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80' }
    ];

    // Cart array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Current WhatsApp number
    let currentWhatsApp = '+44 20 7946 0138';

    // Update cart count
    function updateCartCount() {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;
    }

    // Toggle country menu
    function toggleCountryMenu() {
      document.getElementById('countryMenu').classList.toggle('show');
    }

    // Select country
    function selectCountry(country, whatsapp) {
      currentWhatsApp = whatsapp;
      document.getElementById('displayWhatsApp').textContent = whatsapp;
      document.getElementById('countryMenu').classList.remove('show');
      
      // Update WhatsApp button link
      updateWhatsAppLink();
    }

    // Update WhatsApp link based on current number
    function updateWhatsAppLink() {
      const whatsappBtn = document.getElementById('whatsappBtn');
      const cleanNumber = currentWhatsApp.replace(/[^0-9]/g, '');
      whatsappBtn.href = `https://wa.me/${cleanNumber}`;
    }

    // Close country menu when clicking outside
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('countryMenu');
      const btn = document.querySelector('.country-select-btn');
      if (!btn.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
      }
    });

    // Display products in main section
    function displayProducts(productsToShow) {
      const container = document.getElementById('productsContainer');
      container.innerHTML = '';
      
      // Filter out kids products from main section
      const mainProducts = productsToShow.filter(p => p.category !== 'kids-hijabs');
      
      mainProducts.forEach(product => {
        const productCard = `
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="category-badge">${product.category === 'abayas' ? '👗 Abaya' : '🧕 Hijab'}</span>
              </div>
              <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">£${product.price.toFixed(2)}</div>
                <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                  <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">
                  <i class="fab fa-whatsapp"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += productCard;
      });
      
      // If no products found
      if (mainProducts.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h4>No products found</h4></div>';
      }
    }

    // Display kids products
    function displayKidsProducts() {
      const container = document.getElementById('kidsProductsContainer');
      const kidsProducts = products.filter(p => p.category === 'kids-hijabs');
      
      container.innerHTML = '';
      
      kidsProducts.forEach(product => {
        const productCard = `
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="category-badge kids-badge">👧 Kids</span>
              </div>
              <div class="product-info">
                <h3>${product.name}</h3>
                <p class="text-muted small">Age: ${product.ageGroup}</p>
                <div class="price">£${product.price.toFixed(2)}</div>
                <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                  <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">
                  <i class="fab fa-whatsapp"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += productCard;
      });
    }

    // Filter and sort products
    function filterProducts() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      const category = document.getElementById('categoryFilter').value;
      const sortBy = document.getElementById('sortFilter').value;

      let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || 
                               product.category === category || 
                               product.subCategory === category;
        return matchesSearch && matchesCategory;
      });

      // Sort products
      if (sortBy === 'priceLow') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'priceHigh') {
        filtered.sort((a, b) => b.price - a.price);
      }

      displayProducts(filtered);
    }

    // Show category
    function showCategory(category) {
      document.getElementById('categoryFilter').value = category;
      filterProducts();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // Add to cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      const existingItem = cart.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      
      // Show notification
      alert(`${product.name} added to cart!`);
    }

    // Buy now - direct WhatsApp
    function buyNow(productId) {
      const product = products.find(p => p.id === productId);
      
      let message = `Hello! I'm interested in purchasing:\n\n`;
      message += `*${product.name}*\n`;
      message += `Price: £${product.price.toFixed(2)}\n\n`;
      message += `Can you help me with this order?`;
      
      const cleanNumber = currentWhatsApp.replace(/[^0-9]/g, '');
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    // Remove from cart
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      if (window.location.hash === '#cart') {
        showCartPage();
      }
    }

    // Update quantity
    function updateQuantity(productId, change) {
      const item = cart.find(item => item.id === productId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          removeFromCart(productId);
        } else {
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          if (window.location.hash === '#cart') {
            showCartPage();
          }
        }
      }
    }

    // Show cart page
    function showCartPage() {
      let cartHtml = `
        <div class="container py-5">
          <h2 class="mb-4">Your Shopping Cart</h2>
      `;

      if (cart.length === 0) {
        cartHtml += `
          <div class="text-center py-5">
            <i class="fas fa-shopping-bag fa-4x text-muted mb-3"></i>
            <h4>Your cart is empty</h4>
            <p class="text-muted">Looks like you haven't added anything yet</p>
            <a href="#" class="btn btn-primary" onclick="showCategory('all')">Continue Shopping</a>
          </div>
        `;
      } else {
        cartHtml += '<div class="row">';
        
        cart.forEach(item => {
          cartHtml += `
            <div class="col-12">
              <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                  <div class="cart-item-title">${item.name}</div>
                  <div class="cart-item-price">£${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                  <span>${item.quantity}</span>
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="fw-bold mx-3">£${(item.price * item.quantity).toFixed(2)}</div>
                <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
              </div>
            </div>
          `;
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartHtml += `
          </div>
          <div class="row mt-4">
            <div class="col-md-6 ms-auto">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Order Summary</h5>
                  <div class="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>£${total.toFixed(2)}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-3">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between mb-3 fw-bold">
                    <span>Total:</span>
                    <span>£${total.toFixed(2)}</span>
                  </div>
                  <button class="btn btn-success w-100 mb-2" onclick="checkoutViaWhatsApp()">
                    <i class="fab fa-whatsapp me-2"></i>Order via WhatsApp
                  </button>
                  <button class="btn btn-primary w-100" onclick="showCheckout()">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      cartHtml += '</div>';
      
      document.getElementById('products').innerHTML = cartHtml;
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // Checkout via WhatsApp
    function checkoutViaWhatsApp() {
      if (cart.length === 0) return;
      
      let message = "Hello! I'd like to place an order for:\n\n";
      cart.forEach(item => {
        message += `• ${item.name} - ${item.quantity} x £${item.price}\n`;
      });
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      message += `\n*Total: £${total.toFixed(2)}*\n\n`;
      message += `Please confirm my order. Thank you!`;
      
      const cleanNumber = currentWhatsApp.replace(/[^0-9]/g, '');
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    // Show checkout
    function showCheckout() {
      let checkoutHtml = `
        <div class="container py-5">
          <h2 class="mb-4">Checkout</h2>
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Shipping Information</h5>
                  <form id="checkoutForm" onsubmit="return validateCheckout(event)">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
                      </div>
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control" id="checkoutEmail" placeholder="Email" required>
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="address" placeholder="Address" required>
                    </div>
                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <input type="text" class="form-control" id="city" placeholder="City" required>
                      </div>
                      <div class="col-md-4 mb-3">
                        <input type="text" class="form-control" id="postalCode" placeholder="Postal Code" required>
                      </div>
                      <div class="col-md-4 mb-3">
                        <input type="text" class="form-control" id="country" placeholder="Country" value="United Kingdom" required>
                      </div>
                    </div>
                    
                    <h5 class="card-title mt-4 mb-3">Payment Information</h5>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="cardNumber" placeholder="Card Number" required>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY" required>
                      </div>
                      <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="cvv" placeholder="CVV" required>
                      </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100 mt-3">Place Order</button>
                  </form>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-3">Order Summary</h5>
                  ${cart.map(item => `
                    <div class="d-flex justify-content-between mb-2">
                      <span>${item.name} x${item.quantity}</span>
                      <span>£${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  `).join('')}
                  <hr>
                  <div class="d-flex justify-content-between fw-bold">
                    <span>Total:</span>
                    <span>£${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      document.getElementById('products').innerHTML = checkoutHtml;
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // Validate contact form
    function validateContactForm(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
      } else {
        alert('Please fill in all fields');
      }
      
      return false;
    }

    // Validate checkout
    function validateCheckout(event) {
      event.preventDefault();
      
      const firstName = document.getElementById('firstName')?.value;
      const lastName = document.getElementById('lastName')?.value;
      const email = document.getElementById('checkoutEmail')?.value;
      const address = document.getElementById('address')?.value;
      const city = document.getElementById('city')?.value;
      const postalCode = document.getElementById('postalCode')?.value;
      const cardNumber = document.getElementById('cardNumber')?.value;
      const expiryDate = document.getElementById('expiryDate')?.value;
      const cvv = document.getElementById('cvv')?.value;
      
      if (firstName && lastName && email && address && city && postalCode && cardNumber && expiryDate && cvv) {
        alert('Order placed successfully! Thank you for your purchase.');
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Redirect to home
        window.location.hash = '#home';
        location.reload();
      } else {
        alert('Please fill in all fields');
      }
      
      return false;
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Initialize
    displayProducts(products);
    displayKidsProducts();
    updateCartCount();
    updateWhatsAppLink();
    
    // Handle back to home
    if (window.location.hash === '#home') {
      location.reload();
    }
 