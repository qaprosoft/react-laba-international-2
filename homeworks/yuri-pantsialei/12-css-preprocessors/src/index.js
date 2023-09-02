import './styles/styles.scss';

// Get the button
let mybutton = document.getElementById('goToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    (document.documentElement.scrollTop > 20 && window.innerWidth < 601)
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTo({top: 0, behavior: 'smooth'});
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

mybutton.addEventListener('click', topFunction);
