const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

darkModeToggle.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'white' ? '#27303D' : 'white';
    document.body.style.color = 
        document.body.style.color === 'black' ? 'white' : 'black';
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".instructor-carousel");
    const slides = document.querySelectorAll(".instructor");
    const prevButton = document.querySelector(".carousel-nav.prev");
    const nextButton = document.querySelector(".carousel-nav.next");

    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slides[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Adjust carousel on window resize
    window.addEventListener("resize", updateCarousel);
});
