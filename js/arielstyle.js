$(document).ready(function () {

    const slides = document.querySelectorAll(".smart-slider li");
    let current = 0;

    slides[current].classList.add("active");

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 3000);
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        speed: 800,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
const toggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active"); // 햄버거 → X
  sidebar.classList.toggle("on");    // 사이드바 열기
});
const btnTop = document.querySelector(".CD_scroll.-top");
const btnBottom = document.querySelector(".CD_scroll.-end");

/* 위로 이동 */

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* 아래로 이동 */

btnBottom.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

});