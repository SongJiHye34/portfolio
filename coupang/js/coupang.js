$("document").ready(function () {
   const topBtn = document.getElementById("topBtn");

   window.addEventListener("scroll", () => {

      if (window.scrollY > 300) {
         topBtn.style.display = "block";
      } else {
         topBtn.style.display = "none";
      }

   });

   topBtn.addEventListener("click", () => {

      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });

   });
   const sections = document.querySelectorAll(".keyword");
   const menuLinks = document.querySelectorAll(".category-menu a");

   window.addEventListener("scroll", () => {

      let current = "";

      sections.forEach(section => {
         const sectionTop = section.offsetTop - 200;

         if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
         }
      });

      menuLinks.forEach(link => {
         link.classList.remove("active");

         if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
         }
      });
   });


   const travelSwiper1 = new Swiper(".travelSwiper1", {
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      pagination: {
         el: ".travel1-page",
         clickable: true
      }
   });

   const travelSwiper2 = new Swiper(".travelSwiper2", {
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      pagination: {
         el: ".travel2-page",
         clickable: true
      }
   });

   const travelSwiper3 = new Swiper(".travelSwiper3", {
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      pagination: {
         el: ".travel3-page",
         clickable: true
      }
   });
   const travelItemSwiper = new Swiper(".travelItemSwiper", {

      slidesPerView: 1,

      navigation: {
         nextEl: ".travel-next",
         prevEl: ".travel-prev"
      },


   });

   const bannerSwiper = new Swiper(".bannerSwiper", {

      slidesPerView: 1,

      loop: true,

      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },

      navigation: {
         nextEl: ".banner-next",
         prevEl: ".banner-prev"
      },

      pagination: {
         el: ".banner-pagination",
         clickable: true
      }
   });
   const productSwiper = new Swiper(".productSwiper", {

      slidesPerView: 4,
      slidesPerGroup: 4,

      spaceBetween: 15,

      loop: false,

      navigation: {
         nextEl: ".product-next",
         prevEl: ".product-prev"
      }
   });
   const sellerSwiper1 = new Swiper(".sellerSwiper1", {

      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,

      navigation: {
         nextEl: ".seller1-next"
      },

      pagination: {
         el: ".special1-page",
         type: "fraction"
      }
   });

   const sellerSwiper2 = new Swiper(".sellerSwiper2", {

      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,

      navigation: {
         nextEl: ".seller2-next"
      },

      pagination: {
         el: ".special2-page",
         type: "fraction"
      }
   });



   let page = 1;

   $(".service-next").click(function () {
      $(".page1").hide();
      $(".page2").css("display", "flex");
   });

   $(".service-prev").click(function () {
      $(".page2").hide();
      $(".page1").css("display", "flex");
   });
   $(".slide .slide-menu ul li").eq(0).addClass("hover")


   let idx = 0;


   $(".slide .slide-menu ul li").mouseover(function () {


      idx = $(this).index();

      $(".slide .slide-menu ul li").removeClass("hover").eq(idx).addClass("hover")



      $(".slide > ul > li").hide().eq(idx).show()
      clearInterval(timer)
   })


   let timer = setInterval(function () {

      idx++;

      if (idx > $(".slide > ul lu").length - 1) {
         idx = 0;

         idx = $(this).index();

         $(".slide .slide-menu ul li").removeClass("hover").eq(idx).addClass("hover")



         $(".slide > ul > li").hide().eq(idx).show()
         clearInterval(timer)

      }
   }, 3000)

   $(".slide").mouseover(function () {
      clearInterval(timer)
   })
   $(".slide, .slide .slide-menu ul li").mouseover(function () {
      clearInterval(timer)
      timer = setInterval(function () {

         idx++;

         if (idx > $(".slide > ul lu").length - 1) {
            idx = 0;

         }
      }, 3000)
   })
})