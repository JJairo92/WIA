(function() {
    // Modernizr function to check if browser supports canvas
    var modernizrTest = function() {
        if(Modernizr.canvas) {
            var theCanvas = document.getElementById("Canvas1");
            console.log("Canvas is working");
        } else {
            console.log("Your browser does not support HTML5 canvas.");
        }
    }    
    modernizrTest();
    
    
    window.onload = function() {
        
        
        // Logo using canvas and DrawScript
        var theCanvas = document.getElementById("Canvas1");
        if (theCanvas && theCanvas.getContext) {
            var ctx = theCanvas.getContext("2d");
            if (ctx) {
                
                //Text was made manually
                ctx.fillStyle = "#398cd1";                
                ctx.font = "italic bold 12pt Asap";
                ctx.fillText("Real Football Reports", 50,20);
                ctx.fillStyle = "#3fc94c";
                ctx.font = "italic 10pt Asap italic";
                ctx.fillText('Know your Passion', 50,37);
                
                // Drawings from logo using DrawScript
                ctx.fillStyle="rgb(63,201,76)";
                ctx.beginPath();
                ctx.moveTo(26,0);
                ctx.bezierCurveTo(26,0,23,0,22,2);
                ctx.bezierCurveTo(22,4,22,7,24,7);
                ctx.bezierCurveTo(26,8,28,5,28,3);
                ctx.bezierCurveTo(29,1,27,0,26,0);
                ctx.fill();
                
                ctx.fillStyle="rgb(242,225,100)";
                ctx.beginPath();
                ctx.moveTo(4,23);
                ctx.bezierCurveTo(6,23,8,25,8,27);
                ctx.bezierCurveTo(8,29,6,31,4,31);
                ctx.bezierCurveTo(1,31,0,29,0,27);
                ctx.bezierCurveTo(0,25,1,23,4,23);
                ctx.fill();
                
                ctx.fillStyle="rgb(57,140,209)";
                ctx.beginPath();
                ctx.moveTo(10,42);
                ctx.bezierCurveTo(10,42,8,41,9,39);
                ctx.bezierCurveTo(10,37,15,30,15,30);
                ctx.lineTo(16,22);
                ctx.lineTo(9,24);
                ctx.bezierCurveTo(9,24,8,22,6,21);
                ctx.lineTo(15,17);
                ctx.lineTo(19,9);
                ctx.lineTo(12,11);
                ctx.lineTo(6,15);
                ctx.bezierCurveTo(6,15,5,15,4,14);
                ctx.bezierCurveTo(3,13,4,12,5,12);
                ctx.bezierCurveTo(5,11,11,8,11,8);
                ctx.lineTo(20,4);
                ctx.bezierCurveTo(20,4,20,4,21,4);
                ctx.bezierCurveTo(21,4,21,8,24,9);
                ctx.bezierCurveTo(26,9,29,6,29,6);
                ctx.bezierCurveTo(29,6,29,6,30,6);
                ctx.bezierCurveTo(30,7,35,9,35,9);
                ctx.lineTo(42,7);
                ctx.bezierCurveTo(42,7,43,7,43,8);
                ctx.bezierCurveTo(44,10,43,10,43,10);
                ctx.bezierCurveTo(42,10,35,12,35,12);
                ctx.lineTo(28,10);
                ctx.bezierCurveTo(28,10,28,11,29,12);
                ctx.lineTo(22,22);
                ctx.lineTo(18,31);
                ctx.lineTo(12,41);
                ctx.bezierCurveTo(12,41,11,42,10,42);
                ctx.fill();
                
                ctx.fillStyle="rgb(63,201,76)";
                ctx.beginPath();
                ctx.moveTo(14,16);
                ctx.bezierCurveTo(15,14,12,13,12,13);
                ctx.lineTo(6,20);
                ctx.lineTo(14,16);
                ctx.fill();
                
                ctx.lineStyle="rgb(57,140,209)";
                ctx.lineWidth=2;
                ctx.beginPath();
                ctx.moveTo(35,49);
                ctx.strokeStyle = "#398cd1";
                ctx.bezierCurveTo(35,49,125,32,169,50);
                ctx.stroke();
            }
        }
        
        // World Cup Wins Bar Graph
        var theCanvas2 = document.getElementById("Canvas2");         
        if(theCanvas2 && theCanvas2.getContext) {
            var ctx2 = theCanvas2.getContext("2d");
            
            if(ctx2) {
                var barChartData = {
                    labels: ["World Cup Wins"],
                    datasets: [{
                        // Argentina
                        fillColor: "rgba(128,233,242, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [2]
                    },
                    {
                        // Bolivia
                        fillColor: "rgba(33,124,33, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Brazil
                        fillColor: "rgba(255,223,0, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [5]
                    },
                    {
                        // Chile
                        fillColor: "rgba(214,52,52, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Colombia
                        fillColor: "rgba(51,61,98, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Ecuador
                        fillColor: "rgba(234,216,240, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Paraguay
                        fillColor: "rgba(224,25,25, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Perú
                        fillColor: "rgba(226,226,226, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    },
                    {
                        // Uruguay
                        fillColor: "rgba(128,187,255, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [2]
                    },
                    {
                        // Venezuela
                        fillColor: "rgba(128,0,0, 0.5)",
                        strokeColor: "rgba(129,126,126, 0.3)",
                        data: [0]
                    }]
                }
                
                var options = {
                    scaleFontFamily: "'Crimson Text'",
                    scaleFontSize: 15
                }
                
                var barData = new Chart(ctx2).Bar(barChartData, options);
            }
        }
        
        // jQuery toggle button function
        $("#toggle1930").click(function(){
            $("#comboChart1").slideToggle(500);
            $("#arrow1").replaceWith("<img id='arrow1-side' src='images/arrow-side.png' />");
        });
        
        $("#toggle1974").click(function(){
            $("#comboChart2").fadeToggle(500);
            $("#arrow2").replaceWith("<img src='images/arrow-side.png' />");
        });
    }
    
    // Combo Chart Using Google Charts
    // World Cup Rankings 1930-1970
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['World Cup Years', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela'],
            ['1930',                 2,         12,         6,       5,        0,         0,          9,       10,        1,         0],
            ['1934',                 9,          0,        14,       0,        0,         0,          0,        0,        0,         0],
            ['1938',                 0,          0,         3,       0,        0,         0,          0,        0,        0,         0],
            ['1950',                 0,         13,         2,       9,        0,         0,         11,        0,        1,         0],
            ['1954',                 0,          0,         5,       0,        0,         0,          0,        0,        4,         0],
            ['1958',                13,          0,         1,       0,        0,         0,         12,        0,        0,         0],
            ['1962',                10,          0,         1,       3,       14,         0,          0,        0,       13,         0],
            ['1966',                 5,          0,        11,      13,        0,         0,          0,        0,        7,         0],
            ['1970',                 0,          0,         1,       0,        0,         0,          0,        6,        4,         0]
//            ['1974',                 8,          0,         4,      11,        0,         0,          0,        0,       13,         0],
//            ['1978',                 1,          0,         3,       0,        0,         0,          0,        8,        0,         0],
//            ['1982',                11,          0,         5,      22,        0,         0,          0,       20,        0,         0],
//            ['1986',                 1,          0,         5,       0,        0,         0,         13,        0,       16,         0],
//            ['1990',                 2,          0,         9,       0,       14,         0,          0,        0,       16,         0],
//            ['1994',                10,         21,         1,       0,       19,         0,          0,        0,        0,         0],
//            ['1998',                 6,          0,         2,      16,       21,         0,         14,        0,        0,         0],
//            ['2002',                18,          0,         1,       0,        0,        24,         16,        0,       26,         0],
//            ['2006',                 6,          0,         5,       0,        0,        12,         18,        0,        0,         0],
//            ['2010',                 5,          0,         6,      10,        0,         0,          8,        0,        4,         0]
        ]);
        
        var options = {
            title: 'Highest Ranking Achieved (1 is Highest)',
            vAxis: {title: 'Ranking'},
            hAxis: {title: "World Cup Years 1930-1970"},
            seriesType: "bars",
            series: {5: {type: "bars"}},
            fontName: 'Crimson Text',
            fontSize: 16,
            lineWidth: 4
        }
        
        var chart = new google.visualization.ComboChart(document.getElementById("comboChart1"));
        chart.draw(data, options);
    }
    
    // Combo Chart Using Google Charts
    // World Cup Rankings 1970-2010
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart2);
    
    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['World Cup Years', 'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela'],
