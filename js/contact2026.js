$(function () {

  // ================= 메뉴 =================
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu'); // id로 통일
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  function openMenu() {
    sideMenu?.classList.add('active');
    overlay?.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    sideMenu?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);


  // ================= 인트로 =================
  const introImg = document.querySelector('.intro-img');
  const text = document.querySelector('.wed .text');

  // 모바일이면 아예 실행 안 함
  if (window.innerWidth > 770 && introImg) {

    setTimeout(() => {
      introImg.classList.add('hide');
      text?.classList.add('show');
    }, 1200);

    setTimeout(() => {
      introImg.remove();
    }, 2300);

  } else {
    // 모바일: 바로 제거 + 텍스트 표시
    introImg?.remove();
    text?.classList.add('show');
  }

});