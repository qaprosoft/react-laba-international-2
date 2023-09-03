const body = document.querySelector('body');

const div = document.createElement('div');
div.classList.add('blured-circle');
body.appendChild(div);

const bluredCircle = document.querySelector('.blured-circle');
const circleWidth = bluredCircle.scrollWidth;
const circleHeight = bluredCircle.scrollHeight;

let x = 0,
  y = 0;
let xDirection = 'right',
  yDirection = 'down';
const animateBackground = () => {
  const {clientWidth, scrollHeight} = document.documentElement;
  body.style.width = `${clientWidth}px`;
  body.style.overflowX = `hidden`;
  if (x >= clientWidth - circleWidth) xDirection = 'right';
  else if (x <= 0) xDirection = 'left';

  if (y >= scrollHeight - circleHeight) yDirection = 'up';
  else if (y <= 0) yDirection = 'down';

  if (xDirection === 'left') x++;
  else x--;

  if (yDirection === 'down') y++;
  else y--;

  bluredCircle.style.transform = `translateX(${x}px) translateY(${y}px)`;
  window.requestAnimationFrame(animateBackground);
};

animateBackground();
