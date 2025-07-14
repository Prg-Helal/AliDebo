/**
 * Product Details Page - Enhanced JavaScript
 * Integrates with main site script
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== Initialize =====
    initProductPage();
    
    // Integrate with main site functionality
    if (typeof initMainSite === 'function') {
        initMainSite();
    }
});

// ===== Product Page Functions =====
function initProductPage() {
    // Initialize all product page components
    initProductGallery();
    initProductTabs();
    initQuantitySelector();
    initAddToCart();
    initWishlist();
    initSellerActions();
    initRelatedProducts();
    
    // Additional initializations
    initImageZoom();
    initReviewForm();
    initShippingCalculator();
}

// ===== Product Gallery =====
function initProductGallery() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                const newImageSrc = this.getAttribute('data-image');
                if (mainImage) {
                    mainImage.src = newImageSrc;
                    mainImage.alt = this.querySelector('img').alt;
                    
                    // Add temporary animation
                    mainImage.classList.add('image-switch');
                    setTimeout(() => {
                        mainImage.classList.remove('image-switch');
                    }, 300);
                }
            });
        });
    }
}

// ===== Product Tabs =====
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Add active class to clicked button and corresponding pane
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                const targetPane = document.getElementById(tabId);
                
                if (targetPane) {
                    targetPane.classList.add('active');
                    
                    // Trigger AOS refresh for animations in new tab
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                }
            });
        });
        
        // Activate first tab by default
        if (tabButtons[0]) {
            tabButtons[0].click();
        }
    }
}

// ===== Quantity Selector =====
function initQuantitySelector() {
    const quantityInput = document.querySelector('.quantity-input');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    
    if (quantityInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                animateQuantityChange();
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
                animateQuantityChange();
            }
        });
        
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            } else if (value > 10) {
                this.value = 10;
            }
            animateQuantityChange();
        });
    }
}

function animateQuantityChange() {
    const quantityInput = document.querySelector('.quantity-input');
    if (quantityInput) {
        quantityInput.classList.add('quantity-change');
        setTimeout(() => {
            quantityInput.classList.remove('quantity-change');
        }, 300);
    }
}

// ===== Add to Cart Functionality =====
function initAddToCart() {
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.querySelector('.quantity-input').value) || 1;
            const productId = 'prod-123'; // Should be dynamic in real implementation
            const productName = document.querySelector('.product-header h1').textContent;
            const productPrice = parseFloat(document.querySelector('.current-price').textContent.replace(/[^0-9.]/g, ''));
            const productImage = document.getElementById('mainProductImage').src;
            
            // Create product object
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: quantity,
                image: productImage
            };
            
            // Add to cart (integrate with main cart functionality)
            if (typeof addProductToCart === 'function') {
                addProductToCart(product);
            } else {
                // Fallback if main cart function not available
                addToCartFallback(product);
            }
            
            // Visual feedback
            this.classList.add('added-to-cart');
            setTimeout(() => {
                this.classList.remove('added-to-cart');
            }, 2000);
            
            // Update cart count
            updateCartCount();
        });
    }
}

function addToCartFallback(product) {
    // Simple fallback implementation
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if product already in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cartItems.push(product);
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show notification
    showToast(`${product.quantity} ${product.name} added to cart!`);
}

// ===== Wishlist Functionality =====
function initWishlist() {
    const wishlistBtn = document.querySelector('.btn-wishlist');
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            const productId = 'prod-123'; // Should be dynamic
            const isInWishlist = this.classList.contains('in-wishlist');
            
            if (isInWishlist) {
                // Remove from wishlist
                this.classList.remove('in-wishlist');
                this.innerHTML = '<i class="far fa-heart"></i> <span data-i18n="wishlist">Wishlist</span>';
                showToast('Removed from wishlist');
            } else {
                // Add to wishlist
                this.classList.add('in-wishlist');
                this.innerHTML = '<i class="fas fa-heart"></i> <span data-i18n="inWishlist">In Wishlist</span>';
                showToast('Added to wishlist');
            }
            
            // Update translations if language switched
            if (typeof setLanguage === 'function') {
                setLanguage(currentLang);
            }
        });
    }
}

// ===== Seller Actions =====
function initSellerActions() {
    const contactSellerBtn = document.querySelector('.btn-contact-seller');
    const viewStoreBtn = document.querySelector('.btn-view-store');
    
    if (contactSellerBtn) {
        contactSellerBtn.addEventListener('click', function() {
            // Implementation for contacting seller
            showModal('Contact Seller', 'Contact form would appear here');
        });
    }
    
    if (viewStoreBtn) {
        viewStoreBtn.addEventListener('click', function() {
            // Redirect to seller store
            window.location.href = 'seller-store.html';
        });
    }
}

// ===== Related Products =====
function initRelatedProducts() {
    const relatedProducts = document.querySelectorAll('.related-products .product-card');
    
    relatedProducts.forEach(product => {
        product.addEventListener('click', function(e) {
            // Don't redirect if clicked on buttons
            if (!e.target.closest('.btn-icon, .btn-text')) {
                const productId = this.getAttribute('data-product-id');
                window.location.href = `product-details.html?id=${productId}`;
            }
        });
    });
}

// ===== Image Zoom =====
function initImageZoom() {
    const mainImage = document.getElementById('mainProductImage');
    
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            // Create zoom overlay
            const zoomOverlay = document.createElement('div');
            zoomOverlay.className = 'image-zoom-overlay';
            
            // Create zoomed image
            const zoomedImg = document.createElement('img');
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            zoomedImg.className = 'zoomed-image';
            
            // Add to overlay
            zoomOverlay.appendChild(zoomedImg);
            
            // Add to body
            document.body.appendChild(zoomOverlay);
            
            // Close on click
            zoomOverlay.addEventListener('click', function() {
                document.body.removeChild(this);
            });
        });
    }
}

// ===== Review Form =====
function initReviewForm() {
    const reviewForm = document.getElementById('review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const review = {
                name: formData.get('name'),
                rating: formData.get('rating'),
                title: formData.get('title'),
                review: formData.get('review')
            };
            
            // In a real app, you would send this to your server
            console.log('Review submitted:', review);
            
            // Show success message
            showToast('Thank you for your review!');
            
            // Reset form
            this.reset();
        });
    }
}

// ===== Shipping Calculator =====
function initShippingCalculator() {
    const shippingCalculator = document.getElementById('shipping-calculator');
    
    if (shippingCalculator) {
        shippingCalculator.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get selected shipping method
            const shippingMethod = this.querySelector('input[name="shipping"]:checked');
            
            if (shippingMethod) {
                const shippingCost = shippingMethod.value;
                showToast(`Shipping cost: $${shippingCost}`);
            }
        });
    }
}

// ===== Helper Functions =====
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    // Add to body
    document.body.appendChild(toast);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function showModal(title, content) {
    // Implementation for modal dialog
    console.log(`Modal: ${title} - ${content}`);
    // In a real implementation, you would show a modal dialog
}

function updateCartCount() {
    // Integrate with main cart functionality
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    } else {
        // Fallback implementation
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            if (totalItems > 0) {
                document.querySelector('.floating-cart').classList.add('has-items');
            } else {
                document.querySelector('.floating-cart').classList.remove('has-items');
            }
        }
    }
}

// ===== CSS for JS Components =====
const productDetailsStyles = `
/* Dynamic styles for product page */
.image-switch {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0.5; }
    to { opacity: 1; }
}

.quantity-change {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.added-to-cart {
    background-color: var(--success-color) !important;
    border-color: var(--success-color) !important;
}

.in-wishlist {
    color: var(--error-color);
    border-color: var(--error-color);
}

.toast-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--secondary-color);
    color: white;
    padding: 12px 24px;
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-md);
    z-index: 1000;
    animation: slideUp 0.3s ease;
}

.toast-notification.fade-out {
    animation: fadeOut 0.3s ease;
}

@keyframes slideUp {
    from { transform: translateX(-50%) translateY(20px); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

.image-zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    cursor: zoom-out;
}

.zoomed-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}
`;

// Add styles to head
const styleElement = document.createElement('style');
styleElement.textContent = productDetailsStyles;
document.head.appendChild(styleElement);