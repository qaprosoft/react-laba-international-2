const grid = document.querySelector('tbody');

for (let i = 0; i < 30; i++) {
  const row = document.createElement('tr');
  row.setAttribute('data-row', i + 1);
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('td');
    cell.setAttribute('data-row', i + 1);
    cell.setAttribute('data-col', String.fromCharCode(j + 65));
    cell.classList.add('cell');
    row.appendChild(cell);
  }
  grid.append(row);
}

const handleClick = e => {
  if (e.target instanceof HTMLTableCellElement) {
    const prevActiveCells = grid.querySelectorAll('td.active');
    const prevActiveRow = grid.querySelector('tr.active');
    if (prevActiveCells.length > 0) {
      prevActiveCells.forEach(element => {
        element.classList.remove('active');
        element.innerText = '';
      });
      prevActiveRow.classList.remove('active');
    }
    const activeCell = e.target;
    const {row, col} = activeCell.dataset;
    const activeRow = grid.querySelector(`tr[data-row="${row}"]`);
    const activeColumnCells = grid.querySelectorAll(`td[data-col="${col}"]`);
    activeCell.classList.add('active');
    activeColumnCells.forEach(element => {
      element.classList.add('active');
    });
    activeRow.classList.add('active');
    activeCell.innerText =
      activeCell.dataset.col + '/' + activeCell.dataset.row;
  }
};

grid.addEventListener('click', handleClick);
