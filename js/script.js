// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SERVICE CARD INTERACTIONS =====
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('featured') 
            ? 'translateY(-5px) scale(1.05)'
            : 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('featured') 
            ? 'scale(1.05)'
            : 'translateY(0)';
    });
});

// ===== MINISTRY CARD INTERACTIONS =====
const ministryCards = document.querySelectorAll('.ministry-card');
ministryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== HIGHLIGHT ITEM INTERACTIONS =====
const highlightItems = document.querySelectorAll('.highlight-item');
highlightItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== BUTTON CLICK TRACKING (DEMO ANALYTICS) =====
const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-large, .whatsapp-float');
whatsappButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('WhatsApp CTA clicked - This would trigger analytics in a live site');
        console.log('CTA Location: ' + this.textContent.trim());
        
        // In a real implementation:
        // gtag('event', 'whatsapp_click', { 
        //     'event_category': 'conversion',
        //     'event_label': this.textContent.trim()
        // });
    });
});

// ===== VISIT PLAN BUTTON TRACKING =====
const visitButtons = document.querySelectorAll('[href="#contact"]');
visitButtons.forEach(button => {
    if (button.textContent.includes('Visit') || button.textContent.includes('Plan')) {
        button.addEventListener('click', function() {
            console.log('Visit planning button clicked');
            console.log('Button text: ' + this.textContent.trim());
            
            // In a real implementation:
            // gtag('event', 'visit_plan_click', {
            //     'event_category': 'engagement'
            // });
        });
    }
});

// ===== PRAYER REQUEST TRACKING =====
const prayerButtons = document.querySelectorAll('a[href*="prayer"]');
prayerButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Prayer request button clicked');
        
        // In a real implementation:
        // gtag('event', 'prayer_request_click', {
        //     'event_category': 'engagement'
        // });
    });
});

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = 
        document.querySelector('.footer-bottom p').innerHTML.replace('2024', currentYear);
    
    // Add loading animation class
    document.body.classList.add('loaded');
    
    // Log demo site visit
    console.log('=== Grace Community Church Demo Site ===');
    console.log('This is a demo website created by KaynAero Technocrats');
    console.log('Demonstrating best practices for church websites in Kenya');
    console.log('=== Commercial-Grade Features Implemented ===');
    console.log('1. Strong Hero Section with clear CTAs');
    console.log('2. Specific, non-generic copy throughout');
    console.log('3. Clear service times hierarchy');
    console.log('4. Multiple conversion-focused CTAs');
    console.log('5. Improved visual hierarchy and spacing');
    console.log('6. Comprehensive footer with all contact info');
    console.log('7. Trust elements: mission, vision, leadership');
    
    // Initialize any animations
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
    }, 300);
});

// ===== FORM SUBMISSION HANDLER (FOR DEMO PURPOSES) =====
// This would be replaced with Netlify form handling or similar in production
document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        console.log('Form submitted - In production, this would send data to server');
        
        // Show success message
        const form = e.target;
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been sent. We'll get back to you shortly.</p>
        `;
        
        form.parentNode.insertBefore(successMessage, form.nextSibling);
        form.style.display = 'none';
        
        // In a real implementation, you would:
        // 1. Submit the form via AJAX
        // 2. Show loading state
        // 3. Show success/error message based on response
    }
});

// ===== VISITOR FIRST TIME VISIT TRACKING =====
if (!localStorage.getItem('grace_church_first_visit')) {
    console.log('First time visitor detected');
    localStorage.setItem('grace_church_first_visit', 'true');
    
    // You could trigger a special welcome message or animation
    setTimeout(() => {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const welcomePulse = document.createElement('div');
            welcomePulse.className = 'welcome-pulse';
            welcomePulse.innerHTML = '<i class="fas fa-hand-wave"></i> Welcome!';
            heroSection.appendChild(welcomePulse);
            
            setTimeout(() => {
                welcomePulse.remove();
            }, 3000);
        }
    }, 1000);
}
