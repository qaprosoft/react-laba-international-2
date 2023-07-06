const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});