const scroll = document.querySelector('#scroll-to-top');

window.onscroll = function () {
  if (
    window.matchMedia('(max-width: 600px)').matches &&
    (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  ) {
    scroll.style.display = 'block';
  } else {
    scroll.style.display = 'none';
  }
};
