// -------------------------------
// HAMBURGER POUR MOBILE
// -------------------------------
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// -------------------------------
// CHANGEMENT DE SECTION AU CLIC
// -------------------------------
const menuItems = document.querySelectorAll('#menu li');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
    // Cacher toutes les sections
    sections.forEach(section => section.classList.remove('active'));

    // Afficher la section demandée
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    // Mettre à jour le menu actif
    menuItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });

    // Générer le graphique si c'est la section statistiques
    if (sectionId === 'statistiques') {
        renderStatisticsChart();
    }
}

// Menu sidebar
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        showSection(item.dataset.section);
    });
});

// Topbar buttons
document.querySelectorAll('.top-actions button').forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('onclick').match(/'(.+?)'/)[1];
        showSection(sectionId);
    });
});

// -------------------------------
// GRAPHIQUE STATISTIQUES
// -------------------------------
let chartInstance; // pour éviter de créer plusieurs charts

function renderStatisticsChart() {
    const ctx = document.getElementById('chart').getContext('2d');

    // Si un graphique existe déjà, on le détruit pour recréer
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar', // type de graphique : barres
        data: {
            labels: ['Productivité', 'Ponctualité', 'Rendement'],
            datasets: [{
                label: 'Score (%)',
                data: [87, 93, 78],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}
