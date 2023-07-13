const darkModeButton = document.getElementById("darkModeButton");
const scrollToTopButton = document.getElementById("autoScrollButton");
const portfolioButton = document.getElementById("sliderButtonPortfolio");
const skillsButton = document.getElementById("sliderButtonSkills");
const skillsContainer = document.getElementById("skills");
const projectsContainer = document.getElementById("projectsContainer");
const body = document.body;

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
    body.classList.toggle("darkMode")
});

portfolioButton.addEventListener("click", (e)=>{



   projDisplay = projectsContainer.style.width;
   skillDisplay = skillsContainer.style.display;
    window.alert("hola " + projDisplay)
   console.log(projectsContainer.style.display)

    e.preventDefault();
   if(projDisplay === "none" && skillDisplay === "none") { 
            projDisplay = "flex"; + 111
            portfolioButton.setAttribute("disabled");
   } 
   else if ( projDisplay === "none" && ! skillDisplay === "none")
    {  skillDisplay = "none";
       projDisplay = "flex";
       portfolioButton.setAttribute("disabled");    
    }
})

