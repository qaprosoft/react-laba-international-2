const scrollToTopBtn = document.getElementById('scrollToTopBtn');

const checkScreenWidth = () => {
  scrollToTopBtn.disabled = window.innerWidth >= 767;
};

window.addEventListener('resize', checkScreenWidth);
checkScreenWidth();

scrollToTopBtn.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', function () {
    this.classList.add('highlight');
    setTimeout(() => {
      this.classList.remove('highlight');
    }, 500);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cvButtons = document.querySelectorAll('.cv-buttons__button');
  const navButtons = document.querySelectorAll('.nav__button');

  function toggleSelected(buttons, selectedButton) {
    buttons.forEach(button => {
      button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
  }

  cvButtons.forEach(button => {
    button.addEventListener('click', () => {
      toggleSelected(cvButtons, button);
    });
  });

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      toggleSelected(navButtons, button);
    });
  });
});
