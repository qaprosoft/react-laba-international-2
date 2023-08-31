const gridContainer = document.querySelector(".grid");
const rows = 30;
const columns = 20;
let selectedCell;
let selectedRow;
let selectedColumn;


function createGrid(){
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid__cell");
        const gridCoordsP = document.createElement("p");
        gridCoordsP.textContent = `y=${row + 1}, x=${col + 1}`;
        gridCell.appendChild(gridCoordsP);
        gridCell.setAttribute("row", `${row+1}`);
        gridCell.setAttribute("column", `${col+1}`);
        gridContainer.appendChild(gridCell);
    }
}
}

createGrid();



const cells = document.querySelectorAll(".grid__cell");

cells.forEach(e => {
    e.addEventListener("click", ()=>{
        if(selectedCell === undefined){
            toggleSelection(e, e.getAttribute("row"), e.getAttribute("column"))
        } else if( selectedCell === e){
            toggleSelection(selectedCell, selectedRow, selectedColumn);
        }
        toggleSelection(selectedCell, selectedRow, selectedColumn);
        toggleSelection(e, e.getAttribute("row"), e.getAttribute("column"));
        
    })
});




function getCellsByRowOrCol(axis, value){
    const cells = document.querySelectorAll(`[${axis}="${value}"]`);
    return cells;
};

function toggleSelection(element, row, column){
    getCellsByRowOrCol("row", row).forEach(e=>e.getAttribute("column")!=column? e.classList.toggle("grid__cell--secondary"): null);
    getCellsByRowOrCol("column", column).forEach(e=>e.getAttribute("row")!=row? e.classList.toggle("grid__cell--secondary"): null);
    element.classList.toggle("grid__cell--selected");

    if(element.classList.contains("grid__cell--selected")){
        selectedRow = element.getAttribute("row");
        selectedColumn = element.getAttribute("column");
        selectedCell = element;
    } else {
        selectedCell = undefined;
        selectedRow = undefined;
        selectedColumn = undefined;
    }
}