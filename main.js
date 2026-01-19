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

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const whiteboard = document.getElementById('whiteboard');
const whiteboardCtx = whiteboard.getContext('2d');

let isDrawing = false;
let currentColor = 'black';

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}
function stopDrawing() {
    isDrawing = false;
    whiteboardCtx.beginPath();
}
function draw(e) {
    if (!isDrawing) return;
    whiteboardCtx.lineWidth = 5;
    whiteboardCtx.lineCap = 'round';
    whiteboardCtx.strokeStyle = currentColor;
    whiteboardCtx.lineTo(e.offsetX, e.offsetY);
    whiteboardCtx.stroke();
    whiteboardCtx.beginPath();
    whiteboardCtx.moveTo(e.offsetX, e.offsetY);
}
whiteboard.addEventListener('mousedown', startDrawing);
whiteboard.addEventListener('mouseup', stopDrawing);
whiteboard.addEventListener('mousemove', draw);
whiteboard.addEventListener('mouseout', stopDrawing);

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    whiteboardCtx.clearRect(0, 0, whiteboard.width, whiteboard.height);
});
