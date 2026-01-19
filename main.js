class LottoNumbers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  render() {
    const numbers = this.generateNumbers();
    const container = document.createElement('div');
    container.classList.add('numbers-container');

    numbers.forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = number;
      container.appendChild(numberElement);
    });

    this.shadowRoot.innerHTML = ''; // Clear previous numbers
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('lotto-numbers', LottoNumbers);

document.getElementById('generate-btn').addEventListener('click', () => {
  document.querySelector('lotto-numbers').render();
});
