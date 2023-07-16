const scrollBtn = document.querySelector(".scroll-to-top")

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollBtn.onclick = topFunction;

// On screens smaller than 600px, when the user scrolls down 50px from the top of the document, show the button
function scrollFunction() {
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 600) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

window.onscroll = scrollFunction;