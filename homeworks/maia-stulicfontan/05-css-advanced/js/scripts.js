const themeSwitchButton = document.getElementById("theme-switch");
const themeSwitchIcon = document.getElementById("header__icon");
const scrollUpButton = document.querySelector(".scroll-up");
let scrollUpRotation = 0;

/* Dark theme switch */
themeSwitchButton.addEventListener("click", function () {
  document.querySelector("html").toggleAttribute("dark-theme");
  themeSwitchIcon.classList.toggle("fa-moon");
  themeSwitchIcon.classList.toggle("fa-sun");
})

/* Scroll up */
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  });
}

/* Scroll up button animation */
function rotate() {
  scrollUpRotation += 360;
  scrollUpButton.style.transform = "rotate(" + scrollUpRotation + "deg)";
}

scrollUpButton.addEventListener('click', () => { 
  scrollUp();
  rotate();
})
