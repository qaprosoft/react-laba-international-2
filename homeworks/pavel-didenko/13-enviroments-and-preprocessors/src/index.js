//Scripts
import './scripts/animation';
import './scripts/scroll-to-top';
//Styles
import './styles/styles.scss';
import './styles/animations/greenRedBlue.scss';
import './styles/sections/header.scss';
import './styles/sections/main.scss';
import './styles/sections/footer.scss';
import './styles/blocks/switcher.scss';
import './styles/blocks/person.scss';
import './styles/blocks/achievements.scss';
import './styles/blocks/contactButton.scss';
import './styles/blocks/contactButtons.scss';
import './styles/blocks/about.scss';
import './styles/blocks/portfolio.scss';
import './styles/blocks/copyRights.scss';
import './styles/blocks/scroll-to-top.scss';

const body = document.querySelector('body');
const contactButton = document.querySelectorAll('.contact-button');
const contactButtonActive = document.querySelector('#active-contact-button');
const switcher = document.querySelector('.switcher');
const switcherIMG = document.querySelector('.switcher__icon');
const about = document.querySelector('.about');
const aboutButton = document.querySelector('.about__button');
const portfolio = document.querySelector('.portfolio');
const socialIcons = document.querySelectorAll('.person__sm-icon');
const fullName = document.querySelector('h1');
const jobTitle = document.querySelector('.person__job-title');
const achievements = document.querySelectorAll('.achievements__bullet');
const aboutText = document.querySelectorAll('.about__text');
const copyRightsText = document.querySelector('.copy-rights');
const portfolioDescriptionBlock = document.querySelectorAll(
  '.portfolio__description',
);

//Dark theme background colors
const darkBackground = '#0C151D';
const darkContactButton = '#171F26';
const darkContactActiveButton = '#FFE071';
const aboutDarkColor = '#171F26';
const aboutButtonDarkColor = '#0C151D';
const switcherDarkColor = '#171F26';
const darkBasicFontColor = '#A3ABB2';
const darkPortfolioDescription = '#FFE071E0';

function setDarkTheme() {
  localStorage.setItem('lightTheme', 'false');
  body.style.backgroundColor = darkBackground;
  contactButton.forEach(item => {
    item.style.backgroundColor = darkContactButton;
    item.style.color = darkBasicFontColor;
  });
  contactButtonActive.style.backgroundColor = darkContactActiveButton;
  contactButtonActive.style.color = '#3D3D3D';
  about.style.backgroundColor = aboutDarkColor;
  aboutButton.style.backgroundColor = aboutButtonDarkColor;
  switcher.style.backgroundColor = switcherDarkColor;
  switcherIMG.setAttribute('src', './assets/img/icons/switcher-dark-theme.svg');
  socialIcons.forEach(icon => {
    icon.style.filter = 'brightness(2)';
  });

  fullName.style.color = '#A3ABB2';
  jobTitle.style.color = darkBasicFontColor;
  achievements.forEach(item => {
    item.style.color = darkBasicFontColor;
  });
  aboutText.forEach(item => {
    item.style.color = darkBasicFontColor;
  });

  portfolioDescriptionBlock.forEach(element => {
    element.style.backgroundColor = darkPortfolioDescription;
  });

  copyRightsText.style.color = darkBasicFontColor;
}

function setLightTheme() {
  localStorage.setItem('lightTheme', 'true');
  body.removeAttribute('style');
  contactButton.forEach(item => {
    item.removeAttribute('style');
  });
  contactButtonActive.removeAttribute('style');
  about.removeAttribute('style');
  aboutButton.removeAttribute('style');
  switcher.removeAttribute('style');
  switcherIMG.setAttribute(
    'src',
    './assets/img/icons/switcher-light-theme.svg',
  );
  socialIcons.forEach(icon => {
    icon.removeAttribute('style');
  });
  fullName.removeAttribute('style');
  jobTitle.removeAttribute('style');
  achievements.forEach(item => {
    item.removeAttribute('style');
  });
  aboutText.forEach(item => {
    item.removeAttribute('style');
  });

  portfolioDescriptionBlock.forEach(element => {
    element.removeAttribute('style');
  });
  copyRightsText.removeAttribute('style');
}

//Set Light or Dark theme depending on the value in localStorage
if (
  !localStorage.getItem('lightTheme') ||
  localStorage.getItem('lightTheme') === 'true'
) {
  setLightTheme();
} else {
  setDarkTheme();
}

switcher.addEventListener('click', () => {
  if (localStorage.getItem('lightTheme') === 'true') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});
