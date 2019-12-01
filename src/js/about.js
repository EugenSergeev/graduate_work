
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


/*
commit.commiter.name;
commit.commiter.email;
commit.commiter.date;
commit.message;
author.avatar_url.

https://api.github.com/repos/EugenSergeev/graduate_work/commits
*/

