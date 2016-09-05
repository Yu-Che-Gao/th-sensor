google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    sendXhrRequest('/selectTH', '', 'POST', function (result) {
        console.log(result);
        var json = JSON.parse(result);
        var rawData = [];
        Object.keys(json).map(function (value, index) {
            rawData[index] = [];
            rawData[index][0] = json[index].insertTime;
            rawData[index][1] = json[index].temp;
        });

        var data = google.visualization.arrayToDataTable(rawData);

        // var data = google.visualization.arrayToDataTable([
        //     ['Time', 'Temperature'],
        //     ['2004', 1000],
        //     ['2005', 1170],
        //     ['2006', 660],
        //     ['2007', 1030]
        // ]);

        var options = {
            title: '歷史溫度曲線圖',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('tempChart'));
        chart.draw(data, options);
    });


}