$(document).ready(function(){

  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open'); 
  }

  const percentPlugin = {
    id: 'percentPlugin',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;

      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);

        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];

          ctx.save();
          ctx.fillStyle = '#000';
          ctx.font = '12px Noto Sans KR';
          ctx.textAlign = 'center';
          ctx.fillText(value + '%', bar.x, bar.y - 5);
          ctx.restore();
        });
      });
    }
  };


 const topBtn = document.getElementById('topBtn');

 
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });


  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });
    
});