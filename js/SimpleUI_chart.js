/*
 For testing purposes only all the code here will go to the main application
*/

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function randomColor(opacity) {
    var randomColorFactor = function() {
        return Math.round(Math.random() * 255);
    };
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

$.ajax({
    url: "http://172.16.81.128:9600/api/expenses",
    success: function(data) {
        $('#expenses').highcharts({
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: data.Title
            },
            xAxis: {
                categories: data.Labels
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total amount'
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                pointFormat: '{series.name}: {point.y} GBP<br/>Total: {point.stackTotal} GBP'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: 
                data.DataSeriesList
                    .map(function(series) {
                        return {
                            name: series.Title,
                            data: series.Values
                        };
                    })
        });
    }
});

$.ajax({
    url: "http://172.16.81.128:9600/api/dayspan",
    success: function(data) {
        var main = $("#count-charts");
        $.each(data.DataSeriesList, function(index, series) {
            var el = $("<canvas height='100%'/>");
            main.append(el);
            var barChart = new Chart(el, {
                type: 'bar',
                options: {
                    title: {
                        display: true,
                        text: series.Title
                    },
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                },
                data: {
                    labels: data.Labels,
                    datasets: [{
                        backgroundColor: randomColor(0.8),
                        label: series.Title, 
                        data: series.Values
                    }]
                }
            });
        });
    }
});