// script.js
const initSlides = () => {
    const sliders = document.querySelectorAll('.splide');
    if (sliders.length > 0) {
        sliders.forEach(slider => {
            new Splide(slider, {
                type: 'loop',
                perPage: 4,
                gap: 20,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                breakpoints: {
                    640: { perPage: 1 },
                    768: { perPage: 1 },
                    1024: { perPage: 2 },
                    412: { perPage: 1 },
                    428: { perPage: 1 },
                    414: { perPage: 1 }
                }
            }).mount();
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initSlides();
    
    const navbar = document.querySelector('.navbar');
    const scrollElements = document.querySelectorAll('.scroll-color-change');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            scrollElements.forEach(el => {
                el.classList.add('scrolled-text');
                el.classList.remove('text-white');
            });
        } else {
            navbar.classList.remove('scrolled');
            scrollElements.forEach(el => {
                el.classList.remove('scrolled-text');
                el.classList.add('text-white');
            });
        }
    });
});

// Initialisation AOS
AOS.init({
    duration: 1000,
    once: true
});














