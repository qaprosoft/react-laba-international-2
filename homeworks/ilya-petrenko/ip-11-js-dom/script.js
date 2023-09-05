const grid = document.getElementById("grid");
let selectedCells = [];

for (let row = 0; row < 30; row++) {
  for (let col = 0; col < 20; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.col = col;
    grid.appendChild(cell);
  }
}

grid.addEventListener("click", (event) => {
  const cell = event.target;

  if (cell.classList.contains("cell")) {
    if (!event.shiftKey) {
      selectedCells.forEach((selectedCell) => {
        selectedCell.classList.remove("selected");
      });
      selectedCells = [];
    }

    cell.classList.add("selected");
    selectedCells.push(cell);

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    cell.textContent = `${col}/${row}`;
  }
});


