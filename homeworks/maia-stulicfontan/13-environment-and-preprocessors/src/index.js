import './scss/styles.scss';
import profilePicture from './assets/img/profile.png';
import project1 from './assets/img/project1.jpg';
import project2 from './assets/img/project2.jpg';
import project3 from './assets/img/project3.jpg';
import project4 from './assets/img/project4.jpg';
import project5 from './assets/img/project5.jpg';
import project6 from './assets/img/project6.jpg';

document.getElementById('profile-picture').src = profilePicture;
document.getElementById('project1').src = project1;
document.getElementById('project2').src = project2;
document.getElementById('project3').src = project3;
document.getElementById('project4').src = project4;
document.getElementById('project5').src = project5;
document.getElementById('project6').src = project6;

const themeSwitchButton = document.getElementById('theme-switch');
themeSwitchButton.addEventListener('click', function () {
  document.querySelector('html').toggleAttribute('dark-theme');
});