//            ['1930',                 2,         12,         6,       5,        0,         0,          9,       10,        1,         0],
//            ['1934',                 9,          0,        14,       0,        0,         0,          0,        0,        0,         0],
//            ['1938',                 0,          0,         3,       0,        0,         0,          0,        0,        0,         0],
//            ['1950',                 0,         13,         2,       9,        0,         0,         11,        0,        1,         0],
//            ['1954',                 0,          0,         5,       0,        0,         0,          0,        0,        4,         0],
//            ['1958',                13,          0,         1,       0,        0,         0,         12,        0,        0,         0],
//            ['1962',                10,          0,         1,       3,       14,         0,          0,        0,       13,         0],
//            ['1966',                 5,          0,        11,      13,        0,         0,          0,        0,        7,         0],
//            ['1970',                 0,          0,         1,       0,        0,         0,          0,        6,        4,         0],
            ['1974',                 8,          0,         4,      11,        0,         0,          0,        0,       13,         0],
            ['1978',                 1,          0,         3,       0,        0,         0,          0,        8,        0,         0],
            ['1982',                11,          0,         5,      22,        0,         0,          0,       20,        0,         0],
            ['1986',                 1,          0,         5,       0,        0,         0,         13,        0,       16,         0],
            ['1990',                 2,          0,         9,       0,       14,         0,          0,        0,       16,         0],
            ['1994',                10,         21,         1,       0,       19,         0,          0,        0,        0,         0],
            ['1998',                 6,          0,         2,      16,       21,         0,         14,        0,        0,         0],
            ['2002',                18,          0,         1,       0,        0,        24,         16,        0,       26,         0],
            ['2006',                 6,          0,         5,       0,        0,        12,         18,        0,        0,         0],
            ['2010',                 5,          0,         6,      10,        0,         0,          8,        0,        4,         0]
        ]);
        
        var options = {
            title: 'Highest Ranking Achieved (1 is Highest)',
            vAxis: {title: 'Ranking'},
            hAxis: {title: "World Cup Years 1974-2010"},
            seriesType: "bars",
            series: {5: {type: "bars"}},
            fontName: 'Crimson Text',
            fontSize: 16,
            lineWidth: 4
        }
        
        var chart2 = new google.visualization.ComboChart(document.getElementById("comboChart2"));
        chart2.draw(data, options);
    }
})();