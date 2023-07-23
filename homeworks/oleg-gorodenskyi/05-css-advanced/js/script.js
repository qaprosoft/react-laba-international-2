window.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tabs__item');
  const cards = document.querySelectorAll('.portfolio__card');

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

      console.log(cardTop, windowHeight)
      if (cardTop < windowHeight) {
        card.classList.add('show');
      }
    });
  }

  this.window.addEventListener('scroll', handleScroll)


});