// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const footerThemeToggle = document.getElementById('footer-theme-toggle');
const langButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("sidebarOverlay");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("mobileSidebar");
const floatingCart = document.getElementById('floating-cart');
const heroSlider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dotsContainer = document.querySelector('.slider-dots');
const cartCount = document.querySelector('.cart-count');

// Internationalization
const translations = {
    en: {
        logoText: "Ali Debo",
        home: "Home",
        why: "Why Aly Dibo?",
        categories: "Categories",
        stories: "Success Stories",
        products: "Products",
        sell: "Sell With Us",
        login: "Login",
        register: "Add Company",
        heroTitle: `Activate your trade. Expand your reach.
<span class="highlight" data-i18n="hero_title_span">Go beyond borders.</span>

`, hero_subtitle: `Ali Dibo is the gateway between trusted companies and real customers. Discover authentic products and grow your business with confidence.`,
        hero_cta_shop: `Start Shopping`,
        hero_cta_sell: `Start Selling`,
        browseNow: "Browse Now",
        learnMore: "Learn More",
        heroTitle2: "Expand Your Business Reach",
        heroText2: "Access thousands of verified buyers looking for products like yours. Grow your sales with our powerful marketplace platform.",
        startSelling: "Start Selling",
        sellerGuide: "Seller Guide",
        heroTitle3: "Bulk Purchasing Made Simple",
        heroText3: "Get the best deals when you buy in volume. Our platform makes wholesale purchasing efficient and transparent.",
        sliderText1: "Explore Markets",
        sliderText2: "Expand Your Reach",
        sliderText3: "Trusted Companies",
        exploreDeals: "Explore Deals",
        requestQuote: "Request Quote",
        whyTitle: "Why Choose Aly Dibo?",
        whySubtitle: "The trusted platform connecting businesses with quality suppliers",
        why1Title: "Verified Suppliers",
        why1Text: "All suppliers undergo strict verification to ensure product quality and business legitimacy.",
        why2Title: "Competitive Pricing",
        why2Text: "Get the best wholesale prices by connecting directly with manufacturers and distributors.",
        why3Title: "Global Reach",
        why3Text: "Access suppliers and buyers from multiple countries, all in one convenient platform.",
        why4Title: "Dedicated Support",
        why4Text: "Our team is available to assist with transactions, disputes, and any platform questions.",
        missionTitle: "Our Mission",
        missionText: "At Aly Dibo, we're revolutionizing wholesale trade by removing barriers between buyers and sellers. Our platform provides the tools, security, and network needed to grow your business efficiently in today's competitive market. We believe in transparent, fair trade that benefits all parties.",
        joinNow: "Join Now",
        categoriesTitle: "Product Categories",
        categoriesSubtitle: "Browse our extensive range of wholesale products",
        popular: "Popular",
        new: "New",
        trending: "Trending",
        category1: "Electronics",
        category1Desc: "From components to finished devices",
        category2: "Textiles & Apparel",
        category2Desc: "Fabrics, clothing, and accessories",
        category3: "Food & Beverage",
        category3Desc: "Wholesale food products",
        category4: "Furniture",
        category4Desc: "Home and office solutions",
        category5: "Beauty & Personal Care",
        category5Desc: "Cosmetics and hygiene products",
        category6: "Industrial Supplies",
        category6Desc: "Tools, equipment, and materials",
        exploreAll: "Explore All Categories",
        storiesTitle: "Success Stories",
        storiesSubtitle: "Businesses growing with Aly Dibo",
        story1: "\"Aly Dibo helped us expand our supplier network across three new countries. Our procurement costs decreased by 18% while improving product quality.\"",
        story2: "\"Since joining Aly Dibo, we've secured contracts with 12 new wholesale buyers. The platform's escrow service gives us payment security we didn't have before.\"",
        story3: "\"Finding reliable international suppliers for specialty ingredients was challenging until we discovered Aly Dibo. Now we source directly from producers with full traceability.\"",
        viewProducts: "View their products",
        yourStory: "Your story could be here",
        joinPlatform: "Join our platform and start growing your wholesale business today",
        registerCompany: "Register Your Company",
        productsTitle: "Featured Products",
        productsSubtitle: "Quality wholesale products available now",
        product1: "Smartwatch X200 Pro",
        product2: "Organic Cotton T-shirts",
        product3: "Premium Arabica Coffee",
        product4: "Ergonomic Office Chair",
        product5: "Natural Skincare Set",
        product6: "Professional Tool Kit",
        by: "by",
        contactPrice: "Contact for price",
        unit: "/unit",
        view: "View",
        viewAll: "View All Products",
        sellTitle: "Start Selling on Aly Dibo Today",
        sellText: "Join thousands of suppliers reaching new customers and growing their wholesale business. Our platform provides the tools, visibility, and security you need to succeed.",
        sellFeature1: "Grow your sales",
        sellFeature2: "Reach new buyers",
        sellFeature3: "Secure transactions",
        newsletterTitle: "Stay Updated",
        newsletterText: "Subscribe to our newsletter for the latest products, deals, and wholesale insights.",
        subscribe: "Subscribe",
        footerLinks1: "Quick Links",
        footerLinks2: "Company",
        footerContact: "Contact Us",
        footerAbout: "Aly Dibo connects wholesale buyers with trusted suppliers across multiple industries and regions.",
        about: "About Us",
        careers: "Careers",
        blog: "Blog",
        contact: "Contact",
        faq: "FAQ",
        footerAddress: "123 Business District, Dubai, UAE",
        rights: "All rights reserved."
    },
    ar: {
        logoText: "علي ديبو",
        home: "الرئيسية",
        why: "لماذا علي ديبو؟",
        categories: "الفئات",
        stories: "قصص النجاح",
        products: "المنتجات",
        sell: "بيع معنا",
        login: "تسجيل الدخول",
        register: "سجل شركتك",
        heroTitle: `                        فعّل تجارتك. وسّع انتشارك. <span class="highlight" data-i18n="heroTitlSspan">وانطلق بلا حدود.</span>
`,
        hero_subtitle: `علي ديبو هو الجسر بين الشركات الموثوقة والعملاء الحقيقيين. اكتشف منتجات أصلية ونمِّ عملك بثقة.`,
        hero_cta_shop: `ابدأ التسوق`,
        sliderText1: "اكتشف الأسواق",
        sliderText2: "وسع انتشارك",
        sliderText3: "شركات موثوقة",
        hero_cta_sell: `ابدأ البيع`,
        browseNow: "تصفح الآن",
        learnMore: "تعلم المزيد",
        heroTitle2: "وسع نطاق عملك",
        heroText2: "الوصول إلى الآلاف من المشترين المعتمدين الذين يبحثون عن منتجات مثل منتجاتك. نم مبيعاتك مع منصة السوق القوية الخاصة بنا.",
        startSelling: "ابدأ البيع",
        sellerGuide: "دليل البائع",
        heroTitle3: "الشراء بالجملة بكل بساطة",
        heroText3: "احصل على أفضل الصفقات عند الشراء بكميات كبيرة. تجعل منصتنا عملية الشراء بالجملة فعالة وشفافة.",
        exploreDeals: "استكشف العروض",
        requestQuote: "طلب عرض سعر",
        whyTitle: "لماذا تختار علي ديبو؟",
        whySubtitle: "المنصة الموثوقة التي تربط الشركات بموردين ذوي جودة",
        why1Title: "موردون موثوق بهم",
        why1Text: "يخضع جميع الموردين لتحقق صارم لضمان جودة المنتج وشرعية العمل.",
        why2Title: "أسعار تنافسية",
        why2Text: "احصل على أفضل أسعار الجملة من خلال الاتصال المباشر بالشركات المصنعة والموزعين.",
        why3Title: "وصول عالمي",
        why3Text: "الوصول إلى الموردين والمشترين من دول متعددة، كل ذلك في منصة واحدة مريحة.",
        why4Title: "دعم مخصص",
        why4Text: "فريقنا متاح للمساعدة في المعاملات والنزاعات وأي استفسارات حول المنصة.",
        missionTitle: "مهمتنا",
        missionText: "في علي ديبو، نحن نحدث ثورة في تجارة الجملة من خلال إزالة الحواجز بين المشترين والبائعين. توفر منصتنا الأدوات والأمان والشبكة اللازمة لنمو عملك بكفاءة في سوق اليوم التنافسي. نحن نؤمن بالتجارة العادلة والشفافة التي تعود بالنفع على جميع الأطراف.",
        joinNow: "انضم الآن",
        categoriesTitle: "فئات المنتجات",
        categoriesSubtitle: "تصفح مجموعة واسعة من منتجات الجملة لدينا",
        popular: "شائع",
        new: "جديد",
        trending: "رائج",
        category1: "الإلكترونيات",
        category1Desc: "من المكونات إلى الأجهزة النهائية",
        category2: "المنسوجات والملابس",
        category2Desc: "الأقمشة والملابس والاكسسوارات",
        category3: "الطعام والمشروبات",
        category3Desc: "منتجات غذائية بالجملة",
        category4: "الأثاث",
        category4Desc: "حلول للمنزل والمكتب",
        category5: "الجمال والعناية الشخصية",
        category5Desc: "مستحضرات التجميل ومنتجات النظافة",
        category6: "المستلزمات الصناعية",
        category6Desc: "الأدوات والمعدات والمواد",
        exploreAll: "استكشف جميع الفئات",
        storiesTitle: "قصص النجاح",
        storiesSubtitle: "شركات تنمو مع علي ديبو",
        story1: "\"ساعدنا علي ديبو في توسيع شبكة الموردين لدينا عبر ثلاث دول جديدة. انخفضت تكاليف التوريد لدينا بنسبة 18٪ مع تحسين جودة المنتج.\"",
        story2: "\"منذ انضمامنا إلى علي ديبو، حصلنا على عقود مع 12 مشتري جملة جديد. تمنحنا خدمة الضمان في المنصة أمانًا في الدفع لم يكن لدينا من قبل.\"",
        story3: "\"كان العثور على موردين دوليين موثوق بهم للمكونات الخاصة أمرًا صعبًا حتى اكتشفنا علي ديبو. الآن نحصل على المنتجات مباشرة من المنتجين مع تتبع كامل.\"",
        viewProducts: "عرض منتجاتهم",
        yourStory: "قصتك يمكن أن تكون هنا",
        joinPlatform: "انضم إلى منصتنا وابدأ في تنمية عملك بالجملة اليوم",
        registerCompany: "سجل شركتك",
        productsTitle: "منتجات مميزة",
        productsSubtitle: "منتجات جملة عالية الجودة متاحة الآن",
        product1: "ساعة ذكية X200 Pro",
        product2: "قمصان قطنية عضوية",
        product3: "قهوة أرابيكا ممتازة",
        product4: "كرسي مكتب مريح",
        product5: "مجموعة العناية بالبشرة الطبيعية",
        product6: "مجموعة أدوات محترفة",
        by: "بواسطة",
        contactPrice: "اتصل للسعر",
        unit: "/للقطعة",
        view: "عرض",
        viewAll: "عرض جميع المنتجات",
        sellTitle: "ابدأ البيع على علي ديبو اليوم",
        sellText: "انضم إلى الآلاف من الموردين الذين يصلون إلى عملاء جدد وينمون أعمالهم بالجملة. توفر منصتنا الأدوات والرؤية والأمان الذي تحتاجه للنجاح.",
        sellFeature1: "نم مبيعاتك",
        sellFeature2: "الوصول إلى مشترين جدد",
        sellFeature3: "معاملات آمنة",
        newsletterTitle: "ابق على اطلاع",
        newsletterText: "اشترك في نشرتنا الإخبارية للحصول على أحدث المنتجات والعروض ورؤى الجملة.",
        subscribe: "اشترك",
        footerLinks1: "روابط سريعة",
        footerLinks2: "الشركة",
        footerContact: "اتصل بنا",
        footerAbout: "يوفر علي ديبو اتصالًا بين مشتري الجملة والموردين الموثوق بهم عبر صناعات ومناطق متعددة.",
        about: "عننا",
        careers: "وظائف",
        blog: "مدونة",
        contact: "اتصال",
        faq: "الأسئلة الشائعة",
        footerAddress: "123 منطقة الأعمال، دبي، الإمارات",
        rights: "جميع الحقوق محفوظة."
    }
};
// Current language
let currentLang = 'en';

