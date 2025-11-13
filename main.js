// GRAF #1
// Graf over de 10 mest købte genrer
const ctx = document.querySelector('#chart1');
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
                    display: false,
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
                display: false,
                text: 'Top 10 mest købte genrer',
                font: {
                    size: 18
                }
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                display: function (context) {
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

// GRAF #2
// polarArea graf over antal købte musiknumre pr. land
const ctx2 = document.querySelector('#chart2');
new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: [
            'USA',
            'Canada',
            'Brasilien',
            'Frankrig',
            'Tyskland',
            'England',
            'Tjekkiet',
            'Portugal',
            'Indien'
        ],
        datasets: [{
            label: 'Antal købte numre pr. land',
            data: [494, 304, 190, 190, 152, 114, 76, 76, 74],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)', // USA          Blå
                'rgba(54, 162, 235, 0.7)', // Canada       Blå
                'rgba(255, 206, 86, 0.7)', // Brasilien    Gul
                'rgba(75, 192, 192, 0.7)', // Frankrig     Grøn
                'rgba(75, 192, 192, 0.7)', // Tyskland     Grøn
                'rgba(75, 192, 192, 0.7)', // England      Grøn
                'rgba(75, 192, 192, 0.7)', // Tjekkiet     Grøn
                'rgba(75, 192, 192, 0.7)', // Portugal     Grøn
                'rgba(255, 99, 132, 0.7)'  // Indien       Rød
            ],
            borderColor: 'rgb(255,255,255)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {color: 'rgba(0, 0, 0, 0.05)'},
                ticks: {backdropColor: 'transparent'}
            }
        },
        plugins: {
            title: {
                display: false,
                text: 'Antal musiknumre købt pr. land',
                font: {size: 18}
            },
            legend: {
                position: 'right',

                // Custom labels til hvert kontinent
                // Nordamerika(blå), Sydamerika(gul), Europa(grøn), Asien(rød)
                labels: {
                    generateLabels: () => [
                        {
                            text: 'Nordamerika',
                            fillStyle: 'rgba(54, 162, 235, 0.7)'
                        },
                        {
                            text: 'Sydamerika',
                            fillStyle: 'rgba(255, 206, 86, 0.7)'
                        },
                        {
                            text: 'Europa',
                            fillStyle: 'rgba(75, 192, 192, 0.7)'
                        },
                        {
                            text: 'Asien',
                            fillStyle: 'rgba(255, 99, 132, 0.7)'
                        }
                    ]
                }
            },
            // Labels til lande inde i grafen
            datalabels: {
                color: '#000',
                font: {size: 14, weight: 'normal'},

                // Viser kun et tal for de 4 første lande
                formatter: (value, context) => {
                    const index = context.dataIndex;
                    const country = context.chart.data.labels[index];

                    // Returnerer index 0,1,2,3 med land og talværdi
                    if (index < 4) return `${country}:\n${value}`;

                    // Ellers returnerer kun land uden talværdi
                    return country;
                },
                align: 'end',
                anchor: 'center'
            }
        }
    },
    plugins: [ChartDataLabels]
});







