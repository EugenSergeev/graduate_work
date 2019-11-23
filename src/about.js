import "./pages/about.css"
import "./blocks/swiper/swiper.css"
import "./vendor/swiper.js"
/*
var mySwiper = new Swiper('.swiper-container', {
  speed: 100,
  effect: "slide",
  spaceBetween: 16,
  //slidesPerView: auto,
  centeredSlides: true,
  grabCursor: true,
  resistance: false,
  watchSlidesVisibility: true,
  loop: true,
  avigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
*/
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
