const container = document.querySelector('.grid-container');
const gridRow = 30;
const gridColumn = 20;

function createCell(x, y) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('data-col', x);
  cell.setAttribute('data-row', y);
  container.appendChild(cell);
  return cell;
}

function clearSelectionAndColors() {
  const selectedCell = document.querySelector('.selected');
  if (selectedCell) {
    selectedCell.classList.remove('selected');
    selectedCell.textContent = '';
  }

  const rowAndColumnCells = document.querySelectorAll('.rowAndColumn');
  rowAndColumnCells.forEach(cell => {
    cell.classList.remove('rowAndColumn');
  });
}

function highlightRowAndColumn(x, y) {
  const colCells = document.querySelectorAll(`[data-col="${x}"]`);
  colCells.forEach(cell => cell.classList.add('rowAndColumn'));

  const rowCells = document.querySelectorAll(`[data-row="${y}"]`);
  rowCells.forEach(cell => cell.classList.add('rowAndColumn'));
}

function handleClick(event) {
  const clickedCell = event.target.closest('.cell');

  if (clickedCell) {
    const x = +clickedCell.getAttribute('data-col');
    const y = +clickedCell.getAttribute('data-row');

    clickedCell.textContent = `${x + 1} / ${y + 1}`;

    if (clickedCell.classList.contains('selected')) {
      clearSelectionAndColors();
    } else {
      clearSelectionAndColors();
      highlightRowAndColumn(x, y);
      clickedCell.classList.add('selected');
    }
  }
}

function createGrid() {
  for (let row = 0; row < gridRow; row++) {
    for (let col = 0; col < gridColumn; col++) {
      createCell(col, row);
    }
  }
}

createGrid();
container.addEventListener('click', handleClick);
