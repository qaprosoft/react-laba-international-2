const cellsAmount = 600;
const main = document.querySelector('main');
let activeElement;
let activeElements = [];

for (let i = 1; i <= cellsAmount; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('cell', `cell-${i}`);
  main.appendChild(gridItem);
}

main.addEventListener('pointerdown', function (event) {
  if (activeElement && !event.shiftKey) {
    const activeCells = document.querySelectorAll('.active');
    activeCells.forEach(e => {
      e.classList.remove('active');
    });
    activeElements = [];
  }
  const cell = event.target;
  const cellID = [...cell.classList][1].split('-')[1];
  const cellRow = Math.floor(
    cellID % 20 === 0 ? (cellID - 1) / 20 : cellID / 20,
  );
  const cellColumn = cellID % 20;
  const gridItems = document.querySelectorAll('.cell');

  activeElements.push({cellID, row: cellRow, column: cellColumn});

  gridItems.forEach((item, index) => {
    const rowIndex = Math.floor(index / 20);
    const colIndex = (index + 1) % 20;

    activeElements.forEach(elem => {
      if (rowIndex === elem.row) {
        item.classList.add('selected-row');
      } else if (!activeElements.find(f => f.row === rowIndex)) {
        item.classList.remove('selected-row');
      }

      if (colIndex === elem.column) {
        item.classList.add('selected-column');
      } else if (!activeElements.find(f => f.column === colIndex)) {
        item.classList.remove('selected-column');
      }
    });
  });

  activeElement = document.querySelector(`.cell-${cellID}`);
  activeElement.classList.add('active');
});
