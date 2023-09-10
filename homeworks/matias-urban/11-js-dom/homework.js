const container = document.querySelector(".main");
const rows = 30;
const columns = 20;
let currentlyClickedElement = null;

const makeGrid = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const box = document.createElement("div");
      const newSpan = document.createElement("span");
      box.classList.add("box");
      newSpan.classList.add("hide");
      newSpan.classList.add("innerText");
      newSpan.innerHTML = `Row: ${i+1} Column: ${j+1}`;
      container.appendChild(box);
      box.appendChild(newSpan);
    }
  }
}

const highlightRowAndColumn = (row, column, isClicked) => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.remove("light-blue");
  });
  boxes.forEach((box, index) => {
    const boxRow = Math.floor(index / columns);
    const boxColumn = index % columns;
    if (boxRow === row || boxColumn === column) {
      box.classList.add("light-blue");
    }
  });
  if (isClicked) {
    boxes.forEach((box) => {
      box.classList.remove("light-blue");
    });
  }
};

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("box")) {
    const boxIndex = Array.from(clickedElement.parentElement.children).indexOf(clickedElement);
    const row = Math.floor(boxIndex / columns);
    const column = boxIndex % columns;
    if (currentlyClickedElement === clickedElement) {
      clickedElement.classList.remove("clicked");
      const span = clickedElement.querySelector(".innerText");
      span.classList.add("hide");
      highlightRowAndColumn(row, column, true);
      currentlyClickedElement = null;
    } else {
      if (currentlyClickedElement !== null) {
        currentlyClickedElement.classList.remove("clicked");
        const span = currentlyClickedElement.querySelector(".innerText");
        span.classList.add("hide");
        const [prevRow, prevColumn] = currentlyClickedElement.dataset.coords.split(",").map(Number);
        highlightRowAndColumn(prevRow, prevColumn, true);
      }
      const box = clickedElement;
      box.classList.add("clicked");
      const span = box.querySelector(".innerText");
      span.classList.remove("hide");
      highlightRowAndColumn(row, column);
      currentlyClickedElement = box;
      currentlyClickedElement.dataset.coords = `${row},${column}`;
    }
  }
});

makeGrid(rows, columns);
