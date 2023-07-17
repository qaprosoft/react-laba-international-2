const themeToggle = document.getElementById('theme-switcher');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});