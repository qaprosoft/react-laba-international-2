document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    let scrollArrowTop = document.getElementById('scrollArrowTop');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
=======
    var scrollArrowTop = document.getElementById('scrollArrowTop');

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
>>>>>>> 5d53e5b2da1e1e1f2f060f3eb632de61c67067cf

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