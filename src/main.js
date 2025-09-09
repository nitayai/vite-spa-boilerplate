import './assets/style.css'

// Add floating particle animation to CSS
const style = document.createElement('style')
style.textContent = `
@keyframes floatingParticle {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(100px, -100px) rotate(90deg) scale(1.2);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50px, -150px) rotate(180deg) scale(0.8);
    opacity: 0.5;
  }
  75% {
    transform: translate(-120px, -50px) rotate(270deg) scale(1.1);
    opacity: 0.8;
  }
}

.animate-in {
  animation: slideInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: translateY(30px) rotate(-5deg) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
  }
}
`
document.head.appendChild(style)

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Contact form handling
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      
      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)
      
      // Show success message (in a real app, you'd send this to a server)
      alert('תודה על הפנייה! נחזור אליך בהקדם האפשרי.')
      
      // Reset form
      contactForm.reset()
    })
  }

  // Enhanced parallax and scroll animations
  let ticking = false
  
  function updateParallax() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.hero-section::before, .ai-avatar, .about-section::after')
    
    // Parallax effect for hero background
    const heroSection = document.querySelector('.hero-section')
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.1}px)`
    }
    
    // Parallax effect for AI avatar
    const aiAvatar = document.querySelector('.ai-avatar')
    if (aiAvatar) {
      aiAvatar.style.transform = `translateY(${scrolled * 0.05}px) scale(${1 + scrolled * 0.0001})`
    }
    
    // Update navbar opacity based on scroll
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      const opacity = Math.min(0.95, 0.7 + scrolled * 0.001)
      navbar.style.background = `rgba(15, 15, 35, ${opacity})`
    }
    
    ticking = false
  }
  
  function requestParallaxUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }
  
  window.addEventListener('scroll', requestParallaxUpdate)

  // Enhanced animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0) rotate(0deg) scale(1)'
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe service cards and other elements with stagger effect
  const animatedElements = document.querySelectorAll('.service-card, .profile-card, .contact-method, .stat')
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px) rotate(-5deg) scale(0.95)'
    el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
    observer.observe(el)
  })

  // Add click handlers for CTA buttons
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary')
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (button.textContent.includes('התחל עכשיו')) {
        // Scroll to contact section
        document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
        })
      } else if (button.textContent.includes('למד עוד')) {
        // Scroll to services section
        document.querySelector('#services').scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })

  // Add mouse move parallax effect
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth
    const mouseY = e.clientY / window.innerHeight
    
    const heroTitle = document.querySelector('.hero-title')
    const heroSubtitle = document.querySelector('.hero-subtitle')
    
    if (heroTitle) {
      heroTitle.style.transform = `translate(${mouseX * 10}px, ${mouseY * 5}px)`
    }
    if (heroSubtitle) {
      heroSubtitle.style.transform = `translate(${mouseX * -5}px, ${mouseY * -3}px)`
    }
  })
  
  // Add floating elements animation
  const createFloatingElements = () => {
    for (let i = 0; i < 6; i++) {
      const element = document.createElement('div')
      element.className = 'floating-element'
      element.style.cssText = `
        position: fixed;
        width: ${Math.random() * 6 + 4}px;
        height: ${Math.random() * 6 + 4}px;
        background: linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3));
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatingParticle ${15 + Math.random() * 10}s ease-in-out infinite;
        z-index: -1;
      `
      document.body.appendChild(element)
    }
  }
  
  createFloatingElements()

  console.log('🚀 Nitay.AI website initialized with enhanced animations!')
  console.log('ברוכים הבאים לעתיד השיווק הדיגיטלי עם בינה מלאכותית!')
})