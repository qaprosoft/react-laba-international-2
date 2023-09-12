import './styles/main.scss';

document.getElementById('theme-toggler').addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.replace('light-theme', 'dark-theme');
  } else {
    document.body.classList.replace('dark-theme', 'light-theme');
  }
});
