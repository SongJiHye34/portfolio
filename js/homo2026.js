$(document).ready(function () {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.querySelector('.side-menu');
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

});