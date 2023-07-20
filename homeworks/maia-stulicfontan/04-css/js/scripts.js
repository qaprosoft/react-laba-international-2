const themeSwitchButton = document.getElementById("theme-switch");

themeSwitchButton.addEventListener("click", function () {
  document.querySelector("html").toggleAttribute("dark-theme");
})