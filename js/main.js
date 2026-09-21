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

nextButton.addEventListener('click', () => {
    const nextSlide = (currentSlide + 1) % slides.length;

    showSlide(nextSlide);
});

previousButton.addEventListener('click', () => {
    const previousSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(previousSlide);
});