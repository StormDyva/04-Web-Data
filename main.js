// Graf over de 10 mest købte genrer
const ctx = document.querySelector('#chart');
const labels = [
    'Rock',
    'Latin',
    'Metal',
    'Alternative & Punk',
    'Jazz',
    'Blues',
    'R&B/Soul',
    'Classical',
    'Reggae',
    'Pop'
];

const tracksPurchasedPrGenre = [835, 386, 264, 244, 80, 61, 41, 41, 30, 28];

// Farver for hver søjle
const backgroundColors = [
    'rgba(255, 99, 132, 0.7)',  // Rock
    'rgba(255, 99, 132, 0.7)',  // Latin
    'rgba(255, 99, 132, 0.7)',  // Metal
    'rgba(75, 192, 192, 0.7)',  // Alternative & Punk
    'rgba(75, 192, 192, 0.7)',  // Jazz
    'rgba(75, 192, 192, 0.7)', // Blues
    'rgba(75, 192, 192, 0.7)', // R&B/Soul
    'rgba(75, 192, 192, 0.7)',   // Classical
    'rgba(75, 192, 192, 0.7)',  // Reggae
    'rgba(75, 192, 192, 0.7)'  // Pop
];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Antal musiknumre købt',
            data: tracksPurchasedPrGenre,
            backgroundColor: backgroundColors,
            borderWidth: 0,
            borderRadius: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Antal musiknumre'
                },
                grid: {
                    display: false
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Genre'
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Top 10 mest købte genrer',
                font: {
                    size: 18
                }
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                display: function(context) {
                    // Viser kun labels for de første 3 søjler
                    return context.dataIndex < 3;
                },
                align: 'end',
                anchor: 'end',
                color: '#000',
                font: {
                    weight: 'bold'
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});



