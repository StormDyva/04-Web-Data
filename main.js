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

// De tre genrer med højest værdi.
const top3 = tracksPurchasedPrGenre.slice(0, 3);

// Forskellig farve på top 3 genrer.
const backgroundColors = tracksPurchasedPrGenre.map(value => {
    if (top3.includes(value)) {
        return 'rgba(255, 99, 132, 0.7)';  // Highlighted bars
    } else {
        return 'rgba(54, 162, 235, 0.6)';  // Normal bars
    }
});
const borderColors = tracksPurchasedPrGenre.map(value => {
    if (top3.includes(value)) {
        return 'rgba(255, 99, 132, 1)';  // Highlighted borders
    } else {
        return 'rgba(54, 162, 235, 1)';  // Normal borders
    }
});

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Antal musiknumre købt',
            data: tracksPurchasedPrGenre,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
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
            // Viser talværdi over top 3 søjler.
            datalabels: {
                display: function (context) {
                    const value = context.dataset.data[context.dataIndex];
                    return top3.includes(value);
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


