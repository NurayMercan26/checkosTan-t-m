// Script for configuring and rendering the chart
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for student achievements
    var data = {
        labels: ['AI Projects', 'Energy Projects', 'Research Papers', 'Hackathons'],
        datasets: [{
            label: 'Number of Achievements',
            backgroundColor: '#007bff', // Blue color for bars
            data: [15, 12, 20, 8] // Replace with actual data
        }]
    };

    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    var ctx = document.getElementById('achievement-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
