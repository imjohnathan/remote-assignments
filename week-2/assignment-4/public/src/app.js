const welcomeMsg = document.querySelector('.hero-section h1');
const hamburger = document.querySelector('.mobile-menu');
const slideMenu = document.querySelector('.slide-menu');
const closeButton = document.querySelector('.slide-menu .close');
const ctaButton = document.querySelector('.cta .btn');
const contentBox = document.querySelector('.content-box.second');


// Request1:ClicktoChangeText.
welcomeMsg.addEventListener('click', (e) => {
    welcomeMsg.textContent = 'Have a Good Time!'
    e.stopPropagation;
})

// Request2:ClicktoShow/CloseMenu.

hamburger.addEventListener('click', (e) => {
    slideMenu.classList.toggle('show');
    slideMenu.classList.remove('out');
    e.stopPropagation;
})

closeButton.addEventListener('click', (e) => {
    slideMenu.classList.remove('show');
    e.stopPropagation;
})

// Request3:ClicktoShowMoreContentBoxes.
ctaButton.addEventListener('click', (e) => {
    contentBox.classList.toggle('show');
    e.stopPropagation;
})
