window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 100) {
        console.log(window.pageYOffset)
      scrollTop.style.display = 'flex';
    } else {
      scrollTop.style.display = 'none';
    }
  });
  
  document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });