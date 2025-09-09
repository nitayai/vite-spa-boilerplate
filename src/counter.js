export function setupCounter(element) {
  let count = 0
  const setCounter = (count) => {
    element.innerHTML = `count is ${count}`
  }
  element.addEventListener('click', () => setCounter(++count))
  setCounter(0)
}