const numberOfColumns = 20;
const numberOfRows = 30;
const container = document.querySelector('.container');

const removeClass = (arrOfElements, className) => {
  arrOfElements.forEach(cell => cell.classList.remove(className));
};
const addClass = (arrOfElements, className) => {
  arrOfElements.forEach(cell => cell.classList.add(className));
};
const containerClickHandler = event => {
  const currentCell = event.target;
  const columnCells = document.querySelectorAll(
    `[data-x="${currentCell.dataset.x}"]`,
  );
  const rowCells = document.querySelectorAll(
    `[data-y="${currentCell.dataset.y}"]`,
  );

  if (!currentCell || !currentCell.classList.contains('container__cell'))
    return;

  if (!event.shiftKey) {
    removeClass(
      document.querySelectorAll('.container__cell--selected'),
      'container__cell--selected',
    );
    removeClass(
      document.querySelectorAll('.container__cell--highlighted'),
      'container__cell--highlighted',
    );
  }

  addClass(rowCells, 'container__cell--highlighted');
  addClass(columnCells, 'container__cell--highlighted');

  currentCell.classList.add('container__cell--selected');
};

for (let row = 1; row <= numberOfRows; row++) {
  for (let column = 1; column <= numberOfColumns; column++) {
    const cell = document.createElement('div');

    cell.classList.add('container__cell');
    cell.dataset.x = column;
    cell.dataset.y = row;

    container.append(cell);
  }
}

container.addEventListener('click', containerClickHandler);
