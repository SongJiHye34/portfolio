$(document).ready(function () {
  new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: ['HTML','CSS','JS','PS','il','Fi','OFF'],
      datasets: [{
        label: '데이터',
        data: [25, 25, 10, 35, 30, 25, 15],
        backgroundColor: '#013C31',
        borderColor: '#013C31',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false   // 🔹 '데이터' 글자 제거
        }
      },
      scales: {
        x: {
          grid: {
            display: false // 🔹 세로 모눈 제거
          },
          border: {
            display: false
          }
        },
        y: {
          grid: {
            display: false // 🔹 가로 모눈 제거
          },
          border: {
            display: false
          },
          ticks: {
            display: false // 🔹 왼쪽 숫자 제거 (원하면 지워도 됨)
          }
        }
      }
    }
  });
});