const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];

const sales = [
    12000,
    15000,
    18000,
    14000,
    20000,
    24000
];

const ctx = document.getElementById("salesChart");

new Chart(ctx, {
    type: "line",

    data: {
        labels: months,

        datasets: [{
            label: "Monthly Sales",
            data: sales,
            borderWidth: 2
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
