let prevCell;

const grid = document.querySelector('tbody');

for (let i = 0; i < 30; i++) {
  const row = document.createElement('tr');
  row.setAttribute('data-row', i + 1);
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('td');
    cell.setAttribute('data-row', i + 1);
    cell.setAttribute('data-col', j + 1);
    cell.classList.add('cell');
    row.appendChild(cell);
  }
  grid.append(row);
}

const addActiveClass = element => {
  element.classList.add('active');
};

const removeActiveClass = element => {
  element.classList.remove('active');
};

const setActiveCell = element => {
  addActiveClass(element);
  element.innerText = element.dataset.col + '/' + element.dataset.row;
};

const removeActiveCell = element => {
  removeActiveClass(element);
  element.innerText = '';
};

const handleClick = e => {
  if (e.target instanceof HTMLTableCellElement) {
    const prevActiveCells = grid.querySelectorAll('td.active');
    const prevActiveRows = grid.querySelectorAll('tr.active');
    const prevActiveRow = prevActiveRows[0];
    if (prevActiveCells.length > 0) {
      prevActiveCells.forEach(element => {
        removeActiveCell(element);
      });
      removeActiveClass(prevActiveRow);
    }

    let activeCells = [],
      activeRows = [];
    activeColumnCells = [];

    const activeCell = e.target;

    if (e.shiftKey && prevCell) {
      const rowDiff = activeCell.dataset.row - prevCell.dataset.row;
      const colDiff = activeCell.dataset.col - prevCell.dataset.col;
      if (colDiff >= 0) {
        for (
          let i = Number(prevCell.dataset.col);
          i <= Number(activeCell.dataset.col);
          i++
        )
          activeColumnCells.push(
            ...grid.querySelectorAll(`td[data-col="${i}"]`),
          );
      } else {
        for (
          let i = Number(activeCell.dataset.col);
          i <= Number(prevCell.dataset.col);
          i++
        )
          activeColumnCells.push(
            ...grid.querySelectorAll(`td[data-col="${i}"]`),
          );
      }

      if (rowDiff >= 0) {
        for (
          let i = Number(prevCell.dataset.row);
          i <= Number(activeCell.dataset.row);
          i++
        ) {
          const row = grid.querySelector(`tr[data-row="${i}"]`);
          activeRows.push(row);
          if (colDiff >= 0) {
            for (
              let j = Number(prevCell.dataset.col);
              j <= Number(activeCell.dataset.col);
              j++
            ) {
              const cell = row.querySelector(`td[data-col="${j}"]`);
              activeCells.push(cell);
            }
          } else {
            for (
              let j = Number(activeCell.dataset.col);
              j <= Number(prevCell.dataset.col);
              j++
            ) {
              const cell = row.querySelector(`td[data-col="${j}"]`);
              activeCells.push(cell);
            }
          }
        }
      } else {
        for (
          let i = Number(activeCell.dataset.row);
          i <= Number(prevCell.dataset.row);
          i++
        ) {
          const row = grid.querySelector(`tr[data-row="${i}"]`);
          activeRows.push(row);
          if (colDiff >= 0) {
            for (
              let j = Number(prevCell.dataset.col);
              j <= Number(activeCell.dataset.col);
              j++
            ) {
              const cell = row.querySelector(`td[data-col="${j}"]`);
              activeCells.push(cell);
            }
          } else {
            for (
              let j = Number(activeCell.dataset.col);
              j <= Number(prevCell.dataset.col);
              j++
            ) {
              const cell = row.querySelector(`td[data-col="${j}"]`);
              activeCells.push(cell);
            }
          }
        }
      }
    } else if (!e.shiftKey)
      activeColumnCells = grid.querySelectorAll(
        `td[data-col="${activeCell.dataset.col}"]`,
      );
    const {row, col} = activeCell.dataset;
    const activeRow = grid.querySelector(`tr[data-row="${row}"]`);
    if (prevActiveRows.length > 0) {
      prevActiveRows.forEach(element => {
        element.classList.remove('active');
      });
    }
    addActiveClass(activeCell);
    addActiveClass(activeRow);
    activeColumnCells.forEach(element => {
      addActiveClass(element);
    });
    prevActiveRows.forEach(element => {
      removeActiveClass(element);
    });
    activeRows.forEach(element => {
      addActiveClass(element);
    });
    activeCells.forEach(element => {
      setActiveCell(element);
    });
    setActiveCell(activeCell);
    prevCell = activeCell;
    prevActiveRows = activeRows;
  }
};

grid.addEventListener('click', handleClick);
