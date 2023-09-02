const themeSwitch = document.querySelector('.theme__switch');

themeSwitch.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});