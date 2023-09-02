import html from './index.html';

let currentTabInPortfolio = document.querySelector('.portfolio__content');

document.querySelector('.theme-toggle').addEventListener('click', changeTheme);

document
  .querySelector('#tab-toggle')
  .addEventListener('change', changeTabInPortfolio);

function changeTheme() {
  document.documentElement.setAttribute(
    'color-scheme',
    document.documentElement.getAttribute('color-scheme') === 'light'
      ? 'dark'
      : 'light',
  );
}

function changeTabInPortfolio(event) {
  currentTabInPortfolio.classList.add('hidden');
  currentTabInPortfolio = document.querySelector(`.${event.target.value}`);
  currentTabInPortfolio.classList.remove('hidden');
}
