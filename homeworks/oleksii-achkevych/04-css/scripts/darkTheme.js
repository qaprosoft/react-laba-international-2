const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', function() {
  // Переключаем классы стилей для основного элемента страницы
  document.body.classList.toggle('dark-theme');
});