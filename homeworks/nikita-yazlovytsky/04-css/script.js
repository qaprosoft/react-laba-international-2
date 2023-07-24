const contentButtons = document.querySelector('.content__buttons');
const portfolioButton = document.querySelector('.content__buttons-portfolio');
const skillsButton = document.querySelector('.content__buttons-skills');
const contactButton = document.querySelector('.contact__buttons-contact__button');
const toggleImage = document.querySelector('.toggle__image');
const facebookImage = document.querySelector('.facebook__image');
const instagramImage = document.querySelector('.instagram__image');
const linkedinImage = document.querySelector('.linkedin__image');
const twitterImage = document.querySelector('.twitter__image');



document.querySelector('.theme__changer-button').addEventListener('click', () => {
        document.body.classList.toggle("dark");
    }            
);

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    contentButtons.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    portfolioButton.classList.toggle("dark");
});


document.querySelector('.theme__changer-button').addEventListener('click', () => {
    skillsButton.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    contactButton.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    toggleImage.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    facebookImage.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    instagramImage.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    linkedinImage.classList.toggle("dark");
});

document.querySelector('.theme__changer-button').addEventListener('click', () => {
    twitterImage.classList.toggle("dark");
});