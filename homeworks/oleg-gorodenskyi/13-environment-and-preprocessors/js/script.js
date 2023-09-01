import '../src/style.scss'

window.addEventListener("DOMContentLoaded", function() {

    const tabs = document.querySelectorAll('.tabs__item');
    const cards = document.querySelectorAll('.portfolio__card');
    const pageup = document.querySelector('.pageup');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function() {
        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove("active");
        }
        this.classList.add("active");
      });
    }

    function handleScroll() {
      cards.forEach(function(card) {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (cardTop < windowHeight) {
          card.classList.add('show');
        }
      });
    }

    function scrollToTop() {
      if (window.scrollY > 300 && window.innerWidth <= 599) {
        pageup.classList.add('show');
      } else {
        pageup.classList.remove('show');
      }
    }

    this.window.addEventListener('scroll', handleScroll)
    this.window.addEventListener('scroll', scrollToTop)

  });
  

