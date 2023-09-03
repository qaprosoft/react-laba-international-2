const body = document.body;
const themeSwitch = document.querySelector('.header__theme-switch');
const themeSwitchIcon = document.querySelector('.header__theme-switch-icon');
const darkSmIcon1 = document.querySelector('.person__social-media-icon--github');
const darkSmIcon2 = document.querySelector('.person__social-media-icon--twitter');
const darkSmIcon3 = document.querySelector('.person__social-media-icon--linkedin');
const darkSmIcon4 = document.querySelector('.person__social-media-icon--youtube');

const updateIcons = () => {
    if (body.classList.contains('dark-mode')) {
        themeSwitchIcon.src = 'assets/icons/dark-switcher.svg';
        darkSmIcon1.src = 'assets/icons/dark-github.svg';
        darkSmIcon2.src = 'assets/icons/dark-twitter.svg';
        darkSmIcon3.src = 'assets/icons/dark-linkedin.svg';
        darkSmIcon4.src = 'assets/icons/dark-youtube.svg';
    } else {
        themeSwitchIcon.src = 'assets/icons/theme-switch.svg';
        darkSmIcon1.src = 'assets/icons/github.svg';
        darkSmIcon2.src = 'assets/icons/twitter.svg';
        darkSmIcon3.src = 'assets/icons/linkedin.svg';
        darkSmIcon4.src = 'assets/icons/youtube.svg';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcons();
}

const changeTheme = () => {
    body.classList.toggle('dark-mode');
    updateIcons();

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
}

themeSwitch.addEventListener('click', changeTheme);
