const container = document.querySelector('.grid-container');
const gridRow = 30;
const gridColumn = 20;

const createGrid = () => {
  for (let row = 0; row < gridRow; row++) {
    for (let col = 0; col < gridColumn; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-col', col);
      cell.setAttribute('data-row', row);
      container.append(cell);
    }
  }
};
createGrid();

const clearColors = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.classList.remove('axis', 'selected');
  });
};

const changeColor = (cell, x, y) => {
  clearColors();

  const colCells = document.querySelectorAll(`[data-col="${x}"]`);
  colCells.forEach(cell => cell.classList.add('axis'));

  const rowCells = document.querySelectorAll(`[data-row="${y}"]`);
  rowCells.forEach(cell => cell.classList.add('axis'));

  cell.classList.add('selected');
};

container.addEventListener('click', event => {
  const clickedCell = event.target.closest('.cell');

  if (clickedCell) {
    const x = +clickedCell.getAttribute('data-col');
    const y = +clickedCell.getAttribute('data-row');
    clickedCell.textContent = `${x + 1} / ${y + 1}`;
    changeColor(clickedCell, x, y);
  }
});
