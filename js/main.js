const swiper = new Swiper('.swiper', {
  spaceBetween: 40,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 'auto',
      centeredSlides: true,
    },
  },
});
