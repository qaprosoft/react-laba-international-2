const contentButtons = document.querySelector('.content__buttons');
const portfolioButton = document.querySelector('.portfolio__button');
const skillsButton = document.querySelector('.skills__button');
const contactButton = document.querySelector('.contact__button');
const toggleImage = document.querySelector('.toggle__image');
const facebookImage = document.querySelector('.facebook__image');
const instagramImage = document.querySelector('.instagram__image');
const linkedinImage = document.querySelector('.linkedin__image');
const twitterImage = document.querySelector('.twitter__image');
const sunImage = document.querySelector('.sun__image');
const scrollButton = document.querySelector('.scroll__up_icon');




document.querySelector('.color__button').addEventListener('click', () => {
        document.body.classList.toggle("dark");
    }            
);

document.querySelector('.color__button').addEventListener('click', () => {
    contentButtons.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    portfolioButton.classList.toggle("dark");
});


document.querySelector('.color__button').addEventListener('click', () => {
    skillsButton.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    contactButton.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    toggleImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    facebookImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    instagramImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    linkedinImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    twitterImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    sunImage.classList.toggle("dark");
});

document.querySelector('.color__button').addEventListener('click', () => {
    scrollButton.classList.toggle("dark");
});

