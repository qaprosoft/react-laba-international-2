const gridContainer = document.getElementById('gridContainer');
let selectedCells = new Set();

function createGrid(cols, rows) {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = row + 1;
            cell.dataset.col = col + 1;
            gridContainer.appendChild(cell);
        }
    }
}

function clearSelection() {
    selectedCells.forEach(cell => {
        cell.classList.remove('selected', 'clicked');
    });
    selectedCells.clear();
}

function selectCell(cell, addToSelection) {
    if (addToSelection) {
        if (selectedCells.has(cell)) {
            cell.classList.remove('selected', 'clicked');
            selectedCells.delete(cell);
        } else {
            cell.classList.add('selected', 'clicked');
            selectedCells.add(cell);
        }
    } else {
        clearSelection();
        cell.classList.add('selected', 'clicked');
        selectedCells.add(cell);
    }

    const row = cell.dataset.row;
    const col = cell.dataset.col;
    highlightActive(row, col);
}

function highlightActive(row, col) {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.classList.remove('active-row', 'active-column');
    });

    cells.forEach(cell => {
        if (cell.dataset.row === row) {
            cell.classList.add('active-row');
        }
        if (cell.dataset.col === col) {
            cell.classList.add('active-column');
        }
    });
}

gridContainer.addEventListener('click', event => {
    const clickedCell = event.target;
    if (!clickedCell.classList.contains('grid-cell')) return;

    if (event.shiftKey) {
        selectCell(clickedCell, true);
    } else {
        selectCell(clickedCell, false);
    }
});

createGrid(20, 30);
