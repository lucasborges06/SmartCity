AOS.init({
  duration: 1000,
  once: true,
});

// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80},
    "color": {"value": "#00ffff"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.3},
    "size": {"value": 3},
    "line_linked": {"enable": true,"distance": 150,"color": "#00ffff","opacity":0.2,"width":1},
    "move": {"enable": true,"speed": 2}
  },
  "interactivity": {
    "events": {"onhover": {"enable": true,"mode": "grab"}}
  }
});

// Chart.js - Painéis
const energyCtx = document.getElementById('energyChart').getContext('2d');
new Chart(energyCtx, {
  type: 'doughnut',
  data: {
    labels: ['Renovável', 'Convencional'],
    datasets: [{ data: [65, 35], backgroundColor: ['#00ffcc','#222'] }]
  }
});

const trafficCtx = document.getElementById('trafficChart').getContext('2d');
new Chart(trafficCtx, {
  type: 'bar',
  data: {
    labels: ['08h','12h','16h','20h'],
    datasets: [{ label: 'Fluxo de veículos', data: [120, 80, 150, 60], backgroundColor: '#00ffff' }]
  },
  options: { scales: { y: { beginAtZero:true } } }
});

const airCtx = document.getElementById('airChart').getContext('2d');
new Chart(airCtx, {
  type: 'line',
  data: {
    labels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
    datasets: [{ label: 'Qualidade do Ar', data: [80,75,90,70,85,60,50], borderColor:'#00ffff', tension:0.3 }]
  },
  options: { scales: { y: { beginAtZero:true, max:100 } } }
});
