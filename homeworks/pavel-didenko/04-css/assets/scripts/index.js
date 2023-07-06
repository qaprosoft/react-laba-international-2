const body = document.querySelector('body');
const contactButton = document.querySelectorAll('.contact-button');
const contactButtonActive = document.querySelector('#active-contact-button');
const switcher = document.querySelector('.switcher');
const switcherIMG = document.querySelector('.switcher__icon');
const about = document.querySelector('.about');
const aboutButton = document.querySelector('.about__button')
const portfolio = document.querySelector('.portfolio');

//Dark theme colors
const darkBackground = "#0C151D";
const darkContactButton = "#171F26";
const darkContactActiveButton = "#FFE071";
const aboutDarkColor = "#171F26";
const aboutButtonDarkColor = "#0C151D"
const switcherDarkColor = "#171F26"

//Light theme colors
const lightBackground = "#E9EBEC";
const lightContactButton = "#FFFFFF"
const lightContactActiveButton = "#FBD144";
const aboutLightColor = "#FFF";
const aboutButtonLightColor = "#D7D7D7";
const switcherLightColor = "#FFFFFF";

function setDarkTheme(){
  localStorage.setItem('lightTheme', 'false')
  body.style.backgroundColor = darkBackground;
  contactButton.forEach((item) => {
    item.style.backgroundColor = darkContactButton;
  });
  contactButtonActive.style.backgroundColor = darkContactActiveButton;
  about.style.backgroundColor = aboutDarkColor;
  aboutButton.style.backgroundColor = aboutButtonDarkColor;
  switcher.style.backgroundColor = switcherDarkColor;
  switcherIMG.setAttribute('src', './assets/img/icons/switcher-dark-theme.svg');
}

function setLightTheme(){
  localStorage.setItem('lightTheme', 'true');
  body.style.backgroundColor = lightBackground;
  contactButton.forEach((item) => {
    item.style.backgroundColor = lightContactButton;
  });
  contactButtonActive.style.backgroundColor = lightContactActiveButton;
  about.style.backgroundColor = aboutLightColor;
  aboutButton.style.backgroundColor = aboutButtonLightColor;
  switcher.style.backgroundColor = switcherLightColor;
  switcherIMG.setAttribute('src', './assets/img/icons/switcher-light-theme.svg');
}

//Set Light or Dark theme depending on the value in localStorage
if(!localStorage.getItem('lightTheme') || localStorage.getItem('lightTheme') === 'true'){
  setLightTheme();
}else{
  setDarkTheme();
}

switcher.addEventListener('click', () => {
  if(localStorage.getItem('lightTheme') === 'true'){
    setDarkTheme()
  }else{
    setLightTheme()
  }
})