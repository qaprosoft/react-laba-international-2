const body = document.body;
const themeSwitch = document.querySelector('.header__theme-switch');
const themeSwitchIcon = document.querySelector('.header__theme-switch-icon');
const socialMediaIcons = document.querySelectorAll('.person__social-media-icon');
const darkSmIcon1 = document.querySelector('.person__social-media-icon--github');
const darkSmIcon2 = document.querySelector('.person__social-media-icon--twitter');
const darkSmIcon3 = document.querySelector('.person__social-media-icon--linkedin');
const darkSmIcon4 = document.querySelector('.person__social-media-icon--youtube');
const skillContainer = document.querySelector('.skills');
const skillsTab = document.getElementById('skills-tab');
const portfolioTab = document.getElementById('portfolio-tab');
const portfolioContainer = document.querySelector('.portfolio');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

skillsTab.addEventListener('click', () => {
    skillContainer.style.display = 'block';
    portfolioContainer.style.display = 'none';
});

portfolioTab.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    portfolioContainer.style.display = 'flex';
});

socialMediaIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg)';
        this.style.transition = 'transform 0.5s ease';
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 767 && scrollPosition > 500) {
            // Show the button
            scrollToTopBtn.style.display = 'block';
        } else {
            // Hide the button
            scrollToTopBtn.style.display = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();
});
