export class App {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.element.innerHTML = `
      <div class="app-container">
        <h2>Dynamic Component Example</h2>
        <p>This is a sample component that demonstrates how to structure your SPA.</p>
        <div class="component-demo">
          <button id="toggle-theme" class="theme-button">Toggle Theme</button>
          <div class="status" id="status">Ready</div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const toggleButton = this.element.querySelector('#toggle-theme');
    const status = this.element.querySelector('#status');

    if (toggleButton && status) {
      toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        status.textContent = isDark ? 'Dark theme active' : 'Light theme active';
      });
    }
  }

  destroy() {
    // Clean up event listeners if needed
    this.element.innerHTML = '';
  }
}