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
                    640: {
                        perPage: 1, // Diapositives pour les écrans de 640px et moins
                    },
                    768: {
                        perPage: 1, // Diapositives pour les écrans de 768px et moins
                    },
                    1024: {
                        perPage: 2, // Diapositives pour les écrans de 1024px et moins
                    },
                    412: {
                        perPage: 1,
                    },
                    428: {
                        perpage: 1,
                    },
                    414: {
                        perpage: 1,
                    }
                }
            }).mount();
        });
    }
};
initSlides();



// Sélectionnez votre navbar
const navbar = document.querySelector('.navbar'); // Remplacez '.navbar' par le sélecteur de votre navbar write
const write = document.querySelector('.write'); // Remplacez '.navbar' par le sélecteur de votre navbar write
const contact = document.querySelector('.contact'); // Remplacez '.navbar' par le sélecteur de votre navbar write

// Écoutez l'événement de scroll
window.addEventListener('scroll', function () {
    // Si le scroll est supérieur à 50px (par exemple), changez la couleur
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        write.classList.add('text-black')
        contact.classList.add('text-black')
    } else {
        // Sinon, remettez la couleur d'origine
        navbar.classList.remove('scrolled');
        write.classList.remove('text-black')
        contact.classList.remove('text-black')
    }
});