


window.addEventListener("load", ()=>{

    const darkModeButton = document.getElementById("darkModeButton");
    const scrollToTopButton = document.getElementById("autoScrollButton");
    
    const slider = document.getElementById("sliderButton");



    scrollToTopButton.addEventListener("click", ()=>{

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    });
    
    
   darkModeButton.addEventListener("click", ()=>{
        
    
        let dmIcon = document.getElementById("darkModeIcon");
       
        let style = document.getElementById("styleSheetElement");
    if(style.getAttribute("href")==="./styles/index.css")
    {
        style.setAttribute("href", "./styles/darkmode.css");
        dmIcon.classList.remove("fa-moon");
        dmIcon.classList.add("fa-sun");
    }
    else{
        style.setAttribute("href", "./styles/index.css");
        dmIcon.classList.remove("fa-sun");
        dmIcon.classList.add("fa-moon");
        
    }
    });
    
    
    
    slider.addEventListener("click", (e)=>{

e.preventDefault();
        const skillsContainer = document.getElementById("skills");
        const projectsContainer = document.getElementById("projectsContainer");
        const portfolioButton = document.getElementById("sliderButtonPortfolio");
        const skillsButton = document.getElementById("sliderButtonSkills");


        skillsContainer.classList.toggle("hidden")
        projectsContainer.classList.toggle("hidden")
        skillsButton.classList.toggle("selected")
        portfolioButton.classList.toggle("selected")
        
    

    });


})





