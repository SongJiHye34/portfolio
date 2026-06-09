$(document).ready(function () {

  const popupSwiper = new Swiper(".popupSwiper", {

    loop: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }

  });

  /* ================= 팝업 ================= */

  const items = document.querySelectorAll('.item');
  const popup = document.querySelector('.popup');
  const popupCloseBtn = document.querySelector('.close');

  items.forEach((item) => {

    item.addEventListener('click', () => {

      const idx = Number(item.dataset.index);

      popup.classList.add('active');

      popupSwiper.slideTo(idx - 1);

    });

  });

  popupCloseBtn.addEventListener('click', () => {

    popup.classList.remove('active');

  });

  popup.addEventListener('click', (e) => {

    if (e.target === popup) {
      popup.classList.remove('active');
    }

  });

  /* ================= 사이드 메뉴 ================= */

  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.getElementById('overlay');
  const closeMenuBtn = document.getElementById('closeBtn');

  menuBtn.addEventListener('click', () => {

    sideMenu.classList.add('active');
    overlay.classList.add('active');

  });

  closeMenuBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {

    sideMenu.classList.remove('active');
    overlay.classList.remove('active');

  }

  /* ================= 스크롤 ================= */

  const chunks = document.querySelectorAll('.chunk');

  window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    chunks.forEach(chunk => {

      const chunkTop = chunk.offsetTop;

      if (scrollTop + windowHeight > chunkTop + 100) {
        chunk.classList.add('active');
      }

    });

  });

  /* ================= 메뉴 이동 ================= */

  const menuLinks = document.querySelectorAll('.menu-bar a');

  menuLinks.forEach(link => {

    link.addEventListener('click', e => {

      e.preventDefault();

      const target = document.querySelector(
        link.getAttribute('href')
      );

      if (!target) return;

      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

    });

  });

});