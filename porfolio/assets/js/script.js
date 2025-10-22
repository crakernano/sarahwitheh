let swiperCard = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  speed: 1500,
  autoplay:{
    delay: 10,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: { slidesPerView: 2 },
    968: { slidesPerView: 5 },
  },
});