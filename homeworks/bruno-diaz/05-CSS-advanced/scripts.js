document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('switch-theme');
    var styleSheet = document.getElementById('light-style');
  
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (styleSheet.getAttribute('href') === 'light.css') {
        styleSheet.setAttribute('href', 'dark.css');
      } else {
        styleSheet.setAttribute('href', 'light.css');
      }
    });
  });

  const scrollButton = document.getElementById('scrollButton')
  document.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });