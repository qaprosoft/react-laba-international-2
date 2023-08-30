const scrollButton = document.getElementById('scroll-top');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    scrollButton.classList.add('scroll-top--visible');
  } else {
    scrollButton.classList.remove('scroll-top--visible');
  }
});
