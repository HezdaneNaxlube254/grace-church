// ===== FORM HANDLING =====
const handleFormSubmission = (formId, successMessage) => {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Create success message
            const successDiv = document.createElement('div');
            successDiv.className = 'form-success';
            successDiv.innerHTML = `
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>${successMessage}</p>
                    <p class="success-note">We'll be in touch soon.</p>
                </div>
            `;
            
            // Style the success message
            successDiv.style.cssText = `
                background: linear-gradient(135deg, var(--accent-color) 0%, #45a049 100%);
                color: var(--text-white);
                padding: 40px;
                border-radius: var(--border-radius);
                text-align: center;
                margin-top: 20px;
                animation: fadeIn 0.5s ease;
            `;
            
            successDiv.querySelector('.success-content i').style.cssText = `
                font-size: 3rem;
                margin-bottom: 20px;
                color: var(--text-white);
            `;
            
            successDiv.querySelector('.success-content h3').style.cssText = `
                font-size: 1.8rem;
                margin-bottom: 15px;
                color: var(--text-white);
            `;
            
            successDiv.querySelector('.success-content p').style.cssText = `
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 10px;
                color: rgba(255, 255, 255, 0.95);
            `;
            
            successDiv.querySelector('.success-note').style.cssText = `
                font-size: 0.9rem;
                font-style: italic;
                margin-top: 15px;
                opacity: 0.9;
            `;
            
            // Insert success message
            form.parentNode.insertBefore(successDiv, form);
            form.style.display = 'none';
            
            // Reset button (for demo purposes, in real app you wouldn't show form again)
            setTimeout(() => {
                // For demo: show form again after 5 seconds
                successDiv.remove();
                form.style.display = 'block';
                submitBtn.innerHTML = originalHTML;
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
            }, 5000);
            
            // Log submission for demo
            console.log(`Form "${formId}" submitted successfully`);
            
        }, 1500); // Simulated delay
    });
};

// ===== FILTER FUNCTIONALITY =====
const initializeFilters = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.querySelector('.sort-select');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                console.log(`Filtering by: ${filter}`);
                
                // In a real implementation, you would filter the sermon list
                // For demo, we just log the filter action
            });
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            console.log(`Sorting by: ${sortBy}`);
            
            // In a real implementation, you would sort the sermon list
            // For demo, we just log the sort action
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.trim();
                if (searchTerm.length >= 2) {
                    console.log(`Searching for: ${searchTerm}`);
                    // In real implementation, filter sermons by search term
                }
            }, 300);
        });
    }
};

// ===== PAGINATION =====
const initializePagination = () => {
    const pageBtns = document.querySelectorAll('.page-btn');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            pageBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const page = this.textContent.trim();
            console.log(`Navigating to page: ${page}`);
            
            // In a real implementation, you would load the page content
            // For demo, we just log the navigation
        });
    });
};

// ===== VISITOR COUNTER =====
const updateVisitorCounter = () => {
    // This is a demo visitor counter
    // In production, this would come from your analytics
    const counterElement = document.querySelector('.visitor-counter');
    if (counterElement) {
        // Generate a realistic-looking random number for demo
        const baseVisitors = 1247;
        const randomAddition = Math.floor(Math.random() * 50);
        const totalVisitors = baseVisitors + randomAddition;
        
        counterElement.textContent = totalVisitors.toLocaleString();
        
        // Update every hour (for demo purposes)
        setInterval(() => {
            const newAddition = Math.floor(Math.random() * 10);
            const newTotal = totalVisitors + newAddition;
            counterElement.textContent = newTotal.toLocaleString();
        }, 3600000);
    }
};

// ===== CURRENT YEAR UPDATER =====
const updateCurrentYear = () => {
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
};

// ===== IMAGE PLACEHOLDER HOVER EFFECTS =====
const initializeImagePlaceholders = () => {
    const placeholders = document.querySelectorAll('.image-placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
};

// ===== ACCORDION FUNCTIONALITY (for future use) =====
const initializeAccordions = () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            
            // Remove active class from all headers
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });
            
            // Toggle current accordion
            if (!isOpen) {
                content.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
};

// ===== SCROLL TO TOP BUTTON =====
const initializeScrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: var(--text-white);
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 998;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
    `;
    
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--primary-dark)';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--primary-color)';
        this.style.transform = 'translateY(0)';
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
};

// ===== INITIALIZE ALL FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    updateCurrentYear();
    
    // Initialize forms
    handleFormSubmission('visitPlanningForm', 'Your visit has been planned! We\'ll send you a confirmation email with all the details.');
    handleFormSubmission('prayerRequestForm', 'Your prayer request has been received by our prayer team. We\'ll be praying for you.');
    
    // Initialize filters on sermons page
    initializeFilters();
    
    // Initialize pagination
    initializePagination();
    
    // Initialize visitor counter
    updateVisitorCounter();
    
    // Initialize image placeholders
    initializeImagePlaceholders();
    
    // Initialize accordions (if any on page)
    initializeAccordions();
    
    // Initialize scroll to top button
    initializeScrollToTop();
    
    // Log page load for analytics (demo)
    console.log(`Page loaded: ${document.title}`);
    console.log('Professional church website functionality initialized');
    
    // Add CSS animation for form success
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .form-success {
            animation: fadeIn 0.5s ease;
        }
        
        .accordion-content {
            display: none;
            padding: 20px;
            background-color: var(--bg-light);
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            margin-top: -1px;
            border: 1px solid var(--border-color);
        }
        
        .accordion-header {
            padding: 20px;
            background-color: var(--primary-color);
            color: var(--text-white);
            border-radius: var(--border-radius);
            cursor: pointer;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: var(--transition);
        }
        
        .accordion-header:hover {
            background-color: var(--primary-dark);
        }
        
        .accordion-header.active {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        
        .accordion-header i {
            transition: transform 0.3s ease;
        }
        
        .accordion-header.active i {
            transform: rotate(180deg);
        }
    `;
    document.head.appendChild(style);
});

// ===== WINDOW LOAD COMPLETION =====
window.addEventListener('load', function() {
    // Add loaded class to body for any final animations
    document.body.classList.add('fully-loaded');
    
    // Performance logging (for demo)
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page fully loaded in ${loadTime}ms`);
});
