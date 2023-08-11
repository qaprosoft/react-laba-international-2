const grid = document.querySelector('.cells__wrapper');
const rows = 30;
const colls = 20;

function createCell(coll, row){
  const div = document.createElement('div');
  div.className = 'cell';
  const p = document.createElement('p');
  p.className = 'cell__info';
  p.innerHTML = `${coll}/${row}`;
  div.appendChild(p);
  return div;
}

function fillGrid(colls, rows, grid){
  const cellNumber = colls * rows;
  for (let i = 0; i < cellNumber; i++) {
    let rowsCount = Math.floor(i / colls) + 1;
    let collsCount = i % colls + 1;
    grid.appendChild(createCell(collsCount, rowsCount));
  }
}

fillGrid(colls, rows, grid);


grid.addEventListener('click', function(event){
  for(let child of this.children){
    child.style.backgroundColor = "#FFFFFF";
    child.firstChild.style.display = 'none';
  }

  event.target.style.backgroundColor = 'aqua';
  event.target.firstChild.style.display = 'block';
})

