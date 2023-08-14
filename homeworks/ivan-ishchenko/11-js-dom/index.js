const removeHiglight = () => {
  const prevActive = document.querySelectorAll('.active');
  if (prevActive) {
    prevActive.forEach(cell => {
      cell.classList.remove('active');
      cell.textContent = '';
    });

    const prevHighlight = document.querySelectorAll('.highlight');
    prevHighlight.forEach(cell => cell.classList.remove('highlight'));
  }
};

const addHighlight = div => {
  const col = div.getAttribute('data-col');
  const row = div.getAttribute('data-row');
  const adjacentCells = document.querySelectorAll(
    `div[data-row="${row}"], div[data-col="${col}"]`,
  );
  adjacentCells.forEach(cell => cell.classList.add('highlight'));

  div.classList.add('active');
  div.textContent = `${col}/${row}`;
};

const gridSetup = () => {
  const grid = document.getElementById('grid');

  for (let col = 0, row = 0; row < 30; col++) {
    if (col >= 20) {
      col = 0;
      row++;
      if (row === 30) break;
    }
    const div = document.createElement('div');
    div.setAttribute('data-col', col);
    div.setAttribute('data-row', row);

    div.addEventListener('click', e => {
      if (!e.shiftKey) removeHiglight();
      addHighlight(div);
    });

    grid.appendChild(div);
  }
};

gridSetup();
