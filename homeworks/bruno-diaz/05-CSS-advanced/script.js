document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('switch-mode');
  var styleSheet = document.getElementById('light-style');

  link.addEventListener('click', function(event) {
    event.preventDefault();

    if (styleSheet.getAttribute('href') === 'styles.css') {
      styleSheet.setAttribute('href', 'dark.css');
    } else {
      styleSheet.setAttribute('href', 'styles.css');
    }
  });
});

const scrollButton = document.querySelector('.scroll-button');
scrollButton.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

  