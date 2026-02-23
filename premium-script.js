// ==================== PAGE LOADER ====================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000); // Show loader for at least 1 second
});

// ==================== SCROLL PROGRESS INDICATOR ====================
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate scroll percentage
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Update progress bar width
    progressBar.style.width = scrollPercent + '%';
});

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const navItems = document.querySelectorAll('.nav-item');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Active nav item on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Smooth scroll for nav links
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ==================== TYPING EFFECT ====================
const typingText = document.querySelector('.typing-text');
const textArray = [
    'Aspiring AI/ML Engineer',
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Continuous Learner'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause before next text
    }
    
    setTimeout(typeEffect, typingSpeed);
}

if (typingText) {
    setTimeout(typeEffect, 1000);
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                const skillFill = entry.target.querySelector('.skill-fill');
                if (skillFill) {
                    const width = skillFill.style.width;
                    skillFill.style.width = '0';
                    setTimeout(() => {
                        skillFill.style.width = width;
                    }, 100);
                }
            }
            
            // Animate learning progress
            if (entry.target.classList.contains('learning-item')) {
                const progress = entry.target.querySelector('.learning-progress');
                if (progress) {
                    const width = progress.style.width;
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 100);
                }
            }
            
            // Animate project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, entry.target.dataset.delay || 0);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll(
    '.about-card, .skill-category, .project-card, .skill-item, .learning-item, .contact-method'
);

