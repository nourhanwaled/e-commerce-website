
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#666',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

//chart 1
var ctx = document.getElementById('bar').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
// end chart 2

var ctx = document.getElementById('area').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
// end chart 3
//For a pie chart
var ctx=document.getElementById('pie').getContext('2d');
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

//end chart 4
var ctx = document.getElementById('scatter').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'scatter',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'pink',
            borderColor: 'pink',
            data: [-0.2, 10, 60, 2, 60, 80, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
//end chart 5

// For a pie chart
var ctx=document.getElementById('piee').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data:{
        labels: [
            'blue',
            'red',
            'green'
        ],
        datasets: [{
            data: [15, 30, 30],
     
        backgroundColor:['blue','red','#666'],
    }],
    },
    options: {}  
});
//end chart 6