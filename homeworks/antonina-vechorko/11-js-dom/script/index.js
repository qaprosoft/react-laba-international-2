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
  const prevSelected = document.querySelector('.selected');
  if (prevSelected) {
    prevSelected.classList.remove('selected');
    prevSelected.textContent = '';
  }

  const prevAxis = document.querySelectorAll('.axis');
  prevAxis.forEach(axis => {
    axis.classList.remove('axis');
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
    clickedCell.classList.contains('selected')
      ? clearColors()
      : changeColor(clickedCell, x, y);
  }
});
