const welcomeMsg = document.querySelector('.hero-section h1');
const hamburger = document.querySelector('.mobile-menu');
const slideMenu = document.querySelector('.slide-menu');
const closeButton = document.querySelector('.slide-menu .close');
const ctaButton = document.querySelector('.cta .btn');
const contentBox = document.querySelector('.content-box.second');

welcomeMsg.addEventListener('click', (e) => {
    welcomeMsg.textContent = 'Have a Good Time!'
    e.stopPropagation;
})

hamburger.addEventListener('click', (e) => {
    slideMenu.classList.add('show');
    e.stopPropagation;
})

closeButton.addEventListener('click', (e) => {
    slideMenu.classList.remove('show');
    e.stopPropagation;
})


ctaButton.addEventListener('click', (e) => {
    contentBox.classList.remove('hide');
    e.stopPropagation;
})
