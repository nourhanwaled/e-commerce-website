$("document").ready(function(){
$(".search").on("keyup",function(){
    var inputvalue=$(this).val().toLowerCase();
    $(".mysearch2 li").filter(function(){
    var livalue=$(this).text().toLowerCase();
    $(this).toggle(livalue.indexOf(inputvalue)>-1)
    });
    });
});
/*.......................................*/
/*....start of charts*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['crimson','yellow','blue','pink','springgreen','deeppink','rgb(255, 99, 132)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 7, 9, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
/*....................*/

// For a pie chart
var ctx=document.getElementById('myChart2').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data:{
        labels: [
            'pink',
            'Yellow',
            'springgreen'
        ],
        datasets: [{
            data: [15, 20, 25],
     
        backgroundColor:['crimson','Yellow','springgreen'],
    }],
    },
    options: {}  
});
    // These labels appear in the legend and in the tooltips when hovering different arcs

/*end of charts*/