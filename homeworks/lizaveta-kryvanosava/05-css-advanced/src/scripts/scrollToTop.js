const scrollButton = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', showScroll);
scrollButton.addEventListener('click', scrollToTop);

function showScroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
