const themeToggle = document.getElementById('set-theme');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});