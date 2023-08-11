const numRows = 30;
const numCols = 20;
let activeRow = -1;
let activeCol = -1;
let selectedCells = new Set();

const tbody = document.querySelector("tbody");


for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement("td");
        cell.textContent = `${j + 1}/${i + 1}`;

        cell.addEventListener("click", (event) => {
            const clickedCell = event.target;
            if (event.shiftKey) {
                selectedCells.add(clickedCell);
            } else {
                selectedCells.forEach((cell) => {
                    cell.classList.remove("selected");
                });
                selectedCells.clear();
                selectedCells.add(clickedCell);
            }
            clickedCell.classList.add("selected");
            activeRow = i;
            activeCol = j;
            updateActiveRowCol();
        });

        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

function updateActiveRowCol() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = tbody.rows[i].cells[j];
            cell.classList.remove("active");
        }
    }
    if (activeRow !== -1 && activeCol !== -1) {
        for (let i = 0; i < numRows; i++) {
            tbody.rows[i].cells[activeCol].classList.add("active");
        }
        for (let j = 0; j < numCols; j++) {
            tbody.rows[activeRow].cells[j].classList.add("active");
        }
    }
}