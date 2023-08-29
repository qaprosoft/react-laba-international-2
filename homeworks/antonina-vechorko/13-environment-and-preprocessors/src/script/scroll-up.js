const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

document.addEventListener('DOMContentLoaded', () => {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 767 && scrollPosition > 500) {
            // Show the button
            scrollToTopBtn.style.display = 'block';
        } else {
            // Hide the button
            scrollToTopBtn.style.display = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    if (window.innerWidth > 767) {
        scrollToTopBtn.style.display = 'none';
    } else {
        handleScroll();
    }
});
