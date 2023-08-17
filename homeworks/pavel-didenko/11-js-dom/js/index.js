const grid = document.querySelector('.cells__wrapper');
const rows = 30;
const colls = 20;

function createCell(coll, row) {
  const div = document.createElement('div');
  div.className = 'cell';
  const p = document.createElement('p');
  p.className = 'cell__info';
  p.innerHTML = `${coll}/${row}`;
  div.appendChild(p);
  return div;
}

function fillGrid(colls, rows, grid) {
  const cellNumber = colls * rows;
  for (let i = 0; i < cellNumber; i++) {
    const rowsCount = Math.floor(i / colls) + 1;
    const collsCount = (i % colls) + 1;
    grid.appendChild(createCell(collsCount, rowsCount));
  }
}

fillGrid(colls, rows, grid);

grid.addEventListener('click', function (event) {
  try {
    const selectedCell =
      event.target.tagName === 'DIV' ? event.target : event.target.parentNode;
    if (selectedCell.className !== 'cells__wrapper') {
      const column = selectedCell.firstChild.innerHTML.split('/')[0];
      const row = selectedCell.firstChild.innerHTML.split('/')[1];
      const selectedCellColor = 'rgb(0, 65, 169)';
      const selectedRowColumnColor = 'aqua';

      for (let child of this.children) {
        if (
          child.firstChild.innerHTML.split('/')[0] === column ||
          (child.firstChild.innerHTML.split('/')[1] === row && !event.shiftKey)
        ) {
          child.style.backgroundColor = selectedRowColumnColor;
          child.firstChild.style.display = 'block';
          selectedCell.style.backgroundColor = selectedCellColor;
          selectedCell.firstChild.style.display = 'block';
        } else if (!event.shiftKey) {
          child.style.backgroundColor = '#FFFFFF';
          child.firstChild.style.display = 'none';
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});
