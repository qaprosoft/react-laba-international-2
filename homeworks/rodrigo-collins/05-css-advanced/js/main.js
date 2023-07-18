
/* Dark mode toggler */

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

/* Scroll to top */

window.addEventListener('scroll', function () {
    let scrollButton = document.querySelector('.scroll-to-top-button');

    if (window.scrollY > 200) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

/* profile avatar animation */

const profileImage = document.querySelector('.profile__avatar img[alt="profile image"]');
const profileAvatar = document.getElementById('profile-avatar');
let rotateY = 0;
let rotateX = 0;

profileAvatar.addEventListener('mousemove', function (e) {
    const boundingRect = profileAvatar.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;
    rotateY = (mouseX - boundingRect.width / 2) / boundingRect.width * 100;
    rotateX = (boundingRect.height / 2 - mouseY) / boundingRect.height * 100;
});

function animateAvatar() {
    profileImage.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    requestAnimationFrame(animateAvatar);
}

profileAvatar.addEventListener('mouseleave', function () {
    rotateY = 0;
    rotateX = 0;
});

animateAvatar();