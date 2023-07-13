const darkModeButton = document.getElementById("darkModeButton");
const scrollToTopButton = document.getElementById("autoScrollButton");
const portfolioButton = document.getElementById("sliderButtonPortfolio");
const skillsButton = document.getElementById("sliderButtonSkills");
const skillsContainer = document.getElementById("skills");
const projectsContainer = document.getElementById("projectsContainer");
const body = document.body;


window.addEventListener("load", ()=>{


    scrollToTopButton.addEventListener("click", (e)=>{

        e.preventDefault();
        console.log(portfolioButton)
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    });
    
    
   darkModeButton.addEventListener("click", (e)=>{
        e.preventDefault();
    
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
    
    portfolioButton.addEventListener("click", (e)=>{
    
        
        
      
    
    })
    



})





