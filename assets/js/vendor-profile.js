// Vendor Profile Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize vendor profile page
    
    // Product filtering functionality
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    const productCards = document.querySelectorAll('.product-card');
    
    if (categoryFilter && sortBy) {
        // Add event listeners for filters
        categoryFilter.addEventListener('change', filterProducts);
        sortBy.addEventListener('change', filterProducts);
    }
    
    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const sortMethod = sortBy.value;
        
        // First filter by category
        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Then sort the visible products
        const visibleProducts = Array.from(productCards).filter(card => 
            card.style.display !== 'none'
        );
        
        visibleProducts.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.current-price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.current-price').textContent.replace('$', ''));
            
            switch(sortMethod) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'newest':
                    // This would ideally use actual product dates
                    return Math.random() - 0.5;
                case 'popular':
                default:
                    // Sort by rating (simplified)
                    const ratingA = a.querySelector('.stars').children.length;
                    const ratingB = b.querySelector('.stars').children.length;
                    return ratingB - ratingA;
            }
        });
        
        // Re-append products in new order
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            productsGrid.innerHTML = '';
            visibleProducts.forEach(product => {
                productsGrid.appendChild(product);
            });
        }
    }
    
    // Load more products functionality
    const loadMoreBtn = document.querySelector('.section-footer button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would fetch more products from an API
            this.textContent = 'No more products to load';
            this.disabled = true;
        });
    }
    
    // Write review button
    const writeReviewBtn = document.querySelector('.testimonial-cta .btn-primary');
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', function() {
            // This would open a review modal in a real implementation
            alert('Review form would open here');
        });
    }
    
    // Contact vendor button
    const contactVendorBtn = document.querySelector('.vendor-actions .btn-primary');
    if (contactVendorBtn) {
        contactVendorBtn.addEventListener('click', function() {
            // This would open a contact form in a real implementation
            alert('Contact form would open here');
        });
    }
    
    // Follow vendor button
    const followVendorBtn = document.querySelector('.vendor-actions .btn-outline');
    if (followVendorBtn) {
        followVendorBtn.addEventListener('click', function() {
            const isFollowing = this.classList.contains('following');
            
            if (isFollowing) {
                this.classList.remove('following');
                this.innerHTML = '<i class="fas fa-plus"></i> ' + (document.documentElement.lang === 'ar' ? 'متابعة' : 'Follow');
                // In a real app, you would send an API request to unfollow
            } else {
                this.classList.add('following');
                this.innerHTML = '<i class="fas fa-check"></i> ' + (document.documentElement.lang === 'ar' ? 'متابع' : 'Following');
                // In a real app, you would send an API request to follow
            }
        });
    }
    
    // Add to cart buttons
    document.querySelectorAll('.product-actions .btn-icon').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // This would add the product to cart in a real implementation
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Added ${productName} to cart`);
            
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            
            // Add animation to floating cart
            const floatingCart = document.getElementById('floating-cart');
            floatingCart.classList.add('pulse');
            setTimeout(() => {
                floatingCart.classList.remove('pulse');
            }, 300);
        });
    });
    
    // View details buttons
    document.querySelectorAll('.product-actions .btn-text').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // This would navigate to product page in a real implementation
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Navigating to ${productName} details page`);
        });
    });
    
    // Additional translations for vendor profile page
    const vendorTranslations = {
        en: {
            vendorName: "TechMart Electronics",
            verifiedVendor: "Verified Vendor",
            vendorLocation: "Shenzhen, China",
            memberSince: "Member since 2018",
            contactVendor: "Contact Now",
            followVendor: "Follow",
            aboutVendor: "About TechMart Electronics",
            vendorDescription1: "Founded in 2010, TechMart Electronics has grown from a small component supplier to a leading manufacturer and distributor of consumer electronics and smart devices. Our 50,000 sqm facility in Shenzhen produces over 2 million units annually, serving clients in 35 countries.",
            vendorDescription2: "We specialize in IoT devices, smart home solutions, and wearable technology. All our products undergo rigorous quality testing and comply with international standards including CE, FCC, and RoHS certifications.",
            feature1: "Minimum order: $500",
            feature2: "Lead time: 15-30 days",
            feature3: "Sample policy: Available",
            feature4: "Payment terms: T/T, L/C",
            contactInfo: "Contact Information",
            vendorWebsite: "www.techmart-electronics.com",
            vendorEmail: "sales@techmart-electronics.com",
            vendorPhone: "+86 123 4567 890",
            vendorWhatsapp: "Chat on WhatsApp",
            vendorFacebook: "TechMart Electronics",
            vendorAddress: "No. 123, Tech Park, Nanshan District, Shenzhen, China",
            certifications: "Certifications",
            vendorProducts: "Products by TechMart",
            filterByCategory: "Category:",
            allCategories: "All Categories",
            smartwatches: "Smartwatches",
            wirelessEarbuds: "Wireless Earbuds",
            smartHome: "Smart Home",
            sortBy: "Sort by:",
            mostPopular: "Most Popular",
            newest: "Newest",
            priceLowHigh: "Price: Low to High",
            priceHighLow: "Price: High to Low",
            bestSeller: "BEST SELLER",
            newArrival: "NEW",
            trending: "TRENDING",
            moq: "MOQ: {qty} units",
            viewDetails: "View Details",
            customerReviews: "Customer Reviews",
            basedOnReviews: "Based on {count} reviews",
            reviewTitle1: "Excellent quality and service",
            reviewText1: "We've been working with TechMart for 2 years now and their products consistently meet our quality standards. The X200 Pro smartwatch is particularly popular with our customers. Communication is always prompt and professional.",
            reviewTitle2: "Reliable supplier",
            reviewText2: "Ordered 500 units of the TWS500 earbuds and they arrived exactly as described. The sound quality is impressive for the price point. Had one minor issue with customs documentation which TechMart resolved quickly.",
            reviewTitle3: "Good value for money",
            reviewText3: "The smart bulbs work well with our home automation systems. Had a slightly longer lead time than expected but TechMart kept us informed throughout the process. Would recommend for bulk orders.",
            verifiedBuyer: "Verified Buyer",
            productReviewed: "Product: {product}",
            writeReview: "Write a Review",
            seeAllReviews: "See All Reviews",
            loadMore: "Load More Products"
        },
        ar: {
            vendorName: "تيك مارت للإلكترونيات",
            verifiedVendor: "بائع موثوق",
            vendorLocation: "شينزن، الصين",
            memberSince: "عضو منذ 2018",
            contactVendor: "اتصل الآن",
            followVendor: "متابعة",
            aboutVendor: "عن تيك مارت للإلكترونيات",
            vendorDescription1: "تأسست تيك مارت للإلكترونيات في عام 2010 ونمت من مورد صغير للمكونات إلى شركة رائدة في تصنيع وتوزيع الإلكترونيات الاستهلاكية والأجهزة الذكية. ينتج منشأنا البالغ مساحته 50,000 متر مربع في شينزن أكثر من مليوني وحدة سنوياً، ونخدم عملاء في 35 دولة.",
            vendorDescription2: "نحن متخصصون في أجهزة إنترنت الأشياء وحلول المنزل الذكي وتكنولوجيا الأجهزة القابلة للارتداء. تخضع جميع منتجاتنا لاختبارات جودة صارمة وتتوافق مع المعايير الدولية بما في ذلك شهادات CE وFCC وRoHS.",
            feature1: "الحد الأدنى للطلب: 500$",
            feature2: "وقت التسليم: 15-30 يوم",
            feature3: "سياسة العينات: متاحة",
            feature4: "شروط الدفع: تحويل بنكي، اعتماد مستندي",
            contactInfo: "معلومات التواصل",
            vendorWebsite: "www.techmart-electronics.com",
            vendorEmail: "sales@techmart-electronics.com",
            vendorPhone: "+86 123 4567 890",
            vendorWhatsapp: "محادثة واتساب",
            vendorFacebook: "تيك مارت للإلكترونيات",
            vendorAddress: "رقم 123، المنطقة التكنولوجية، منطقة نانشان، شينزن، الصين",
            certifications: "الشهادات",
            vendorProducts: "منتجات تيك مارت",
            filterByCategory: "التصنيف:",
            allCategories: "جميع التصنيفات",
            smartwatches: "الساعات الذكية",
            wirelessEarbuds: "سماعات لاسلكية",
            smartHome: "المنزل الذكي",
            sortBy: "ترتيب حسب:",
            mostPopular: "الأكثر شهرة",
            newest: "الأحدث",
            priceLowHigh: "السعر: من الأقل للأعلى",
            priceHighLow: "السعر: من الأعلى للأقل",
            bestSeller: "الأكثر مبيعاً",
            newArrival: "جديد",
            trending: "رائج",
            moq: "الحد الأدنى: {qty} وحدة",
            viewDetails: "عرض التفاصيل",
            customerReviews: "تقييمات العملاء",
            basedOnReviews: "بناءً على {count} تقييم",
            reviewTitle1: "جودة وخدمة ممتازة",
            reviewText1: "نعمل مع تيك مارت منذ عامين ومنتجاتهم تلتزم دائمًا بمعايير الجودة لدينا. الساعة الذكية X200 Pro تحظى بشعبية خاصة بين عملائنا. التواصل دائمًا سريع ومحترف.",
            reviewTitle2: "مورد موثوق",
            reviewText2: "طلبت 500 وحدة من سماعات TWS500 ووصلت تمامًا كما هو موضح. جودة الصوت مذهلة بالنسبة للسعر. كانت هناك مشكلة بسيطة في وثائق الجمارك قامت تيك مارت بحلها بسرعة.",
            reviewTitle3: "جيدة بالنسبة للسعر",
            reviewText3: "المصابيح الذكية تعمل بشكل جيد مع أنظمة المنزل الذكي لدينا. كان وقت التسليم أطول قليلاً من المتوقع لكن تيك مارت أبقانا على اطلاع طوال العملية. أوصي بها للطلبات الكبيرة.",
            verifiedBuyer: "مشتري موثوق",
            productReviewed: "المنتج: {product}",
            writeReview: "كتابة تقييم",
            seeAllReviews: "عرض جميع التقييمات",
            loadMore: "تحميل المزيد من المنتجات"
        }
    };
    
    // Merge translations with main translations object
    Object.keys(vendorTranslations.en).forEach(key => {
        if (!translations.en[key]) {
            translations.en[key] = vendorTranslations.en[key];
            translations.ar[key] = vendorTranslations.ar[key];
        }
    });
    
    // Update translations when language changes
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
    
    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('language', lang);
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang][key];
            if (translation) {
                if (translation.includes('<') || translation.includes('&')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
    }
});