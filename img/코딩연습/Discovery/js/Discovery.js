$(document).ready(function () {

    /* 팝업 스와이퍼 */
    const swiper = new Swiper(".popup", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: ".popup-next",
            prevEl: ".popup-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        }
    });

    document.querySelector(".swiper-close a").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".popup").style.display = "none";
    });

    /* fullpage */
    new fullpage('#fullpage', {
        licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', '', ''],
        showActiveTooltip: true,
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#menu',
        scrollingSpeed: 1000,

    });

    /* 상품 스와이퍼 */
const swiper1 = new Swiper(".productSwiper", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev"
  },
    scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});

const swiper2 = new Swiper(".productSwiper2", {
  slidesPerView: 2.1,
  spaceBetween: 20,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
const tabs = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".link-web > div");
contents[0].classList.add("active");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    contents.forEach(c => c.classList.remove("active"));
    contents[index].classList.add("active");

    swiperA.update();
    swiperB.update();
    swiperC.update();

  });
});
const swiperA = new Swiper(".productSwiperA", {
  slidesPerView: 4,
  spaceBetween: 7,
  navigation:{
    nextEl:".A-next",
    prevEl:".A-prev"
  },
    scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});

const swiperB = new Swiper(".productSwiperB", {
  slidesPerView: 4,
  spaceBetween: 7,
  navigation:{
    nextEl:".B-next",
    prevEl:".B-prev"
  },
    scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});

const swiperC = new Swiper(".productSwiperC", {
  slidesPerView: 4,
  spaceBetween: 7,
  navigation:{
    nextEl:".C-next",
    prevEl:".C-prev"
  },
    scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
const toggleBtn = document.querySelector(".ButtonBase-root");
const secret = document.querySelector(".secret");

toggleBtn.addEventListener("click", () => {
  secret.classList.toggle("active");
});
const menus = document.querySelectorAll(".site > ul > li");

menus.forEach(menu => {
  menu.addEventListener("click", () => {
    const dropdown = menu.querySelector(".choice");


    document.querySelectorAll(".choice").forEach(c => {
      if (c !== dropdown) c.classList.remove("active");
    });


    dropdown.classList.toggle("active");
  });
});
    document.querySelector('.nanb').style.top = "0px";

});