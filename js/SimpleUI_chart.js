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
        var barChart = new Chart(document.getElementById("allexpenses"), {
            type: 'bar',
            options: {
                title: {
                    display: true,
                    text: data.Title
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
                datasets: 
                    data
                    .DataSeriesList
                    .map(function(d) {
                        return {
                            backgroundColor: randomColor(0.8),
                            label: d.Title,
                            data: d.Values
                        };
                    })
            }
        });
    }
});

$.ajax({
    url: "http://172.16.81.128:9600/api/levelcounts",
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