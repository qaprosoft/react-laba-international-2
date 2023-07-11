let currentTabInPortfolio = document.querySelector('.portfolio__content');

document
  .querySelector('#tab-toggle')
  .addEventListener('change', changeTabInPortfolio);

function changeTabInPortfolio(event) {
  currentTabInPortfolio.classList.add('hidden');
  currentTabInPortfolio = document.querySelector(`.${event.target.value}`);
  currentTabInPortfolio.classList.remove('hidden');
}
