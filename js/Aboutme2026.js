$(document).ready(function () {
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  }




  const bottomTextBox = document.querySelector('.bottom-text-box');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;


    if (scrollTop + windowHeight >= documentHeight - 40) {
      bottomTextBox.classList.add('show');
    } else {
      bottomTextBox.classList.remove('show');
    }
  });
  const target = document.querySelector(".text ul:last-child p");
  const icon = target.querySelector(".material-symbols-outlined");

  let count = 0;

  const interval = setInterval(() => {
    if (count >= 3) {
      clearInterval(interval);
      return;
    }


    target.style.transition = "transform 0.4s";
    target.style.transform = "translateY(10px)";

    icon.style.transition = "transform 0.4s";
    icon.style.transform = "translateY(10px)";


    setTimeout(() => {
      target.style.transform = "translateY(0)";
      icon.style.transform = "translateY(0)";
    }, 400);

    count++;
  }, 1000);
  const swiperEl = document.querySelector('.mySwiper');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          new Swiper('.mySwiper', {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: 'row',
            },
            spaceBetween: 30,

            autoplay: {
              delay: 6500,
              disableOnInteraction: false,
            },

            speed: 1000,

            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

          swiperEl.classList.add('show');
          observer.unobserve(swiperEl);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(swiperEl);
});