// Cart items count
let cartItemsCount = 0;

// Theme Management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update toggle button icon
    const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    if (footerThemeToggle) {
        footerThemeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Language Management
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', lang);

    // Update active button
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            if (translation.includes('<') || translation.includes('&')) {
                el.innerHTML = translation; // Use innerHTML for rich text
            } else {
                el.textContent = translation;
            }
        }
    });
}


let slideIndex = 0;
const heroSlides = document.querySelectorAll('#heroSliderMobile .slide');

function showSlides() {
    heroSlides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slideIndex = (slideIndex + 1) % heroSlides.length;
    heroSlides[slideIndex].classList.add('active');
}

// أول Slide
if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(showSlides, 3000); // كل 3 ثواني
}

// Hero Slider
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Update dots
    const dots = document.querySelectorAll('.slider-dots .dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetSlideInterval();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetSlideInterval();
}

function createDots() {
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            resetSlideInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Cart Management
function updateCartCount() {
    cartCount.textContent = cartItemsCount;
    if (cartItemsCount > 0) {
        floatingCart.classList.add('has-items');
    } else {
        floatingCart.classList.remove('has-items');
    }
}

function addToCart() {
    cartItemsCount++;
    updateCartCount();

    // Add animation to cart button
    floatingCart.classList.add('animate-bounce');
    setTimeout(() => {
        floatingCart.classList.remove('animate-bounce');
    }, 1000);
}

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// غلق السايد بار لما تدوس برا
document.addEventListener("click", (e) => {
    if (
        sidebar.classList.contains("active") &&
        !e.target.closest(".mobile-sidebar") &&
        !e.target.closest(".hamburger")
    ) {
        sidebar.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeSidebarMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}


hamburger.addEventListener("click", openSidebar);
overlay.addEventListener("click", closeSidebarMenu);
closeSidebar.addEventListener("click", closeSidebarMenu);

document.documentElement.classList.add('no-transition');

window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('mobileSidebar');
    if (sidebar) {
        sidebar.classList.add('ready');
    }

    // إزالة الترانزيشن بعد أول فريم
    setTimeout(() => {
        document.documentElement.classList.remove('no-transition');
    }, 50);
});


// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate, .animate-up');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });
}

