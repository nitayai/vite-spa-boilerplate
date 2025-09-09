import './assets/style.css'

let count = 0

function setupCounter(element) {
  const setCounter = (count) => {
    element.innerHTML = `Count: ${count}`
  }
  element.addEventListener('click', () => setCounter(++count))
  setCounter(0)
}

document.addEventListener('DOMContentLoaded', () => {
  const counterButton = document.querySelector('#counter')
  if (counterButton) {
    setupCounter(counterButton)
  }
  
  console.log('🚀 Vite SPA Boilerplate initialized successfully!')
  console.log('Ready to start building your application!')
})