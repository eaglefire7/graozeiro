let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000); // Troca a cada 5 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});
