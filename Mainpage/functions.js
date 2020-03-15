
var mybarchart=null;
var mypiechart=null;
var mylinechart=null;
  // Global Options
Chart.defaults.global.defaultFontFamily = 'pixel';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
function geturl1(){//get url for q1 time selection
  var e1 = document.getElementById('q1_select1');
  var inputVal1 = e1.value;
  var e2 = document.getElementById('q1_select2');
  var inputVal2 = e2.value;
  var url = "https://cors-anywhere.herokuapp.com/99.79.10.143:3300/api/genres/All?format=json&from=" + inputVal1 +"&to=" + inputVal2;
  return url;
}
function geturl2(){//get url for q2
var e1 = document.getElementById('q2_select1');
var gen = e1.value;
var e2 = document.getElementById('q2_select2');
var year1 = e2.value;
var e3 = document.getElementById('q2_select3');
var year2 = e3.value;
var url = "https://cors-anywhere.herokuapp.com/99.79.10.143:3300/api/genres/Rating?genre=" + gen + "&format=json&from=" + year1 + "&to=" + year2;
return url;
}
function geturl3(){//get url for q3
var e1 = document.getElementById('q3_select1');
var gen = e1.value;
var e2 = document.getElementById('q3_select2');
var year1 = e2.value;
var e3 = document.getElementById('q3_select3');//http://99.79.10.143:3300/api/genres/Drama?format=json&from=1990&to=1991
var year2 = e3.value;//http://99.79.10.143:3300/api/genres/Drama?format=json&from=1990&to=2010
var url = "https://cors-anywhere.herokuapp.com/99.79.10.143:3300/api/genres/" + gen + "?format=json&from=" + year1 + "&to=" + year2;
return url;
}
function DrawBarChart(){
if(mybarchart!=null){
mybarchart.destroy();
}
var url1 = geturl1();
  //get data from database server
$.getJSON(url1, function(data) {
    var ad =
    `${data.movies.Adventure}`;
    var an =
    `${data.movies.Animation}`;
    var ch =
    `${data.movies.Children}`;
    var co =
    `${data.movies.Comedy}`;
    var fa =
    `${data.movies.Fantasy}`;
    var ro =
    `${data.movies.Romance}`;
    var dr =
    `${data.movies.Drama}`;
    var ac =
    `${data.movies.Action}`;
    var cr =
    `${data.movies.Crime}`;
    var th =
    `${data.movies.Thriller}`;
    var ho =
    `${data.movies.Horror}`;
    var my =
    `${data.movies.Mystery}`;
    var sc =
    `${data.movies['Sci-Fi']}`;
    var im =
    `${data.movies.IMAX}`;
    var doc =
    `${data.movies.Documentary}`;
    var wa =
    `${data.movies.War}`;
    var mu =
    `${data.movies.Musical}`;
    var we =
    `${data.movies.Western}`;
    var fi =
    `${data.movies['Film-Noir']}`;

  //----------------------------bar chart---------------------------------
let barChart = document.getElementById('barChart').getContext('2d');


    mybarchart = new Chart(barChart, {
    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
    labels:['Adventure', 'Animation', 'Children', 'Comedy', 'Fantasy', 'Romance', 'Drama', 'Action',
            'Crime', 'Thriller', 'Horror', 'Mystery', 'Sci-Fi', 'IMAX', 'Documentary', 'War', 'Musical', 'Western', 'Film-Noir'],
    datasets:[{
      label:'Quantity',
      data:[
        ad,
        an,
        ch,
        co,
        fa,
        ro,
        dr,
        ac,
        cr,
        th,
        ho,
        my,
        sc,
        im,
        doc,
        wa,
        mu,
        we,
        fi
        ],
      backgroundColor:
        '#fbfcd0',
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:false,
      text:'Number of movies in genres',
      fontSize:25
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    },
  scales: {
      xAxes: [{
          ticks: {
              autoSkip: false
          }
      }]
  }
  }
});
});
}
function DrawPieChart(){
if(mypiechart!=null){
mypiechart.destroy();
}
var url2 = geturl2();
  //get data from database server
$.getJSON(url2, function(data) {
    var quantity_0_2 =
    `${data.movies['0-2']}`;
    var quantity_2_4 =
    `${data.movies['2-4']}`;
    var quantity_4_6 =
    `${data.movies['4-6']}`;
    var quantity_6_8 =
    `${data.movies['6-8']}`;
    var quantity_8_10 =
    `${data.movies['8-10']}`;

//-----------------------------------------pie chart---------------------------------------
var ctx = document.getElementById("pieChart").getContext('2d');
mypiechart =  new Chart(ctx, {
type: 'pie',
data: {
    labels: ["0-2", "2-4", "4-6", "6-8", "8-10"],
    datasets: [{
    backgroundColor: [
        "#ccec9e",
        "#94d492",
        "#79c389",
        "#78b4af",
        "#8aa6c5"
    ],
    data: [quantity_0_2,quantity_2_4, quantity_4_6, quantity_6_8, quantity_8_10]
    }]
}
});

});
}

function DrawLineChart(){
if(mylinechart!=null){
mylinechart.destroy();
}
var url3 = geturl3();
  //get data from database server

$.getJSON(url3, function(data) {


//---------------------line chart--------------------------------------------------------------
    var lineCanvas = document.getElementById("lineChart");
    var label_x = [];
    var label_y = [];
    for(var i in data.movies){
        label_x.push(i);
        label_y.push(data.movies[i]);
    }
    var lineData = {
        labels: label_x,
        datasets: [{
            label: "Quantity",
            data: label_y,
             //backgroundColor: "#e755ba",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7"
      }]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      },

    };

    mylinechart = new Chart(lineCanvas, {
      type: 'line',
      data: lineData,
      options: chartOptions
    });
})
}


