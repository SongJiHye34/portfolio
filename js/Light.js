$(document).ready(function(){

 const topBtn = document.getElementById('topBtn');

  // 스크롤 시 버튼 표시
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });

  // 클릭 시 최상단 이동
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게
    });
  });
    
});