import "./light.scss";
import "./dark.scss"
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('switch-theme');
    var styleSheet = document.getElementById('light-style');
  
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      if (styleSheet.getAttribute('href') === './styles/light.css') {
        styleSheet.setAttribute('href', './styles/dark.css');
      } else {
        styleSheet.setAttribute('href', './styles/light.css');
      }
    });
  });