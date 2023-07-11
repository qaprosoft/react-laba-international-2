const modal = document.querySelector('#modal');

const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('#close-modal');

openButton.onclick = function () {
  modal.style.display = 'flex';
};

closeButton.onclick = function () {
  modal.style.display = 'none';
};
