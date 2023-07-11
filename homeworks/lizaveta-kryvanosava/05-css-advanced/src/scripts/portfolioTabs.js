let currentTabInPortfolio = document.querySelector('.portfolio__content');
let height = 0;
let progress = 0;
let count;

document.querySelector('#tab-toggle').onchange = function (event) {
  currentTabInPortfolio.classList.add('hidden');
  currentTabInPortfolio = document.querySelector(`.${event.target.value}`);
  currentTabInPortfolio.classList.remove('hidden');

  height = currentTabInPortfolio.offsetHeight;
  count = height / 30;

  currentTabInPortfolio.style.height = '0%';

  window.requestAnimationFrame(step);
};

function step() {
  progress += count;

  currentTabInPortfolio.style.height = `${progress}px`;

  if (progress < height) {
    window.requestAnimationFrame(step);
  } else {
    progress = 0;
  }
}
