document.addEventListener("DOMContentLoaded", function() {
    const salesOverviewCtx = document.getElementById('salesOverview').getContext('2d');
    const revenueByRegionCtx = document.getElementById('revenueByRegion').getContext('2d');
    const productPerformanceCtx = document.getElementById('productPerformance').getContext('2d');

    const salesOverviewChart = new Chart(salesOverviewCtx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Vendas Totais',
                data: [12000, 19000, 3000, 5000, 2000, 30000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const revenueByRegionChart = new Chart(revenueByRegionCtx, {
        type: 'bar',
        data: {
            labels: ['Norte', 'Sul', 'Leste', 'Oeste'],
            datasets: [{
                label: 'Receita por Região',
                data: [5000, 10000, 7500, 2500],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const productPerformanceChart = new Chart(productPerformanceCtx, {
        type: 'pie',
        data: {
            labels: ['Produto A', 'Produto B', 'Produto C'],
            datasets: [{
                label: 'Performance dos Produtos',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
