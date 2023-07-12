const skillsTab = document.getElementById('skills-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const skillContainer = document.querySelector('.skill-container');
const portfolioContainer = document.querySelector('.portfolio-container');

skillsTab.addEventListener('click', () => {
    skillContainer.style.display = 'block';
    portfolioContainer.style.display = 'none';
});

portfolioTab.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    portfolioContainer.style.display = 'flex';
});

// const themeSwitch = document.querySelector('.theme-switch');
// const body = document.body;
//
// themeSwitch.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

const body = document.body;
const themeSwitch = document.querySelector('.theme-switch');
const themeSwitchIcon = document.querySelector('.theme-switch__icon')
const darkSmIcon = document.querySelectorAll('.person__sm-icon')

// Check if the user's preference is already saved in local storage
const updateIcons = () => {
    if (body.classList.contains('dark-mode')) {
        themeSwitchIcon.src = 'assets/dark-switcher.svg'
    } else {
        themeSwitchIcon.src = 'assets/theme-switch.svg'
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