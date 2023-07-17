/* selectors */
const darkModeBtn = document.querySelector(".theme-btn");
const mediaIconsBright = document.querySelector(".profile-social-media-bright")
const mediaIconsDark = document.querySelector(".profile-social-media")

/* event listener to change visual mode */
darkModeBtn.addEventListener("click", ()  =>{
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkModeBtn.src = "./assets/images/images-phone-size/other-icons/dark-icon.svg";
        mediaIconsBright.style.display = "none";
        mediaIconsBright.style.display = "flex";
    }else{
        darkModeBtn.src = "./assets/images/images-phone-size/other-icons/bright-mode.svg";
        mediaIconsDark.style.display = "none";
        mediaIconsBright.style.display = "flex";
    }
    
})