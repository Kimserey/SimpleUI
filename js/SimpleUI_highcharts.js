$.ajax({
    url: "http://172.16.81.128:9600/api/dayspan",
    success: function(data) {
        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Day span with amount spent - Supermarket'
            },
            xAxis: {
                title: {
                    text: 'Amount'
                }
            },
            yAxis: {
                title: {
                    text: 'Day span'
                }
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.x} GBP, {point.y} days'
                    }
                }
            },
            series: [{
                name: 'Expenses',
                color: 'rgba(223, 83, 83, .5)',
                data: data
            }]
        });
    }
});
