const dynamicData = {
    labels: ['CELLULAR GLASS', 'NITRIL RUBBER', 'EPS GRAPHITE', 'PIR/PUR', 'TEKTO PRO 1000 THERM', 'VIP (VACUUM INSULATE PANELS)'],
    thicknesses: [225, 200, 180, 165, 150, 145, 125, 80, 35]
};

// Function to create the chart
function createChart(data) {
    const ctx = document.getElementById('insulationChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CELLULAR GLASS', 'NITRIL RUBBER', 'EPS GRAPHITE', 'PIR/PUR', 'TEKTO PRO 1000 THERM', 'VIP (VACUUM INSULATE PANELS)'],
            datasets: [{
                label: 'Thickness (mm)',
                data: [225, 200, 180, 165, 150, 145, 125, 80, 35],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function(value, context) {
                        return value + ' mm';
                    },
                    color: 'black'
                }
            }
        }
    });
}

// Fetch dynamic data and create chart
function fetchDataAndCreateChart() {
    const fetchedData = dynamicData; // Replace with actual data fetching logic
    createChart(fetchedData);
}

// Initialize chart on page load
window.onload = fetchDataAndCreateChart;
