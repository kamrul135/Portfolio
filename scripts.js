// scripts.js — Advanced portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initParticles();
  initThemeToggle();
  initMobileMenu();
  initNavigation();
  initCopyEmail();
  initProjectModal();
  initProjectFilters();
  initContactForm();
  initScrollAnimations();
});

// ========================================
// Loading Screen
// ========================================
function initLoadingScreen() {
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  });
}

// ========================================
// Particle Background
// ========================================
function initParticles() {
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#00f0ff', '#8b5cf6', '#ff6b35']
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1
          }
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.3
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: '#00f0ff',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'bounce'
          }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          onClick: {
            enable: true,
            mode: 'push'
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5
            }
          },
          push: {
            quantity: 4
          }
        }
      },
      detectRetina: true
    });
  }
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  const body = document.body;
  
  if (!menuToggle || !nav) return;
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  document.body.appendChild(overlay);
  
  // Toggle menu
  menuToggle.addEventListener('click', () => {
    const isActive = nav.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // Close on overlay click
  overlay.addEventListener('click', closeMenu);
  
  // Close on nav link click
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    body.style.overflow = '';
  }
}

// ========================================
// Navigation Active State & Smooth Scroll
// ========================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  
  // Smooth scroll with offset
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Update active state on scroll
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========================================
// Theme Toggle
// ========================================
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  if (!themeToggle) return;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateThemeIcon(themeToggle, true);
  }
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(themeToggle, isLight);
    
    // Update particles color if needed
    if (typeof tsParticles !== 'undefined') {
      const container = tsParticles.domItem(0);
      if (container) {
        container.options.particles.links.opacity = isLight ? 0.2 : 0.3;
        container.refresh();
      }
    }
  });
}

function updateThemeIcon(button, isLight) {
  const icon = button.querySelector('i');
  if (isLight) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// ========================================
// Project Filters
// ========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  
  if (filterBtns.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter projects with animation
      projects.forEach((project, index) => {
        const categories = project.dataset.category;
        
        if (filter === 'all' || categories.includes(filter)) {
          setTimeout(() => {
            project.classList.remove('hidden');
            project.style.animation = `fadeInUp 0.5s ease forwards`;
          }, index * 100);
        } else {
          project.classList.add('hidden');
        }
      });
    });
  });
}

// ========================================
// Contact Form
// ========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (!form) return;
  
  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.parentElement.classList.contains('error')) {
        validateField(input);
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (!isValid) return;
    
    // Get form data
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    
    btnText.style.display = 'none';
    btnIcon.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    submitBtn.disabled = true;
    
    try {
      // Send to Formspree
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Show success message
        form.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form after delay
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          formSuccess.style.display = 'none';
          btnText.style.display = 'inline';
          btnIcon.style.display = 'inline';
          btnLoading.style.display = 'none';
          submitBtn.disabled = false;
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Show error message
      alert('Sorry, there was an error sending your message. Please try emailing directly at hridoy516578@gmail.com');
      btnText.style.display = 'inline';
      btnIcon.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}

function validateField(field) {
  const formGroup = field.parentElement;
  const errorMsg = formGroup.querySelector('.error-message');
  
  let isValid = true;
  let message = '';
  
  // Check if empty
  if (!field.value.trim()) {
    isValid = false;
    message = 'This field is required';
  }
  // Email validation
  else if (field.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
  }
  // Minimum length for message
  else if (field.name === 'message' && field.value.trim().length < 10) {
    isValid = false;
    message = 'Message must be at least 10 characters';
  }
  
  // Update UI
  if (!isValid) {
    formGroup.classList.add('error');
    errorMsg.textContent = message;
  } else {
    formGroup.classList.remove('error');
    errorMsg.textContent = '';
  }
  
  return isValid;
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and projects
  document.querySelectorAll('.card, .project, .skill-category').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ========================================
// Copy Email (Original)
// ========================================
function initCopyEmail(){
  const copyBtn = document.getElementById('copy-email');
  const emailLink = document.getElementById('contact-email');
  if(!copyBtn || !emailLink) return;
  copyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailLink.getAttribute('href').replace('mailto:', '') || emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      showTempMessage(copyBtn, '<i class="fas fa-check"></i> Copied');
    } catch (err) {
      // fallback: select and prompt
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = email;
      input.select();
      try { document.execCommand('copy'); showTempMessage(copyBtn, '<i class="fas fa-check"></i> Copied'); } catch(e) { showTempMessage(copyBtn, 'Failed'); }
      input.remove();
    }
  });
}

function showTempMessage(el, text){
  const orig = el.innerHTML;
  el.innerHTML = text;
  setTimeout(()=> el.innerHTML = orig, 1400);
}

// ========================================
// Project Modal (Original)
// ========================================
function initProjectModal(){
  // create modal
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:2000;padding:20px;';
  modal.innerHTML = `
    <div id="project-modal-card" style="max-width:800px;width:100%;background:#0b1220;color:#fff;border-radius:10px;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,0.6);">
      <button id="project-modal-close" style="float:right;background:transparent;border:0;color:#fff;font-size:18px;cursor:pointer">✕</button>
      <h3 id="project-modal-title" style="margin-top:0"></h3>
      <p id="project-modal-desc" style="color:#cbd5e1"></p>
      <p id="project-modal-meta" style="color:#94a3b8;font-weight:600"></p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e)=>{ if(e.target === modal) hideModal(); });
  modal.querySelector('#project-modal-close').addEventListener('click', hideModal);

  function hideModal(){ 
    modal.style.display='none'; 
    document.body.style.overflow = '';
  }
}
