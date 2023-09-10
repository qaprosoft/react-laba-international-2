const rows = 30;
const columns = 20;


function createGrid(){
  const gridContainer = document.querySelector(".grid");

  for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const gridCell = document.createElement('div');
          gridCell.classList.add('grid__cell');
          gridCell.setAttribute('row', `${row + 1}`);
          gridCell.setAttribute('column', `${col + 1}`);

          gridCell.addEventListener('click', e=> eventHandler(e, gridCell));

          gridContainer.appendChild(gridCell);
        }
      }

}


function eventHandler(e, div){
  e.preventDefault();
  if(e.shiftKey){
      div === document.querySelector(".grid__cell--selected")? deselect() : select(div)
  } else {
    if(div===document.querySelector(".grid__cell--selected")){
      deselect()
    } else {
      deselect();
      select(div)
    }
  }
  
  }


function deselect(){
    const selected = document.querySelectorAll(".grid__cell--selected");
    if(selected){
      selected.forEach((e)=>{
        e.classList.remove("grid__cell--selected");
        e.textContent = "";
      });

      const secondarySelected = document.querySelectorAll(".grid__cell--secondary");
      secondarySelected.forEach(e=>e.classList.remove("grid__cell--secondary"));

    }
};

function select(cell){
 

  const column = cell.getAttribute("column");
  const row = cell.getAttribute("row");
  const alignedCells = document.querySelectorAll(
    `div[row="${row}"], div[column="${column}"]`,
  );
 
  alignedCells.forEach(e=>e.classList.add("grid__cell--secondary"));

  cell.classList.add("grid__cell--selected");
  cell.textContent = `y=${column} x=${row}`;
 
};


createGrid();
