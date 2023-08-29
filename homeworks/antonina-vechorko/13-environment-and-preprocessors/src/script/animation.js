const socialMediaIcons = document.querySelectorAll('.person__social-media-icon');

socialMediaIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg)';
        this.style.transition = 'transform 0.5s ease';
    });
});
