'use strict';

const root = document.querySelector('.root');
const rows = 30;
const columns = 20;

function createGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');
      root.append(grid);
      const colIndex = j;
      const rowIndex = i;
      grid.addEventListener('mouseover', () => {
        const allGrids = document.querySelectorAll('.grid');
        allGrids.forEach((cell, index) => {
          const cellColIndex = index % columns;
          const cellRowIndex = Math.floor(index / columns);

          if (cellColIndex === colIndex || cellRowIndex === rowIndex) {
            cell.classList.add('highlight');
          } else {
            cell.classList.remove('highlight');
          }
        });
      });
    }
  }
}

root.addEventListener('click', e => {
  const clickedIndex = Array.from(root.children).indexOf(e.target);
  const clickedCol = clickedIndex % columns;
  const clickedRow = Math.floor(clickedIndex / columns);
  if (
    e.target.classList.contains('grid') &&
    !e.target.classList.contains('blue')
  ) {
    e.target.classList.add('blue');
    e.target.innerHTML = `<p>x: ${clickedCol + 1} </br>y: ${
      clickedRow + 1
    } </p>`;
  } else {
    e.target.classList.remove('blue');
    e.target.innerHTML = '';
  }
});
createGrid();
