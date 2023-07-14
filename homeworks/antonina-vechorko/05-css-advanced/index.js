const body = document.body;
const themeSwitch = document.querySelector('.theme-switch');
const themeSwitchIcon = document.querySelector('.theme-switch__icon')
const darkSmIcon1 = document.querySelector('.icon1');
const darkSmIcon2 = document.querySelector('.icon2');
const darkSmIcon3 = document.querySelector('.icon3');
const darkSmIcon4 = document.querySelector('.icon4');
const skillContainer = document.querySelector('.skill-container');
const skillsTab = document.getElementById('skills-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const portfolioContainer = document.querySelector('.portfolio-container');

skillsTab.addEventListener('click', () => {
    skillContainer.style.display = 'block';
    portfolioContainer.style.display = 'none';
});

portfolioTab.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    portfolioContainer.style.display = 'flex';
});

const updateIcons = () => {
    if (body.classList.contains('dark-mode')) {
        themeSwitchIcon.src = 'assets/dark-switcher.svg';
        darkSmIcon1.src = 'assets/dark-github.svg';
        darkSmIcon2.src = 'assets/dark-twitter.svg';
        darkSmIcon3.src = 'assets/dark-linkedin.svg';
        darkSmIcon4.src = 'assets/dark-youtube.svg';
    } else {
        themeSwitchIcon.src = 'assets/theme-switch.svg';
        darkSmIcon1.src = 'assets/github.svg';
        darkSmIcon2.src = 'assets/twitter.svg';
        darkSmIcon3.src = 'assets/linkedin.svg';
        darkSmIcon4.src = 'assets/youtube.svg';
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