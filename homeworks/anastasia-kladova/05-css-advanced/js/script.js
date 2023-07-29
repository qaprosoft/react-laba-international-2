// Change color theme
const body = document.body,
      headerHeading = body.querySelector('.person-card__heading'),

      colorThemeBtn = body.querySelector('.menu__btn'),
      btns = body.querySelectorAll('.btn'),
      btnActive = body.querySelector('.btn--active'),
      projectsBtnsBox = body.querySelector('.projects__btns'),

      twitterBtn = body.querySelector('.social__link--tw'),
      linkedinBtn = body.querySelector('.social__link--lin'),
      githubBtn = body.querySelector('.social__link--gh'),
      youtubeBtn = body.querySelector('.social__link--yt');


function changeColorTheme(e) {
    body.classList.toggle('dark-theme');
    e.target.classList.toggle('menu__btn--dark');
    headerHeading.classList.toggle('person-card__heading--dark');
    btnActive.classList.toggle('btn--active-dark');
    projectsBtnsBox.classList.toggle('projects__btns--dark');

    btns.forEach(elem => elem.classList.toggle('btn--dark'));

    twitterBtn.classList.toggle('social__link--tw-dark');
    linkedinBtn.classList.toggle('social__link--lin-dark');
    githubBtn.classList.toggle('social__link--gh-dark');
    youtubeBtn.classList.toggle('social__link--yt-dark');
}

colorThemeBtn.addEventListener('click', changeColorTheme);

// Scroll to top

const btnScrollTop = body.querySelector('.btnScrollTop');

function scrollToTop () {
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

btnScrollTop.addEventListener('click', scrollToTop);
