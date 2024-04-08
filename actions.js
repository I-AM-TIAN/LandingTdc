const welcomeSection = document.querySelector('.welcome');
const aboutUsSection = document.querySelector('.about-us');

window.addEventListener('scroll', () => {
    if (window.scrollY >= welcomeSection.offsetHeight - window.innerHeight) {
        aboutUsSection.classList.add('show-about-us');
    }
});