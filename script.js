// ========== DYNAMIC FOOTER WITH CURRENT YEAR AND DATE/TIME ==========
function updateFooterDateTime() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const dateTimeElement = document.getElementById('footerDateTime');
    if (dateTimeElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formattedDateTime = now.toLocaleDateString('en-US', options);
        dateTimeElement.textContent = `Last updated: ${formattedDateTime}`;

        // Update time every second if in view
        setInterval(() => {
            const updated = new Date();
            const newTime = updated.toLocaleDateString('en-US', options);
            dateTimeElement.textContent = `Last updated: ${newTime}`;
        }, 1000);
    }
}

updateFooterDateTime();

// ========== DEVICE DETECTION & MOBILE-FIRST HANDLING ==========
function detectDeviceAndOptimize() {
    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const getScreenSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth <= 768,
            isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
            isDesktop: window.innerWidth > 1024
        };
    };

    const screenSize = getScreenSize();
    const isMobile = isMobileDevice() || screenSize.isMobile;

    // Add device info to body for CSS hooks
    if (isMobile) {
        document.body.className += ' mobile-device';
    } else if (screenSize.isTablet) {
        document.body.className += ' tablet-device';
    } else {
        document.body.className += ' desktop-device';
    }

    // Detect OS
    const getOS = () => {
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf('Win') > -1) return 'Windows';
        if (userAgent.indexOf('Mac') > -1) return 'macOS';
        if (userAgent.indexOf('X11') > -1) return 'Linux';
        if (userAgent.indexOf('Android') > -1) return 'Android';
        if (userAgent.indexOf('like Mac') > -1) return 'iOS';
        return 'Unknown';
    };

    const os = getOS();
    document.body.className += ` os-${os.toLowerCase()}`;

    // Log for debugging
    console.log('Device Detection:', {
        isMobile,
        screenSize,
        os,
        userAgent: navigator.userAgent
    });
}

detectDeviceAndOptimize();

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    detectDeviceAndOptimize();
    revealOnScroll();
});

// ========== MOBILE MENU TOGGLE ==========
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show success message (in real scenario, this would send to server)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== PAGE ANIMATIONS ON SCROLL ==========
function revealOnScroll() {
    const elements = document.querySelectorAll('.stat-card, .program-card, .welcome-card, .value-card, .staff-card, .gallery-item, .faq-item, .program-detail');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}

// Call on page load
revealOnScroll();

// ========== NAVIGATION ACTIVE STATE ON SCROLL ==========
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('class');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const currentPageActive = document.querySelector(`.nav-menu a[href="${window.location.pathname.split('/').pop() || 'index.html'}"]`);
    if (currentPageActive) {
        currentPageActive.classList.add('active');
    }
});

// ========== ADD SCROLL EFFECT TO NAVBAR ==========
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== GALLERY LIGHTBOX (Simple Implementation) ==========
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const image = this.querySelector('img'); // Target the image directly
        const text = image ? image.alt : 'Gallery Item'; // Use alt text for description

        // Simple alert (could be expanded to full lightbox)
        // alert(`Gallery: ${text}`);
    });
});

// ========== TESTIMONIALS CAROUSEL (if needed in future) ==========
function createTestimonialCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;

    let currentIndex = 0;
    const testimonials = carousel.querySelectorAll('.testimonial-card');

    if (testimonials.length === 0) return;

    setInterval(() => {
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transition = 'opacity 0.5s ease';
        });

        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.opacity = '1';
    }, 5000);
}

createTestimonialCarousel();

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const targetNumber = parseInt(entry.target.textContent);
                let currentNumber = 0;
                const increment = targetNumber / 30;

                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        entry.target.textContent = targetNumber + '+';
                        clearInterval(counter);
                    } else {
                        entry.target.textContent = Math.floor(currentNumber) + '+';
                    }
                }, 30);

                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => observer.observe(card));
}

animateCounters();

// ========== UTILITY FUNCTIONS ==========

// Function to show/hide loading state
function showLoading(element) {
    element.innerHTML = '<div class="loading-spinner">Loading...</div>';
}

// Function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ========== LOCAL STORAGE UTILITIES ==========

// Store user preferences (e.g., theme preference)
function savePreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getPreference(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// ========== ERROR HANDLING ==========

// Global error handler
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.message);
    // Could send error report to server
});

// ========== ACCESSIBILITY IMPROVEMENTS ==========

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// ========== PAGE PERFORMANCE ==========

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========== CONSOLE GREETING ==========
console.log('%cWelcome to St Joseph\'s Vocational Secondary School', 'color: #1e40af; font-size: 18px; font-weight: bold;');
console.log('%cExcellence in Vocational Education', 'color: #dc2626; font-size: 14px;');
console.log('For inquiries, contact: info@stjv.edu');