animatedElements.forEach((el, index) => {
    el.dataset.delay = `${index * 100}`;
    observer.observe(el);
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 20px 30px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
            font-weight: 600;
        `;
        successMessage.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
                <div>
                    <div style="font-size: 1.1rem;">Message Sent!</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">I'll get back to you soon.</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        // Log form data (in production, send to backend)
        console.log('Form submitted:', data);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 5000);
    });
}

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Animate stat numbers when in view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                const target = parseInt(statNumber.textContent);
                animateCounter(statNumber, target);
                statNumber.classList.add('animated');
            }
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => statObserver.observe(item));

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    gradientOrbs.forEach((orb, index) => {
        const speed = 0.1 + (index * 0.05);
        orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
    });
});

// ==================== PROJECT CARD HOVER EFFECT ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== LOADING SCREEN ====================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// ==================== SMOOTH REVEAL ON LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-stats');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

// ==================== PARTICLE EFFECT (Optional Enhancement) ====================
// If you want to add particles, you can integrate particles.js or create a custom canvas animation

// ==================== THEME PERSISTENCE ====================
// Save scroll position on page unload
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
});

// Restore scroll position on load
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    highlightNavOnScroll();
}, 10));

// ==================== ACCESSIBILITY ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Focus management
const focusableElements = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('.modal');

if (modal) {
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

console.log('🚀 Premium Portfolio Loaded Successfully!');

// ==================== SCROLL ANIMATIONS ====================
// Intersection Observer for scroll animations
const scrollObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation to improve performance
            // scrollObserver.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

// Observe all section elements
const scrollAnimatedElements = document.querySelectorAll('.section-header, .about-card, .skill-category, .project-card, .contact-card, .stat-item, .repo-card');
scrollAnimatedElements.forEach(el => {
    el.classList.add('fade-in');
    scrollObserver.observe(el);
});

// Staggered animation for lists
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(item);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, scrollObserverOptions);
    
    observer.observe(item);
});

// Parallax effect on scroll
let ticking = false;
let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.pageYOffset;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});

function updateParallax() {
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrollPosition * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
}

// Add hover animation to buttons
const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-resume');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Text reveal animation
const textElements = document.querySelectorAll('.hero-description, .section-subtitle');
textElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
});

// ==================== ADVANCED SKILLS SECTION ====================

// Skill Level Counter Animation
function animateCounter(element, target) {
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Skill Bar Animation with Counter
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItem = entry.target;
            const skillFill = skillItem.querySelector('.skill-fill');
            const skillLevel = skillItem.querySelector('.skill-level');
            const skillGlow = skillItem.querySelector('.skill-glow');
            
            if (skillFill && skillLevel) {
                const targetWidth = skillFill.getAttribute('data-width') || 0;
                const targetLevel = skillLevel.getAttribute('data-level') || 0;
                
                // Animate counter
                setTimeout(() => {
                    animateCounter(skillLevel, parseInt(targetLevel));
                }, 200);
                
                // Animate progress bar
                setTimeout(() => {
                    skillFill.style.width = targetWidth + '%';
                    
                    // Animate glow to follow the bar
                    if (skillGlow) {
                        skillGlow.style.setProperty('--glow-position', targetWidth + '%');
                    }
                }, 300);
            }
            
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe skill items
document.querySelectorAll('.skill-item[data-skill]').forEach(item => {
    skillObserver.observe(item);
});

// Circular Progress Ring Animation
const circularObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = entry.target.querySelector('.progress-ring-circle');
            const percentText = entry.target.querySelector('.circular-percent');
            
            if (circle && percentText) {
                const progress = parseInt(circle.getAttribute('data-progress'));
                const circumference = 2 * Math.PI * 52; // r = 52
                const offset = circumference - (progress / 100) * circumference;
                
                // Animate circle
                setTimeout(() => {
                    circle.style.strokeDashoffset = offset;
                }, 400);
                
                // Animate counter
                setTimeout(() => {
                    animateCounter(percentText, progress);
                }, 500);
            }
            
            circularObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe circular skills
document.querySelectorAll('.circular-skill').forEach(skill => {
    circularObserver.observe(skill);
});

// Tech Card Level Bar Animation
const techCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const techCard = entry.target;
            const levelBar = techCard.querySelector('.tech-level-bar');
            
            if (levelBar) {
                const level = levelBar.getAttribute('data-level') || 80;
                levelBar.style.setProperty('--tech-level', level + '%');
            }
            
            techCardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe tech cards
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const levelBar = this.querySelector('.tech-level-bar');
        if (levelBar) {
            const level = levelBar.getAttribute('data-level') || 80;
            levelBar.style.setProperty('--tech-level', level + '%');
        }
    });
    techCardObserver.observe(card);
});

// Skill Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCategories = document.querySelectorAll('.skill-category');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter categories
            skillCategories.forEach((category, index) => {
                const categoryType = category.getAttribute('data-category');
                
                if (filter === 'all' || categoryType === filter) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0) scale(1)';
                    }, index * 50);
                } else {
                    category.style.opacity = '0';
                    category.style.transform = 'translateY(20px) scale(0.95)';
                    setTimeout(() => {
                        category.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Enhanced Tooltip Interaction
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const tooltip = this.querySelector('.skill-tooltip');
        if (tooltip) {
            tooltip.style.pointerEvents = 'auto';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.skill-tooltip');
        if (tooltip) {
            tooltip.style.pointerEvents = 'none';
        }
    });
});

// Add SVG gradient for circular progress
function addSVGGradient() {
    const svgs = document.querySelectorAll('.progress-ring');
    svgs.forEach(svg => {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#6366f1;stop-opacity:1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '50%');
        stop2.setAttribute('style', 'stop-color:#ec4899;stop-opacity:1');
        
        const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop3.setAttribute('offset', '100%');
        stop3.setAttribute('style', 'stop-color:#14b8a6;stop-opacity:1');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        gradient.appendChild(stop3);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    });
}

// Initialize SVG gradients
if (document.querySelector('.progress-ring')) {
    addSVGGradient();
}

// Particle effect for skill category icons
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'skill-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
    container.appendChild(particle);
    
    setTimeout(() => particle.remove(), 3000);
}

document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        const particleContainer = this.querySelector('.icon-particles-skill');
        if (particleContainer) {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createParticle(particleContainer), i * 100);
            }
        }
    });
});

// Add dynamic CSS for particles
const style = document.createElement('style');
style.textContent = `
    .skill-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 2s ease-out forwards;
    }
    
    @keyframes particleFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--x, 20px), var(--y, -30px)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Skill category stagger animation on scroll
const categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            
            categoryObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillCategories.forEach(category => {
    categoryObserver.observe(category);
});

console.log('Advanced Skills Section Initialized ✨');
