/*
 For testing purposes only all the code here will go to the main application
*/

//http://172.16.81.128:9600/api/expenses
$.getJSON(
    "http://172.16.81.128:9600/api/expenses",
    function(data) {
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
);

//http://172.16.81.128:9600/api/supermarket
$.getJSON(
    "http://172.16.81.128:9600/api/supermarket",
    function(data) {
        $('#supermarket').highcharts({
            chart: {
                type: "spline",
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
                    text: 'Amount'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            series: data.DataSeriesList.map(function(series) {
                return {
                    name: series.Title,
                    data: series.Values.map(function(expense) { 
                        return Math.abs(expense.Amount); 
                    })
                };    
            })
        });
    }
);

//http://172.16.81.128:9600/api/smoothsupermarket
$.getJSON(
    "http://172.16.81.128:9600/api/smoothsupermarket",
    function(data) {
        $('#smoothsupermarket').highcharts({
            chart: {
                type: "spline",
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
                    text: 'Amount'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            series: data.DataSeriesList.map(function(series) {
                return {
                    name: series.Title,
                    data: series.Values.map(function(expense) { 
                        return Math.abs(expense.Amount); 
                    })
                };    
            })
        });
    }
);

//http://172.16.81.128:9600/api/dayspan
$.getJSON(
    "http://172.16.81.128:9600/api/dayspan",
    function(data) {
        $('#dayspan').highcharts({
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
);
