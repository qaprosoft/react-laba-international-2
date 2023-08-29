const skillContainer = document.querySelector('.skills');
const skillsTab = document.getElementById('skills-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const portfolioContainer = document.querySelector('.portfolio');

window.addEventListener('DOMContentLoaded', () => {
    const selectedTab = localStorage.getItem('selectedTab');

    if (selectedTab === 'skills') {
        skillContainer.style.display = 'block';
        portfolioContainer.style.display = 'none';
        skillsTab.checked = true;
    } else if (selectedTab === 'portfolio') {
        skillContainer.style.display = 'none';
        portfolioContainer.style.display = 'flex';
        portfolioTab.checked = true;
    }
});

skillsTab.addEventListener('click', () => {
    skillContainer.style.display = 'block';
    portfolioContainer.style.display = 'none';

    localStorage.setItem('selectedTab', 'skills');
});

portfolioTab.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    portfolioContainer.style.display = 'flex';

    localStorage.setItem('selectedTab', 'portfolio');
});
