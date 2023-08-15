const gridContainer = document.querySelector('.grid');

for (let row = 1; row <= 30; row++) {
  for (let col = 1; col <= 20; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', `${col}/${row}`);
    gridContainer.append(cell);
  }
}

const cell = document.querySelectorAll('.cell');
gridContainer.addEventListener('click', e => {
  const target = e.target;
  let position;
  if (target && target.classList.contains('cell')) {
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      target.textContent = '';
    } else {
      target.classList.add('active');
      position = target.getAttribute('id');
      target.textContent = position;
      console.log(position);
    }
  }
  const positionX = position.split('/')[0];
  const positionY = position.split('/')[1];
  cell.forEach(item => {
    const highlightLocation = item.getAttribute('id');
    const highlightLocationX = highlightLocation.substring(
      0,
      highlightLocation.indexOf('/'),
    );
    const highlightLocationY = highlightLocation.substring(
      highlightLocation.indexOf('/') + 1,
    );
    item.classList.toggle(
      'highlight',
      highlightLocationX === positionX || highlightLocationY === positionY,
    );
  });
});
