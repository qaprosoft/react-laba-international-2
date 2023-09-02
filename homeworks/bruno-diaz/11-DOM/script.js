const gridContainer = document.getElementById("gridContainer");

function createCell(row, col) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.dataset.row = row;
  cell.dataset.col = col;
  return cell;
}

for (let row = 0; row < 30; row++) {
  for (let col = 0; col < 20; col++) {
    const cell = createCell(row, col);
    gridContainer.appendChild(cell);
  }
}

function cellsNotSelected() {
  const cellsSelected = document.querySelectorAll(
    ".selected, .active-row, .active-col"
  );
  for (const cell of cellsSelected) {
    cell.classList.remove("selected", "active-row", "active-col");
    cell.textContent = "";
  }
}

gridContainer.addEventListener("click", (event) => {
  const cell = event.target.closest(".cell");
  if (cell) {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    cellsNotSelected();

    cell.classList.add("selected");
    cell.textContent = `${col + 1}/${row + 1}`;

    const ActiveRowCells = document.querySelectorAll(
      `.cell[data-row="${row}"]`
    );
    const ActiveColCells = document.querySelectorAll(
      `.cell[data-col="${col}"]`
    );

    for (const activeCell of ActiveRowCells) {
      activeCell.classList.add("active-row");
      activeCell.textContent = `${Number(activeCell.dataset.col) + 1}/${
        Number(activeCell.dataset.row) + 1
      }`;
    }

    for (const activeCell of ActiveColCells) {
      activeCell.classList.add("active-col");
      activeCell.textContent = `${Number(activeCell.dataset.col) + 1}/${
        Number(activeCell.dataset.row) + 1
      }`;
    }
  }
});
