const scroll = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', hideScroll);

function hideScroll() {
  if (
    window.matchMedia('(max-width: 600px)').matches &&
    (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  ) {
    scroll.style.display = 'block';
  } else {
    scroll.style.display = 'none';
  }
}
