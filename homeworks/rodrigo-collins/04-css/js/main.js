
/* Dark mode toggler */

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

/* Scroll to top */

window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-to-top-button');

    if (window.scrollY > 200) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

document.querySelector('.scroll-to-top-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});