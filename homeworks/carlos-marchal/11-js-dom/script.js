const gridContainer = document.querySelector(".grid");
const rows = 30;
const columns = 20;


function createGrid(){
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid_cell');
        gridItem.textContent = `y=${row + 1}, x=${col + 1}`; // You can customize the content here
        gridContainer.appendChild(gridItem);
    }
}
}

createGrid();



