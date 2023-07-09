const darkTheme = {
    "--text-color": "#A3ABB2",
    "--title-color": "#F1F2F4",
    "--main-bg-color": "#0C151D", 
    "--profile-avatar-bg": "white",
    "--download-btn-color": "#3D3D3D",
    "--portfolio-example-link": "white",
    "--contact-btn-bg-color": "#171F26",
    "--download-btn-bg-color": "#FFE071",
    "--portfolio-example-text": "#3D3D3D",
    "--portfolio-example-title": "#3D3D3D",
    "--portfolio-btns-bg-color": "#171F26",
    "--toggle-switcher-bg-color": "#171F26",
    "--profile-avatar-border-color": "#FFE071",
    "--portfolio-btn-active-bg-color": "#0C151D",
};
const lightTheme = {
    "--text-color": "#575757",
    "--title-color": "#3D3D3D",
    "--main-bg-color": "#E9EBEC", 
    "--profile-avatar-bg": "white",
    "--download-btn-color": "#3D3D3D",
    "--portfolio-example-link": "white",
    "--contact-btn-bg-color": "white",
    "--download-btn-bg-color": "#FBD144",
    "--portfolio-example-text": "#19191B",
    "--portfolio-example-title": "#19191B",
    "--portfolio-btns-bg-color": "white",
    "--toggle-switcher-bg-color": "white",
    "--profile-avatar-border-color": "#F7D039",
    "--portfolio-btn-active-bg-color": "#D7D7D7",
}
let currentTheme = "dark";
const skillsButton = document.querySelector("#skills");
const goUpButton = document.querySelector("#go_up_button");
const portfolioButton = document.querySelector("#portfolio");
const downloadCVButton = document.querySelector("#downloadCV");
const themeToggleButton = document.querySelector("#theme_toogle");
const themeToogleIcon = document.querySelector(".theme_toogle_icon");

changeAppTheme(darkTheme, "dark");

goUpButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', detectScrollEnd);
downloadCVButton.addEventListener("click", openCV);
themeToggleButton.addEventListener("click", () => {
    themeToggleButton.classList.toggle('header_theme_toogle_rotate');
    switch(currentTheme) {
        case "dark":
            changeAppTheme(lightTheme, "light");
            themeToogleIcon.src="./assets/icons/theme-switcher/light.svg";
            break;
        case "light":
            changeAppTheme(darkTheme, "dark");
            themeToogleIcon.src="./assets/icons/theme-switcher/dark.svg";
            break;
        default:
            changeAppTheme(darkTheme, "dark");
            themeToogleIcon.src="./assets/icons/theme-switcher/dark.svg";
    }
    setTimeout(() => {
        themeToggleButton.classList.toggle('header_theme_toogle_rotate');
    }, 1000);
});
skillsButton.addEventListener("click", portfolioSkillsSwitcher);
portfolioButton.addEventListener("click", portfolioSkillsSwitcher);




function openCV() {
    window.open("./assets/FullStack_Frontend_ReactNative_developer.pdf");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function detectScrollEnd() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isOpenedOnMobile = window.matchMedia("only screen and (max-width: 426px)").matches;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollThreshold = (4 / 5) * documentHeight;

    if ((scrollTop + windowHeight >= scrollThreshold) && isOpenedOnMobile) {
        goUpButton.classList.remove("hide_el");
    } else {
        goUpButton.classList.add("hide_el");
    }
}
function portfolioSkillsSwitcher() {
    skillsButton.classList.toggle("portfolio_buttons_active");
    skillsButton.classList.toggle("portfolio_buttons_inactive");
    portfolioButton.classList.toggle("portfolio_buttons_active");
    portfolioButton.classList.toggle("portfolio_buttons_inactive");
}
function changeAppTheme(themeObj, themeLabel) {
    Object.entries(themeObj).map((el) => {
        document.body.style.setProperty(el[0], el[1]);
    });
    currentTheme = themeLabel;
}