// Product card hover effects
function setupProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.product-image img').style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.product-image img').style.transform = 'scale(1)';
        });
    });
}

// Initialize
function init() {
    // Set theme from localStorage or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    // Set language from localStorage or browser
    const savedLang = localStorage.getItem('language') ||
        (navigator.language.startsWith('ar') ? 'ar' : 'en');
    setLanguage(savedLang);

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize cart
    updateCartCount();

    // Add event listeners
    setupEventListeners();

    // Trigger initial animation check
    animateOnScroll();
}

// Setup all event listeners
function setupEventListeners() {
    // Theme toggles
    themeToggle.addEventListener('click', toggleTheme);
    if (footerThemeToggle) {
        footerThemeToggle.addEventListener('click', toggleTheme);
    }

    // Language switcher
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Mobile menu
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', handleClickOutside);

    // Slider controls
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Add to cart buttons
    document.querySelectorAll('.btn-icon').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    // Floating cart click
    floatingCart.addEventListener('click', () => {
        // Here you would typically open a cart modal
        console.log('Cart clicked');
    });

    // Scroll events
    window.addEventListener('scroll', animateOnScroll);

    // Smooth scrolling
    setupSmoothScrolling();

    // Product hover effects
    setupProductHoverEffects();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('mobileSidebar');
    if (sidebar) {
        sidebar.classList.add('ready');
    }
});
