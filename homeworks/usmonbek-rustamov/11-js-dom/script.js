'use strict';

class Grid {
  grid = document.querySelector('.grid');
  ROWS = 30;
  COLS = 20;

  constructor() {
    this.fillGrid();
    this.grid.addEventListener('click', this.handleCellSelect.bind(this));
  }

  fillGrid() {
    for (let row = 1; row <= this.ROWS; row++) {
      for (let col = 1; col <= this.COLS; col++) {
        const cell = `
          <div
            class="grid__cell"
            data-row=${row}
            data-col=${col}>
            <p class="grid__cell-info"></p>
          </div>`;
        this.grid.insertAdjacentHTML('beforeend', cell);
      }
    }
  }

  handleCellSelect(e) {
    const selectedCell = e.target.closest('.grid__cell');
    if (!selectedCell) return;

    const {row: selectedRow, col: selectedCol} = selectedCell.dataset;
    for (let cell of this.grid.children) {
      const {row, col} = cell.dataset;

      if (!e.shiftKey) {
        this.clearCell(cell);
      }

      if (row === selectedRow || col === selectedCol) {
        // if shift was pressed and this cell was selected before
        // don't add highlighted class to it
        if (!cell.classList.contains('grid__cell_active')) {
          cell.classList.add('grid__cell_highlighted');
        }
      }
    }

    this.clearCell(selectedCell);
    selectedCell.classList.add('grid__cell_active');
    selectedCell.firstElementChild.textContent = `${selectedCol}/${selectedRow}`;
  }

  clearCell(cell) {
    cell.classList.remove('grid__cell_active', 'grid__cell_highlighted');
    cell.firstElementChild.textContent = '';
  }
}

new Grid();
