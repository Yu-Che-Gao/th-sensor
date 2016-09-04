
var data = [

    { x: 0, y: 50 },

    { x: 1, y: 20 },

    { x: 2, y: 40 },

    { x: 3, y: 60 },

    { x: 4, y: 50 },

    { x: 5, y: 90 },

    { x: 6, y: 80 },

    { x: 7, y: 70 },

    { x: 8, y: 90 },

    { x: 9, y: 30 }

];



var width = 360,

    height = 240;

var scaleX = d3.scale.linear()

    .range([0, width])

    .domain([0, 9]); //x資料的範圍

var scaleY = d3.scale.linear()

    .range([height, 0])

    .domain([0, 100]); //Y的資料範圍



var s = d3.select('#tempChart'); //取得SVG的物件

s.attr({

    'width': 450, //設定畫布範圍

    'height': 380,

})

    .style({

        'border': '1px dotted #aaa'

    });


var line = d3.svg.line()

    .x(function (d) {

        return scaleX(d.x);

    }).y(function (d) {

        return scaleY(d.y);

    });

var axisX = d3.svg.axis()

    .scale(scaleX)

    .ticks(10) //刻度大小

    .orient("bottom"); //X軸數字的位置

var axisY = d3.svg.axis()

    .scale(scaleY)

    .ticks(10) //刻度大小

    .orient("left"); //Y軸數字的位置

s.append('path')

    .attr({

        'd': line(data),

        'stroke': '#09c',

        'fill': 'none',

        'transform': 'translate(35,20)' //偏移

    });

s.append('g')

    .call(axisX)

    .attr({

        'fill': 'none', //空心，但是字要另外處理

        'stroke': '#000',

        'transform': 'translate(35,' + (height + 20) + ')' //偏移

    })

    .selectAll('text') //字也會套用空心，另外處理

    .attr({

        'fill': '#000',

        'stroke': 'none',

    }).style({

        'font-size': '11px'

    });

s.append('g')

    .call(axisY)

    .attr({

        'fill': 'none',

        'stroke': '#000',

        'transform': 'translate(35,20)'

    })

    .selectAll('text')

    .attr({

        'fill': '#000',

        'stroke': 'none',

    }).style({

        'font-size': '11px'

    });
