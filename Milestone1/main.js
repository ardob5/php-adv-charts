function printLineChart(){
  var ctx = $('#line');

  $.ajax({
    url: 'php/server.php',
    method: 'GET',
    success: function(myData){
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Vendite',
            data: myData,
            backgroundColor: [
              'rgba(47, 248, 124, 1)'
            ],
            borderColor: [
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)',
              'rgba(255, 0, 0,1)'
            ],
            borderWidth: 3
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    },
    error : function(error){
      console.log(error);
    }
  })
}

function init() {
  printLineChart();
}

$(document).ready(init);
