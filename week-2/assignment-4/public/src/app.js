const welcomeMsg = document.querySelector('.hero-section h1');
const hamburger = document.querySelector('.mobile-menu');
const slideMenu = document.querySelector('.slide-menu');
const closeButton = document.querySelector('.slide-menu .close');
const ctaButton = document.querySelector('.cta .btn');
const contentBox = document.querySelector('.content-box.second');
const orginalMsg = welcomeMsg.textContent


// Request1:ClicktoChangeText.
welcomeMsg.addEventListener('click', (e) => {
    const msg = 'Have a Good Time!';
    welcomeMsg.textContent = welcomeMsg.textContent === msg ? orginalMsg : msg
    e.stopPropagation;
})

// Request2:ClicktoShow/CloseMenu.

function toggleMenu() {
    slideMenu.classList.toggle('show');
}

hamburger.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation;
})

closeButton.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation;
})

//additional click background to close menu
slideMenu.addEventListener('click', (e) => {
    if (e.target.closest('.slide-menu_wrapper')) return; //prevent click inside the menu to close
    toggleMenu();
    e.stopPropagation;
})

// Request3:ClicktoShowMoreContentBoxes.
ctaButton.addEventListener('click', (e) => {
    contentBox.classList.toggle('show');
    e.stopPropagation;
})
