const numberOfColumns = 20;
const numberOfRows = 30;
const container = document.querySelector('.container');
let cells = [];

addEventListener('DOMContentLoaded', () => drawGrid());

container.addEventListener('click', event => {
  if (isMouseUp) {
    event.preventDefault();
    isMouseUp = false;
    return;
  }
  const selected = event.target;
  if (!selected.classList.contains('cell')) return;
  resetGrid();
  paintCells(selected);
});

// ---- Allow selecting with shift key + mouse click
let isSelecting = false;
let isMouseUp = false;
container.addEventListener('mousedown', event => {
  if (event.shiftKey) {
    resetGrid();
    isSelecting = true;
  }
});

container.addEventListener('mousemove', event => {
  if (event.shiftKey && isSelecting) {
    paintCells(event.target);
  }
});

container.addEventListener('mouseup', event => {
  if (isSelecting) {
    isMouseUp = true;
    isSelecting = false;
  }
});

function drawGrid() {
  let temp = '';
  for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
    temp += `<div class="cell" id="cell-${i}"></div>`;
  }
  container.innerHTML += temp;
  cells = document.querySelectorAll('.cell');
}

function resetGrid() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('cell--active', 'cell--selected');
  });
}

function getCellNumber(cell) {
  return [...cells.values()].indexOf(cell);
}

function getRowNumber(cellNumber) {
  return Math.floor(cellNumber / numberOfColumns);
}

function getColumnNumber(cellNumber) {
  return cellNumber % numberOfColumns;
}

function paintCells(selectedCell) {
  const cellNumber = getCellNumber(selectedCell);
  const [cellRow, cellColumn] = [
    getRowNumber(cellNumber),
    getColumnNumber(cellNumber),
  ];
  selectedCell.classList.add('cell--selected');
  selectedCell.innerText = `${cellColumn + 1} / ${cellRow + 1}`;
  for (let i = 0; i < cells.length; i++) {
    if (getRowNumber(i) == cellRow || getColumnNumber(i) == cellColumn)
      cells[i].classList.add('cell--active');
  }
}
