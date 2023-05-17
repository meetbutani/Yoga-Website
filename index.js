const slides = document.querySelector('.slides');
const sliderDots = document.querySelector('.slider-dots');

let slideIndex = 0;

// Create dots dynamically based on the number of slides
for (let i = 0; i < slides.childElementCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    dot.addEventListener('click', () => {
        slideIndex = i;
        updateSlidePosition();
        updateSliderDots();
    });
    sliderDots.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');
dots[0].classList.toggle('active');

// Set the active state of the dot
function updateSliderDots() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
