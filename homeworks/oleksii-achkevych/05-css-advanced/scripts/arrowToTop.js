document.addEventListener('DOMContentLoaded', function () {
    let scrollArrowTop = document.getElementById('scrollArrowTop');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (window.innerWidth < 600 && scrollTop > 0) {
            scrollArrowTop.style.display = 'block';
        } else {
            scrollArrowTop.style.display = 'none';
        }
    });

    scrollArrowTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});