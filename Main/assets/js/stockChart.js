//import Chart from 'chart.js';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

//Chart.plugins.unregister(ChartDataLabels);

var barChartData = {
    //plugins: [ChartDataLabels],
    labels: [
      "CSI 300 (China)",
      "NASDAQ 100 (U.S.)",
      "S&P500 (U.S.)",
      "Hang Seng (Hong Kong)",
      "SMI (Switzerland)",
      "MSCI World Index (global)",
      "STI (Singapore)",
      "KOSPI (South Korea)",
      "Nikkei 225 (Japan)",
      "Stoxx 600 (Europe)",
      "AEX (Netherlands)",
      "FTSE 100 (UK)",
      "IBEX 35 (Spain)",
      "FTSE MIB (Italy)",
      "DAX 30 (Germany)",
      "CAC 40 (France)",
      "ATG (Greece)"
    ],
    datasets: [
      {
        label: "Jan 1 to 23",
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
        barPercentage: 10,
        data: [-1.9, 5.8, 3.2, -1.4, 1.9, 2.2, 0.4, 2.2, 0.6, 0.9, 0, -1, -1, 0.9, 1.1, -0.2, 2.3]
      },
      {
        label: "Jan 23 to Mar 6",
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        data: [3.4, -7.6, -10.6, -6.3, -10, -10.7, -8.5, -9.2, -12.8, -12.7, -12.3, -13.9, -12, -12.3, -13.8, -13.9, -27.1]
      },
      {
        label: "Mar 6 to Mar 18",
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
        data: [-12.1, -12.4, -14.9, -14.7, -14.4, -17.5, -18.1, -22, -19.4, -23.8, -23.7, -21.4, -25.1, -27.3, -26.4, -26.7, -28.8]
      }
    ]
  };
  
  var chartOptions = {
    responsive: true,
    
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "COVID-19 IMPACT ON GLOBAL STOCK MARKETS BETWEEN JANUARY 1, 2020 TO MARCH 18, 2020 (Percentage Change)"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          
        },
        gridLines: {
                display: false
            },
            categoryPercentage: 0.9
      },
      
    ],
    xAxes: [{
      gridLines: {
        display: false
      },
      categoryPercentage: 0.9
    }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("canvasStock").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "horizontalBar",
      data: barChartData,
      options: chartOptions
    });
  };
  