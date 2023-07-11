const modal = document.querySelector('#modal');
const form = document.querySelector('.modal__form');
const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('#close-modal');

openButton.onclick = function () {
  modal.style.display = 'flex';
  form.style.animation = 'scale-in 0.5s ease-in-out';
};

closeButton.onclick = function () {
  form.style.animation = 'scale-out .5s ease-in-out';
};

form.onanimationend = function ({animationName}) {
  if (animationName === 'scale-out') {
    modal.style.display = 'none';
  }
};
