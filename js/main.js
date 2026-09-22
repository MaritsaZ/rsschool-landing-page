const slides = document.querySelectorAll('.coffee-slide');
const controls = document.querySelectorAll('.slider-control');

const previousButton = document.querySelector('.slider-button-left');
const nextButton = document.querySelector('.slider-button-right');

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('coffee-slide-active');
    controls[currentSlide].classList.remove('slider-control-active');

    currentSlide = index;

    slides[currentSlide].classList.add('coffee-slide-active');
    controls[currentSlide].classList.add('slider-control-active');
}

if (
    slides.length > 0 &&
    controls.length > 0 &&
    previousButton &&
    nextButton
) {
    nextButton.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    });

    previousButton.addEventListener('click', () => {
        const previousSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        showSlide(previousSlide);
    });
}


// THEME

const themeSwitch = document.querySelector('.theme-switch');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        const isDarkTheme =
            document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}


// BURGER MENU

const burgerButton = document.querySelector('.burger-button');
const navigationLinks = document.querySelectorAll('.nav-link');
const menuLink = document.querySelector('.menu-link');

function closeBurgerMenu() {
    document.body.classList.remove('menu-open');

    if (burgerButton) {
        burgerButton.setAttribute('aria-expanded', 'false');
        burgerButton.setAttribute('aria-label', 'Open menu');
    }
}

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('menu-open');

        burgerButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        burgerButton.setAttribute(
            'aria-label',
            isOpen ? 'Close menu' : 'Open menu'
        );
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener('click', closeBurgerMenu);
});

if (menuLink) {
    menuLink.addEventListener('click', closeBurgerMenu);
}