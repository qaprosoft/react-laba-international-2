const gridContainer = document.querySelector('.grid');
const columns = 20;
const rows = 30;

createGrid(rows, columns);

function createGrid(rows, columns) {
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= columns; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', `${col}/${row}`);
      gridContainer.append(cell);
    }
  }
}

const cell = document.querySelectorAll('.cell');

function highlightRowColumn(item, positionX, positionY) {
  const highlightLocation = item.getAttribute('id');
  const [highlightLocationX, highlightLocationY] = highlightLocation.split('/');
  item.classList.toggle(
    'highlight',
    highlightLocationX === positionX || highlightLocationY === positionY,
  );
}

gridContainer.addEventListener('click', e => {
  const target = e.target;
  let position;
  if (target && target.classList.contains('cell')) {
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      target.textContent = '';
    } else {
      target.classList.add('active');
      position = target.getAttribute('id');
      target.textContent = position;
      console.log(position);
    }
  }

  const [positionX, positionY] = position.split('/');

  cell.forEach(item => {
    highlightRowColumn(item, positionX, positionY);
  });
});
