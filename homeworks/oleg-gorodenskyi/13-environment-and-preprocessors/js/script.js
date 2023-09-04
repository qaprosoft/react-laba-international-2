import '../src/base/animation.scss'

import '../src/blocks/media.scss'

import '../src/blocks/profile.scss'
import '../src/blocks/tabs.scss'
import '../src/blocks/portfolio.scss'
import '../src/blocks/footer.scss'

import '../src/style.scss';

window.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs__item');
  const cards = document.querySelectorAll('.portfolio__card');
  const pageup = document.querySelector('.pageup');
  const btn = document.querySelector('.profile__buttons-btn-download');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  function handleScroll() {
    cards.forEach(function (card) {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight) {
        card.classList.add('show');
      }
    });
  }

  function scrollToTop() {
    console.log(window.innerWidth);
    if (window.scrollY > 300 && window.innerWidth <= 599) {
      console.log(window.scrollY);
      pageup.classList.add('show');
    } else {
      pageup.classList.remove('show');
    }
  }

  this.window.addEventListener('scroll', handleScroll);
  this.window.addEventListener('scroll', scrollToTop);
});
