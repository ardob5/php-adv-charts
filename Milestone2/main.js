function printLineChart(){
  var ctx = $('#line');

  $.ajax({
    url: 'php/server.php',
    method: 'GET',
    success: function(myData){
      var myChart = new Chart (ctx, {
        type: myData.fatturato.type,
        data: {
          labels: moment.months(),
          datasets: [{
            label: 'Sales',
            data: myData.fatturato.data
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
      })
    }
  })
}

function printPieChart(){
  var ctx = $('#pie');

  $.ajax({
    url: 'php/server.php',
    method: 'GET',
    success: function(myData){
      var myChar = new Chart (ctx, {
        type: myData['typeAgents'],
        data: {
          labels: myData.labels,
          datasets: [{
            label: 'Sales',
            data: myData.sales
          }]
        },
        options: {
          scales: {
            yAxes: {
              ticks: {
                beginAtZero: true
              }
            }
          }
        }
      })
    }
  })
}



function init(){
  printLineChart();
  printPieChart();
}

$(document).ready(init);
