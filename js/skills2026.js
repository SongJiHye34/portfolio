$(document).ready(function () {

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
    document.body.classList.remove('menu-open'); // 추가
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

  new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JS', 'PS', 'il', 'Fi', 'OFF'],
      datasets: [{
        data: [70, 50, 30, 45, 80, 45, 45],
        backgroundColor: '#222',
        borderRadius: 10,
        borderSkipped: false,
        barThickness: 6,
        categoryPercentage: 0.5,
        barPercentage: 0.5
      }]
    },
    options: {
      layout: {
        padding: {
          top: 40
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false }
        },
        y: {
          min: 0,
          max: 100,
          suggestedMax: 100,
          grid: { display: false },
          border: { display: false },
          ticks: { display: false }
        }
      }
    },
    plugins: [percentPlugin]
  });
});