var lineData = {
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4',
        'Data 5', 'Data 6', 'Data 7'],
    datasets: [{
        fillColor: 'rgba(0,0,0,0)',
        strokeColor: 'rgba(220,180,0,1)',
        pointColor: 'rgba(220,180,0,1)',
        data: [20, 30, 80, 20, 40, 10, 60]
    }, {
            fillColor: 'rgba(0,0,0,0)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            data: [60, 10, 40, 30, 80, 30, 20]
        }]
}

Chart.defaults.global = {
    animationSteps: 50,
    tooltipYPadding: 16,
    tooltipCornerRadius: 0,
    tooltipTitleFontStyle: 'normal',
    tooltipFillColor: 'rgba(0,160,0,0.8)',
    animationEasing: 'easeOutBounce',
    scaleLineColor: 'black',
    scaleFontSize: 16
}

var ctx = document.getElementById('tempChart').getContext('2d');
var lineDemo = new Chart(ctx).Line(lineData, {
    responsive: true,
    pointDotRadius: 10,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: 'black'
});

Chart.defaults.global.responsive = true;