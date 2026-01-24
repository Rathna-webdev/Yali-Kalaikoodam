// ===== HAMBURGER MENU =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    if (!navbar.contains(event.target)) {
        hamburgerBtn.classList.remove('active');
        navList.classList.remove('active');
    }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        // Add scrolled class only after passing the hero section
        if (window.scrollY > heroHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===== MODAL FUNCTIONS =====
function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeRegisterModal();
    }
});

// ===== FORM HANDLING =====
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.getElementById('regCourse').value,
        subject: document.getElementById('regSubject').value
    };
    
    // Simulate form submission
    console.log('Registration Form Data:', formData);
    alert(`Thank you, ${formData.name}! Your registration for ${formData.course} has been submitted. We'll contact you at ${formData.email} soon.`);
    
    this.reset();
    closeRegisterModal();
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    // Create mailto link
    const mailtoLink = `mailto:yalikalaikoodam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${fullName}\nPhone: ${phone}\n\n${message}`)}`;
    
    console.log('Contact Form Data:', { fullName, phone, subject, message });
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Open email client
    window.location.href = mailtoLink;
    
    this.reset();
});

// ===== SERVICE HOVER EFFECTS =====
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderBottomWidth = '2px';
        this.style.borderBottomColor = 'var(--primary-blue)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderBottomWidth = '1px';
    });
});

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== SCROLL TO TOP BUTTON =====
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(0deg, rgba(0, 67, 248, 1) 0%, rgba(0, 17, 255, 1) 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3);
        font-size: 20px;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(0, 17, 255, 0.5)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 17, 255, 0.3)';
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ===== SOCIAL LINKS HOVER EFFECTS =====
const socialLinks = document.querySelectorAll('.social-link, .social-btn');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ===== BOOK SPOT & REGISTER BUTTON FUNCTIONALITY =====
const bookSpotBtn = document.querySelector('.book-spot-btn');
const registerBtn = document.querySelector('.nav-register');
const registerFormBtn = document.querySelector('.register-form-btn');

if (bookSpotBtn) {
    bookSpotBtn.addEventListener('click', openRegisterModal);
}

if (registerBtn) {
    registerBtn.addEventListener('click', openRegisterModal);
}

if (registerFormBtn) {
    registerFormBtn.addEventListener('click', openRegisterModal);
}

// ===== VIDEO PLACEHOLDER CLICK =====
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        alert('Video player would be embedded here. This is a demo placeholder.');
    });
}

// ===== SHOW MORE BUTTON =====
const showMoreBtn = document.querySelector('.show-more-btn');
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Loading more updates...');
    });
}

// ===== GRID LINK ANIMATION =====
const updateCards = document.querySelectorAll('.update-card');
updateCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== LAZY LOADING SIMULATION =====
function addLazyLoadingEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.4s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', addLazyLoadingEffect);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ===== SERVICE ITEM CLICK HANDLER =====
serviceItems.forEach(item => {
    item.addEventListener('click', function() {
        const serviceName = this.querySelector('span').textContent;
        alert(`You selected: ${serviceName}\n\nPlease fill the registration form to learn more about this course.`);
        openRegisterModal();
    });
});

// ===== FORM INPUT VALIDATION =====
function setupFormValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderBottomColor = '#ff6b6b';
            } else {
                this.style.borderBottomColor = 'rgba(255, 255, 255, 0.5)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupFormValidation);

// ===== CONTACT FORM EMAIL VALIDATION =====
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            alert('Please enter a valid email address');
            this.focus();
        }
    });
});

// ===== PHONE NUMBER FORMATTING =====
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
});

// ===== DYNAMIC YEAR IN FOOTER =====
const yearElement = document.querySelector('.footer-copyright span');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    if (yearElement.textContent.includes('2026')) {
        yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
    }
}

// ===== HEADER ACTIVE STATE ON SCROLL =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navBrand = document.querySelector('.nav-brand');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            if (navBrand) {
                navBrand.style.opacity = '0.8';
            }
        }
    });
});

// ===== PREVENT DOUBLE FORM SUBMISSION =====
function preventDoubleSubmit() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.style.cursor = 'not-allowed';
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.cursor = 'pointer';
                }, 2000);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', preventDoubleSubmit);

// ===== CONSOLE MESSAGE =====
console.log('%c🥁 Welcome to Yali Kalaikoodam! 🥁', 'font-size: 20px; color: #0011FF; font-weight: bold;');
console.log('%cThe Parai is more than a drum; it is a voice.', 'font-size: 14px; color: #0011FF;');
