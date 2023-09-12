const gridContainer = document.querySelector('.grid-container');
const numRows = 30;
const numCols = 20;
let selectedCells = new Set();
let shiftPressed = false;


for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.textContent = `${col}/${row}`;
        gridContainer.appendChild(cell);
    }
}


gridContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('cell')) {
        const clickedCell = event.target;

        if (shiftPressed) {
            clickedCell.classList.toggle('selected');
        } else {
            selectedCells.forEach(cell => cell.classList.remove('selected'));
            selectedCells.clear();

            clickedCell.classList.add('selected');
            selectedCells.add(clickedCell);
        }

        const row = clickedCell.dataset.row;
        const col = clickedCell.dataset.col;

        const cellsInRow = document.querySelectorAll(`.cell[data-row="${row}"]`);
        const cellsInCol = document.querySelectorAll(`.cell[data-col="${col}"]`);
        cellsInRow.forEach(cell => cell.classList.add('row-active'));
        cellsInCol.forEach(cell => cell.classList.add('col-active'));
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
        shiftPressed = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        shiftPressed = false;
    }
});
