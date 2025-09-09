import './assets/style.css'

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

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  // Observe service cards and other elements
  const animatedElements = document.querySelectorAll('.service-card, .profile-card, .contact-method')
  animatedElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
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

  console.log('🚀 Nitay.AI website initialized successfully!')
  console.log('ברוכים הבאים לעתיד השיווק הדיגיטלי עם בינה מלאכותית!')
})