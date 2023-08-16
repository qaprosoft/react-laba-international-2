const container = document.querySelector(".container");

//create grid
const createGrid = () => {
  const [ROWS, COLUMNS] = [30, 20];

  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const cellInfo = document.createElement("span");
      cellInfo.classList.add("cell__info", "hidden");
      cellInfo.textContent = `${row + 1} ${column + 1}`;

      cell.append(cellInfo);
      container.append(cell);
    }
  }
};
createGrid();

//highlight cell
const changeCell = (currentElement, isShift) => {
  const container = currentElement.parentElement;
  const cells = container.childNodes;
  const [row, column] = [
    currentElement.firstChild.textContent.split(" ")[0],
    currentElement.firstChild.textContent.split(" ")[1],
  ];

  if (!isShift) {
    cells.forEach((cell) => {
      cell.classList.remove("highlighted");
      cell.firstChild.classList.add("hidden");
    });
  }

  for (const cell of cells) {
    cell.classList.remove("selected");
    const [currentRow, currentColumn] = [
      cell.firstChild.innerHTML.split(" ")[0],
      cell.firstChild.innerHTML.split(" ")[1],
    ];

    if (currentRow === row || currentColumn === column)
      cell.classList.add("highlighted");

    if (currentRow === row && currentColumn === column)
      cell.classList.add("selected");
    cell.firstChild.classList.remove("hidden");
  }
};

//create handler and add listener to the container
const handler = (event) => {
  const target = event.target;
  const isShift = event.shiftKey;

  if (!target.classList.contains("cell")) return;
  changeCell(target, isShift);
};

container.addEventListener("click", handler);
