// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const categoryFilter = document.getElementById('category-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const sortBySelect = document.getElementById('sort-by');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const productCards = document.querySelectorAll('.product-card');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const floatingCart = document.getElementById('floating-cart');
    const cartCount = document.querySelector('.cart-count');
    
    // Cart items count
    let cartItemsCount = 0;
    
    // Filter products function
    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
        const sortBy = sortBySelect.value;
        
        // Filter by category and price
        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPrice = parseFloat(card.querySelector('.current-price').textContent.replace('$', ''));
            
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
            const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
            
            if (categoryMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Sort products
        const visibleProducts = Array.from(productCards).filter(card => card.style.display !== 'none');
        
        visibleProducts.sort((a, b) => {
            const aPrice = parseFloat(a.querySelector('.current-price').textContent.replace('$', ''));
            const bPrice = parseFloat(b.querySelector('.current-price').textContent.replace('$', ''));
            
            switch(sortBy) {
                case 'price-low':
                    return aPrice - bPrice;
                case 'price-high':
                    return bPrice - aPrice;
                case 'newest':
                    // Assuming newer products have higher data-aos-delay values
                    return (b.dataset.aosDelay || 0) - (a.dataset.aosDelay || 0);
                case 'rating':
                    // Sort by rating (implementation depends on your rating system)
                    return 0; // Placeholder
                default: // 'popular'
                    return 0; // Default order (as in HTML)
            }
        });
        
        // Reorder products in DOM
        const productsGrid = document.querySelector('.products-grid');
        visibleProducts.forEach(product => {
            productsGrid.appendChild(product);
        });
    }
    
    // Reset filters function
    function resetFilters() {
        categoryFilter.value = 'all';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        sortBySelect.value = 'popular';
        filterProducts();
    }
    
    // Add to cart function
    function addToCart(e) {
        e.preventDefault();
        cartItemsCount++;
        updateCartCount();
        
        // Add animation to cart button
        floatingCart.classList.add('pulse');
        setTimeout(() => {
            floatingCart.classList.remove('pulse');
        }, 300);
        
        // Here you would typically add the product to cart
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        console.log(`Added ${productName} to cart`);
    }
    
    // Update cart count display
    function updateCartCount() {
        cartCount.textContent = cartItemsCount;
        if (cartItemsCount > 0) {
            floatingCart.classList.add('has-items');
        } else {
            floatingCart.classList.remove('has-items');
        }
    }
    
    // Event listeners
    categoryFilter.addEventListener('change', filterProducts);
    minPriceInput.addEventListener('input', filterProducts);
    maxPriceInput.addEventListener('input', filterProducts);
    sortBySelect.addEventListener('change', filterProducts);
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Initialize filters
    filterProducts();
    
    // RTL/LTR adjustments
    function adjustForRTL() {
        if (document.documentElement.dir === 'rtl') {
            // Adjust product badge position for RTL
            document.querySelectorAll('.product-badge').forEach(badge => {
                badge.style.left = 'auto';
                badge.style.right = '10px';
            });
            
            // Adjust filter layout for RTL
            document.querySelector('.filter-bar').style.direction = 'rtl';
        }
    }
    
    // Call RTL adjustment function
    adjustForRTL();
    
    // Watch for language changes
    document.addEventListener('languageChange', adjustForRTL);
});