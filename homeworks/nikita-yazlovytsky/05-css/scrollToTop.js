const upButton = document.querySelector('.scroll__up');


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

upButton.onclick = topFunction;


function scrollFunction() {
  if ((document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) && window.innerWidth < 700) {
    upButton.style.opacity = "1";
  } else {
    upButton.style.opacity = "0";
  }
}

window.onscroll = scrollFunction;

