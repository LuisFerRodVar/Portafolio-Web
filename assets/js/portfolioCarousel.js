let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slidep').length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  const carouselSlides = document.querySelectorAll('.carousel-slidep');
  carouselSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}
