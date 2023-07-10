'use strict';
  
const toTop = document.querySelector(".scroll_btn");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset>100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

const portfolioImg = document.querySelector(".portfolio__img");

portfolioImg.addEventListener("mouseover", function() {
  portfolioImg.style.animation = "rotateAnimation 1s forwards";
});

portfolioImg.addEventListener("mouseout", function() {
  portfolioImg.style.animation = "none";
});