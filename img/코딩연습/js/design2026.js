$(document).ready(function () {

  const imgView = document.querySelector('.img-view');
  const topBtn = document.getElementById('topBtn');
  const menuLinks = document.querySelectorAll('.menu-bar a');
  const chunks = document.querySelectorAll('.chunk');

  /* ================= 스크롤 ================= */
  imgView.addEventListener('scroll', () => {

    /* top 버튼 */
    topBtn.style.display = imgView.scrollTop > 200 ? 'block' : 'none';

    /* chunk 등장 */
    chunks.forEach(chunk => {
      const chunkTop = chunk.offsetTop;
      const viewBottom = imgView.scrollTop + imgView.clientHeight;

      if (viewBottom > chunkTop + 100) {
        chunk.classList.add('active');
      }
    });
  });

  /* ================= top 버튼 ================= */
  topBtn.addEventListener('click', () => {
    imgView.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ================= 메뉴 이동 ================= */
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      imgView.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

});