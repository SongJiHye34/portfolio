$(document).ready(function () {
/* ========================
   E 섹션
   =====================*/
$(".family-btn").click(function(){
    $(".family-list").slideToggle(300);
});
   const lookSwiper = new Swiper(".lookSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
   speed: 20000,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    allowTouchMove: false,
});


/* =========================
   D 섹션 Collection
========================= */

const collectionSwiper = new Swiper(".collectionSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,

    navigation: {
        nextEl: ".collection-next",
        prevEl: ".collection-prev"
    }
});

const collectionContents =
document.querySelectorAll(".d-item .collection-content");

/* 화살표 이동 */
collectionSwiper.on("slideChange", () => {

    collectionContents.forEach(item => {
        item.classList.remove("active");
    });

    collectionContents[collectionSwiper.activeIndex]
    ?.classList.add("active");

});

/* 배너 클릭 */
const thumbs = document.querySelectorAll(".collection-thumb");

thumbs.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        collectionSwiper.slideTo(index);

        collectionContents.forEach(item=>{
            item.classList.remove("active");
        });

        collectionContents[index]
        ?.classList.add("active");

    });

});
    /* =========================
       B 섹션 이미지 변경
    ========================= */

    const words = document.querySelectorAll(".edit-text span");
    const mainImg = document.querySelector("#mainImg");

    if (mainImg) {

        words.forEach(word => {

            word.addEventListener("mouseenter", function () {

                mainImg.src = this.dataset.img;

            });

        });

    }

    /* =========================
       A 섹션 탭 메뉴
    ========================= */

    const tabs = document.querySelectorAll(".tab-menu button");
    const contents =
        document.querySelectorAll(".a-item .trend-content");

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn =>
                btn.classList.remove("active")
            );

            contents.forEach(item =>
                item.classList.remove("active")
            );

            tab.classList.add("active");
            contents[index].classList.add("active");

            if (swipers[index]) {

                setTimeout(() => {

                    swipers[index].update();

                }, 0);

            }

        });

    });

    /* =========================
       A 섹션 상품 Swiper 1~8
    ========================= */

    const swipers = [];

    for (let i = 1; i <= 8; i++) {

        const target =
            document.querySelector(`.trendSwiper${i}`);

        if (!target) continue;

        swipers.push(

            new Swiper(`.trendSwiper${i}`, {

                slidesPerView: 5,
                spaceBetween: 20,

                navigation: {
                    nextEl: `.swiper${i}-next`,
                    prevEl: `.swiper${i}-prev`
                }

            })

        );

    }

    /* =========================
       D 섹션 상품 Swiper 1~3
    ========================= */

    for (let i = 1; i <= 3; i++) {

        const target =
            document.querySelector(`.collectionProduct${i}`);

        if (!target) continue;

        new Swiper(`.collectionProduct${i}`, {

            slidesPerView: 4,
            spaceBetween: 20,

            navigation: {
                nextEl: `.collection${i}-next`,
                prevEl: `.collection${i}-prev`
            }

        });

    }

    /* =========================
       메인 비주얼
    ========================= */

    new Swiper(".mySwiper", {

        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }

    });

    /* =========================
       Header Scroll
    ========================= */

    window.addEventListener("scroll", function () {

        const header =
            document.querySelector(".header");

        if (!header) return;

        if (window.scrollY > 700) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* =========================
       Popup
    ========================= */

    $(".close-btn").click(function () {

        $(".popup").hide();

    });

});