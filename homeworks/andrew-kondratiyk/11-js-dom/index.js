const container = document.querySelector('.container');

const ROWS_COUNT = 20;
const COLS_COUNT = 30;
let shiftPressed = false;

const createCell = (x, y) => {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.x = x;
  cell.dataset.y = y;
  cell.innerText = `${x}:${y}`;

  cell.addEventListener('click', function(event) {
    const cells = document.querySelectorAll('.cell');
    if(!shiftPressed) {
      cells.forEach((cell) => {
        cell.classList.remove('active', 'activeRowOrCol');
      });
    }
    cell.classList.add('active');
    cells.forEach((cell) => {
      if(this.dataset.x === cell.dataset.x || this.dataset.y === cell.dataset.y) {
        cell.classList.add('activeRowOrCol');
      }
      if(this.dataset.x === cell.dataset.x && this.dataset.y === cell.dataset.y) {
        cell.classList.remove('activeRowOrCol');
        cell.classList.add('active');
      }
    });
  });

  return cell;
}

window.addEventListener('keydown', (event) => {
  if(event.key === 'Shift') {
    shiftPressed = true;
  }
});
window.addEventListener('keyup', (event) => {
  if(event.key === 'Shift') {
    shiftPressed = false;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < ROWS_COUNT; i++) {
    for (let j = 0; j < COLS_COUNT; j++) {
      container.appendChild(createCell(i, j));
    }
  }
})
