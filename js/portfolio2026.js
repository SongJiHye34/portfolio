$(document).ready(function(){


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

document
  .querySelectorAll('.design-top, .design-bottom, .maindesign')
  .forEach(card => {

    const img = card.querySelector('img');
    const titles = card.querySelectorAll('h1');

    if (!img || titles.length === 0) return; 

    img.addEventListener('mouseenter', () => {
      titles.forEach(h1 => h1.classList.add('text-active'));
    });

    img.addEventListener('mouseleave', () => {
      titles.forEach(h1 => h1.classList.remove('text-active'));
    });
});



window.addEventListener('scroll', function () {
  const sideMenu = document.querySelector(' .header');

  if (window.scrollY > 50) {
    sideMenu.classList.add('scrolled');
  } else {
    sideMenu.classList.remove('scrolled');
  }
});

});