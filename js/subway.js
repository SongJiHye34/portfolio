$(document).ready(function () {
  const slides = document.querySelectorAll('.new-slide img');
  const bullets = document.querySelectorAll('.pagination span');

  let current = 0;

  setInterval(() => {

    slides[current].classList.remove('active');
    bullets[current].classList.remove('active');

    current++;

    if (current >= slides.length) {
      current = 0;
    }

    slides[current].classList.add('active');
    bullets[current].classList.add('active');

  }, 6000);
  // swiper
  const swiper = new Swiper(".slide-section", {
    loop: true,

    slidesPerView: 1,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // submenu
  $(".nav").mouseenter(function () {
    $(".submenu").addClass("on");
  });

  $(".header").mouseleave(function () {
    $(".submenu").removeClass("on");
  });

  // menu tab
  $(".menu-list li").eq(0).addClass("on");
  $(".menu-content-wrap").eq(0).addClass("on");

  $(".menu-list li").click(function () {

    let i = $(this).index();

    $(".menu-list li").removeClass("on");
    $(this).addClass("on");

    $(".menu-content-wrap").removeClass("on");
    $(".menu-content-wrap").eq(i).addClass("on");

  });

  // aos
  AOS.init();

});