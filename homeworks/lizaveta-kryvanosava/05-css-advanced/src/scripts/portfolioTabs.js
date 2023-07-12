let currentTabInPortfolio = document.querySelector('.portfolio__content');
let previousTabInPortfolio = document.querySelector('.portfolio__skills');
let progress = 0;

document.querySelector('#tab-toggle').onchange = function (event) {
  previousTabInPortfolio = currentTabInPortfolio;
  currentTabInPortfolio = document.querySelector(`.${event.target.value}`);

  window.requestAnimationFrame(stepOut);
};

function stepOut() {
  progress += 10;

  previousTabInPortfolio.style.transform = `translateX(${progress}%)`;

  if (progress < 130) {
    window.requestAnimationFrame(stepOut);
  } else {
    progress = 0;

    currentTabInPortfolio.classList.remove('hidden');
    previousTabInPortfolio.classList.add('hidden');

    window.requestAnimationFrame(stepIn);
  }
}

function stepIn() {
  progress += 10;

  currentTabInPortfolio.style.transform = `translateX(${progress - 130}%)`;

  if (progress < 130) {
    window.requestAnimationFrame(stepIn);
  } else {
    progress = 0;
  }
}
