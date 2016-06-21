/*
 For testing purposes only all the code here will go to the main application
*/

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
    url: "http://172.16.81.128:9600/api/supermarket",
    success: function(data) {
        $('#supermarket').highcharts({
            chart: {
                type: "line",
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
});

$.ajax({
    url: "http://172.16.81.128:9600/api/smoothsupermarket",
    success: function(data) {
        $('#smoothsupermarket').highcharts({
            chart: {
                type: "line",
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
});