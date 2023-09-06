


window.addEventListener("load", ()=>{

    const darkModeButton = document.getElementById("dark-mode-button");
    const scrollToTopButton = document.getElementById("auto-scroll-button");
    
    const slider = document.getElementById("sliderButton");



    scrollToTopButton.addEventListener("click", ()=>{

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    });
    
    
   darkModeButton.addEventListener("click", ()=>{
        let body= document.getElementsByTagName("body");
        let dmBtn = document.querySelector(".dark-mode-button");
        let h1 = document.querySelector(".portfolio-presentation__full-name-h1");
        let h4 = document.querySelector(".portfolio-presentation__job-title-h4");
        let logos = document.querySelectorAll(".portfolio-presentation__logo")
        let cdBtn = document.querySelector(".cv-contact-btn-container__cv-btn");
        let contactBtn = document.querySelector(".cv-contact-btn-container__contact-btn");
        let sliderCont = document.querySelector(".slider__slider-container");
        let sliderBtn = document.querySelector(".slider__btn");
        let skillCont = document.querySelector(".skills-projects__skills-container");  
    
        let dmIcon = document.getElementById("darkModeIcon");
       
        let style = document.getElementById("styleSheetElement");
    if(dmIcon.classList.contains("fa-moon"))
    {
    
        dmIcon.classList.remove("fa-moon");
        dmIcon.classList.add("fa-sun");
        body[0].classList.add("--dark")
        dmBtn.classList.add("dark-mode-button--dark")
        h1.classList.add("portfolio-presentation__full-name-h1--dark")
        h4.classList.add("portfolio-presentation__job-title-h4--dark")
        logos.forEach(e=>e.classList.add("portfolio-presentation__logo--dark"))
        cdBtn.classList.add("cv-contact-btn-container__cv-btn--dark")
        contactBtn.classList.add("cv-contact-btn-container__contact-btn--dark")
        sliderCont.classList.add("slider__slider-container--dark")
        sliderBtn.classList.add("slider__btn--dark")
        skillCont.classList.add("skills-projects__skills-container--dark")
    }
    else{
        
        dmIcon.classList.remove("fa-sun");
        dmIcon.classList.add("fa-moon");
        body[0].classList.remove("--dark")
        dmBtn.classList.remove("dark-mode-button--dark")
        h1.classList.remove("portfolio-presentation__full-name-h1--dark")
        h4.classList.remove("portfolio-presentation__job-title-h4--dark")
        logos.forEach(e=>e.classList.remove("portfolio-presentation__logo--dark"))
        cdBtn.classList.remove("cv-contact-btn-container__cv-btn--dark")
        contactBtn.classList.remove("cv-contact-btn-container__contact-btn--dark")
        sliderCont.classList.remove("slider__slider-container--dark")
        sliderBtn.classList.remove("slider__btn--dark")
        skillCont.classList.remove("skills-projects__skills-container--dark")
        
    }
    });
    
    
    
    slider.addEventListener("click", (e)=>{

e.preventDefault();
        const skillsContainer = document.getElementById("skills");
        const projectsContainer = document.getElementById("projectsContainer");
        const portfolioButton = document.getElementById("sliderButtonPortfolio");
        const skillsButton = document.getElementById("sliderButtonSkills");


        skillsContainer.classList.toggle("skills-projects__skills-container--hidden")
        projectsContainer.classList.toggle("skills-projects__skills-container--hidden")
        skillsButton.classList.toggle("slider__btn--selected")
        portfolioButton.classList.toggle("slider__btn--selected")
        

    });


})





