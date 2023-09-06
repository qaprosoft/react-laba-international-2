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
      newSpan.innerHTML = `Row: ${j} Column: ${i}`;
      container.appendChild(box);
      box.appendChild(newSpan);
    }
  }
}

const highlightRowAndColumn = (row, column) => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    const boxRow = Math.floor(index / columns);
    const boxColumn = index % columns;

    if (boxRow === row || boxColumn === column) {
      box.classList.toggle("light-blue");
	  box.classList.add("light-blue");
    } else {
      box.classList.remove("light-blue");
    }
  });
}

container.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("box")) {
    const boxIndex = Array.from(clickedElement.parentElement.children).indexOf(clickedElement);
    const row = Math.floor(boxIndex / columns);
    const column = boxIndex % columns;

    if (currentlyClickedElement !== null) {
      currentlyClickedElement.classList.remove("clicked");
      const span = currentlyClickedElement.querySelector(".innerText");
      span.classList.add("hide");
    }

    const box = clickedElement;
    box.classList.add("clicked");
    const span = box.querySelector(".innerText");
    span.classList.remove("hide");
    highlightRowAndColumn(row, column);
    currentlyClickedElement = box;
  }
  if (clickedElement.classList.contains("innerText")) {
    const box = clickedElement.parentElement;
    const boxIndex = Array.from(box.parentElement.children).indexOf(box);
    const row = Math.floor(boxIndex / columns);
    const column = boxIndex % columns;

    if (currentlyClickedElement !== null && currentlyClickedElement !== box) {
      currentlyClickedElement.classList.remove("clicked");
      const span = currentlyClickedElement.querySelector(".innerText");
      span.classList.add("hide");
    }
    highlightRowAndColumn(row, column);
    const span = clickedElement;
    span.classList.toggle("hide");
    box.classList.toggle("clicked");
    currentlyClickedElement = box;
  }
});

makeGrid(rows, columns);