const scrollToTopBtn = document.getElementById('scrollToTopBtn')

const checkScreenWidth = () => {
    scrollToTopBtn.disabled = window.innerWidth >= 767
}

window.addEventListener('resize', checkScreenWidth);
checkScreenWidth()

scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
});

const galleryImages = document.querySelectorAll('.gallery img')

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.add('highlight')
        setTimeout(() => {
            this.classList.remove('highlight')
        }, 500)
    })
})
