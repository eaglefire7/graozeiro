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
document.querySelector('.produtos-container').addEventListener('mousemove', function(e) {
    const container = this;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const width = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    if (mouseX < width / 3) {
        container.scrollLeft -= 10;
    } else if (mouseX > (2 * width) / 3) {
        container.scrollLeft += 10;
    }
});

// Exemplo de JavaScript para controle manual do scroll
document.querySelector('.receitas-slider').addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        e.target.scrollBy({left: 300, behavior: 'smooth'});
    } else {
        e.target.scrollBy({left: -300, behavior: 'smooth'});
    }
});
