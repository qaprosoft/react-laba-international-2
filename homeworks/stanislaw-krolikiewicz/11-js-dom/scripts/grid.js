let prevCell,
  prevActiveRows = [],
  prevActiveColumns = [];

// creating grid
const grid = document.querySelector('tbody');

for (let i = 0; i < 30; i++) {
  const row = document.createElement('tr');
  row.setAttribute('data-row', i + 1);
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('td');
    // adding data attributes
    cell.setAttribute('data-row', i + 1);
    cell.setAttribute('data-col', j + 1);
    cell.classList.add('cell');
    row.appendChild(cell);
  }
  grid.append(row);
}

// style methods
const addHighlight = element => {
  element.classList.add('active');
};
const removeHighlight = element => {
  element.classList.remove('active');
};
const setActiveCell = element => {
  element.innerText = element.dataset.col + '/' + element.dataset.row;
};
const removeActiveCell = element => {
  removeHighlight(element);
  element.innerText = '';
};

const handleClick = e => {
  if (e.target instanceof HTMLTableCellElement) {
    const activeCell = e.target;
    const {row: activeRow, col: activeCol} = activeCell.dataset;

    let activeCells = [],
      activeRows = [],
      activeColumns = [];

    // removing highlight and active state from previous cells
    if (prevActiveColumns.length > 0) {
      prevActiveColumns.forEach(element => {
        removeActiveCell(element);
      });
    }
    if (prevActiveRows.length > 0) {
      prevActiveRows.forEach(element => {
        removeHighlight(element);
      });
    }

    // selecting cells with shift key
    if (e.shiftKey && prevCell) {
      const {row: prevRow, col: prevCol} = prevCell.dataset;
      const rowDiff = activeRow - prevRow;
      const colDiff = activeCol - prevCol;

      const pushActiveColumns = (smallerCol, biggerCol) => {
        for (let i = Number(smallerCol); i <= Number(biggerCol); i++)
          activeColumns.push(...grid.querySelectorAll(`td[data-col="${i}"]`));
      };

      //method for selecting cells in a row used in pushActiveRows
      const pushActiveCells = (smallerCol, biggerCol, row) => {
        for (let i = Number(smallerCol); i <= Number(biggerCol); i++) {
          const cell = row.querySelector(`td[data-col="${i}"]`);
          activeCells.push(cell);
        }
      };

      const pushActiveRows = (smallerRow, biggerRow) => {
        for (let i = Number(smallerRow); i <= Number(biggerRow); i++) {
          const row = grid.querySelector(`tr[data-row="${i}"]`);
          activeRows.push(row);
          if (colDiff >= 0) pushActiveCells(prevCol, activeCol, row);
          else pushActiveCells(activeCol, prevCol, row);
        }
      };

      if (colDiff >= 0) pushActiveColumns(prevCol, activeCol);
      else pushActiveColumns(activeCol, prevCol);

      if (rowDiff >= 0) pushActiveRows(prevRow, activeRow);
      else pushActiveRows(activeRow, prevRow);
    } else {
      // selecting single cell
      activeColumns = grid.querySelectorAll(`td[data-col="${activeCol}"]`);
      activeRows = grid.querySelectorAll(`tr[data-row="${activeRow}"]`);
    }

    // setting active cells
    setActiveCell(activeCell);
    activeCells.forEach(element => {
      setActiveCell(element);
    });

    // highlighting active rows and columns
    activeColumns.forEach(element => {
      addHighlight(element);
    });
    activeRows.forEach(element => {
      addHighlight(element);
    });

    // saving previous state
    prevCell = activeCell;
    prevActiveRows = activeRows;
    prevActiveColumns = activeColumns;
  }
};

grid.addEventListener('click', handleClick);
