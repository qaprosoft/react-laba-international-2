let selectedCells = new Set();
const tbody = document.querySelector('tbody');

drawGrid(30, 20);

function drawGrid(numRows, numCols) {
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement('td');
      cell.setAttribute('data-row', i);
      cell.setAttribute('data-col', j);
      cell.addEventListener('click', event =>
        onBlockClick({event, j, i, numRows, numCols}),
      );
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

function onBlockClick({event, j, i, numRows, numCols}) {
  const clickedCell = event.target;
  if (event.shiftKey) {
    selectedCells.add(clickedCell);
  } else {
    selectedCells.forEach(cell => {
      cell.classList.remove('selected');
      cell.textContent = '';
    });
    selectedCells.clear();
    selectedCells.add(clickedCell);
  }
  clickedCell.classList.add('selected');
  clickedCell.textContent = `${j + 1}/${i + 1}`;
  for (const entry of selectedCells.entries()) {
    updateActiveRowCol(entry[0], numRows, numCols, event.shiftKey);
  }
}

function updateActiveRowCol(clickedCell, numRows, numCols, isShiftPressed) {
  const activeRow = parseInt(clickedCell.getAttribute('data-row'));
  const activeCol = parseInt(clickedCell.getAttribute('data-col'));

  if (!isShiftPressed) {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const cell = tbody.rows[i].cells[j];
        cell.classList.remove('active');
      }
    }
  }

  if (activeRow !== -1 && activeCol !== -1) {
    for (let i = 0; i < numRows; i++) {
      tbody.rows[i].cells[activeCol].classList.add('active');
    }
    for (let j = 0; j < numCols; j++) {
      tbody.rows[activeRow].cells[j].classList.add('active');
    }
  }
}
