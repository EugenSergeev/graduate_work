import "./pages/about.css"
import "./blocks/swiper/swiper.css"
import "./vendor/swiper.js"

var mySwiper = new Swiper('.swiper-container', {
  speed: 100,
  effect: "slide",
  spaceBetween: 16,
  //slidesPerView: auto,
  centeredSlides: true,
  grabCursor: true
});
