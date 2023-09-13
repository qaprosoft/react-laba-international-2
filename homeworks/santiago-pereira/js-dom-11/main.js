//selector and main variables
const tableBody = document.querySelector('.tableBody');
let tr;
let td;

function tableMaker(col, rows) {
  for (let i = 1; i <= rows; i++) {
    tr = document.createElement('tr');
    tr.className = 'tableRow';
    tr.id = `row${i}`; // Assigns a unique id to each row
    tableBody.appendChild(tr);

    for (let j = 1; j <= col; j++) {
      td = document.createElement('td');
      td.className = 'tableColumn';
      td.id = `col${j}`; // Assigns a unique id to each column
      tr.appendChild(td);
    }
  }

  tableBody.addEventListener('click', e => {
    const clicked = e.target;
    const selectedCol = clicked.getAttribute('id');
    const selectedRow = clicked.closest('tr').getAttribute('id');

    // Clear previously selected background color and text content
    const allCells = document.querySelectorAll('td');
    allCells.forEach(cell => {
      cell.style.backgroundColor = '';
      cell.textContent = '';
    });

    //change the bgColor of active column
    const columns = document.querySelectorAll(`[id^="${selectedCol}"]`);
    columns.forEach(column => {
      column.style.backgroundColor = 'lightblue';
    });

    //change the bgColor of active row
    const cellsInRow = document.querySelectorAll(`#${selectedRow} td`);
    cellsInRow.forEach(cell => {
      cell.style.backgroundColor = 'lightblue';
    });

    //assigns text content and background color of the clicked cell.
    clicked.textContent = `${selectedCol}- ${selectedRow}`;
    clicked.style.backgroundColor = 'blue';
    clicked.style.color = 'white';
  });
}

console.log(tableMaker(20, 30));
