const scrollButton = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', showScroll);
scrollButton.addEventListener('click', scrollToTop);

function showScroll() {
  const matchesMediaQuery = window.matchMedia('(max-width: 600px)');

  if (
    matchesMediaQuery.matches &&
    (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
  ) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

function scrollToTop() {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
