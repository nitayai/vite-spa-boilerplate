import './assets/style.css'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', () => {
  const counterButton = document.querySelector('#counter')
  if (counterButton) {
    setupCounter(counterButton)
  }
  
  console.log('🚀 Vite SPA Boilerplate initialized successfully!')
  console.log('Ready to start building your application!')
})