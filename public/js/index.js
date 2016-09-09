google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    sendXhrRequest('/selectTH', '', 'POST', function (result) {
        var json = JSON.parse(result);
        var rawData = [];
        rawData[0] = ['Time', 'Temperature'];
        Object.keys(json).map(function (value, index) {
            rawData[index + 1] = [];
            rawData[index + 1][0] = json[index].insertTime;
            rawData[index + 1][1] = json[index].temp;
            rawData[index + 1][2] = json[index].humi;
        });

        var data = google.visualization.arrayToDataTable(rawData);
        var options = {
            title: '歷史溫濕度曲線圖',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('tempChart'));
        chart.draw(data, options);
    });

    setInterval(getFinalData, 1000);
}

function getFinalData() {
    sendXhrRequest('/selectTH', 'lowerTime=final', 'POST', function (result) {
        var json = JSON.parse(result);
        var temp = json[0].temp + '度';
        var humi = json[0].humi + '%';
        var finalTime = json[0].insertTime;
        document.getElementById('temp').innerHTML = temp;
        document.getElementById('humi').innerHTML = humi;
        document.getElementById('finalTime').innerHTML = finalTime.replace(/T|Z/gi, ' ');
    });
}