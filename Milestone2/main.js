function printLineChart(){
  var ctx = $('#line');

  $.ajax({
    url: 'php/server.php',
    method: 'GET',
    success: function(myData){
      var myChart = new Chart (ctx, {
        type: myData['fatturato']['type'],
        data: {
          labels: moment.months(),
          datasets: [{
            label: 'Sales',
            data: myData['fatturato']['data'],
            backgroundColor: [
              '#4281A4'
            ],
            borderColor: [
              'rgba(255, 0, 0,1)'
            ],
            borderWidth: 2
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
            data: myData.sales,
            backgroundColor: [
              '#4281A4',
              '#20A39E',
              '#F4B860',
              '#C83E4D'
            ],
            borderColor: [
              '#000',
              '#000',
              '#000',
              '#000'
            ],
            borderWidth: 2
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
