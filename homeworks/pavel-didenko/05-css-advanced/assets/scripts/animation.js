let start = null;
const copyRights = document.querySelector('.scroll-to-top');

function animateScrollToTopButton(timestamp) {
  if (!start) {
    start = timestamp;
  }

  const progress = timestamp - start;
  // copyRights.style.transform = `translateX(${Math.min(progress / 10, 100)}px)`;
  copyRights.style.transform = `translateY(${Math.max(progress / -10, -42)}px)`;
  

  if (progress < 2000) {
    window.requestAnimationFrame(animateScrollToTopButton);
  }
}


window.requestAnimationFrame(animateScrollToTopButton);
