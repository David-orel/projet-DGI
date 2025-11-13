// Simulation d'utilisateurs (pour prototype)
const users = [
    { username: 'eddy', password: 'dgi123' },
    { username: 'david', password: 'dgi456' }
];

const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');
const rememberMe = document.getElementById('rememberMe');

// Vérification automatique si utilisateur "souvenu"
window.onload = () => {
    const rememberedUser = localStorage.getItem('dgiUser');
    if (rememberedUser) {
        window.location.href = 'dashboard.html'; // redirection automatique
    }
};

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        errorMsg.style.display = 'none';

        // Si "se souvenir de moi" est coché, stocker dans localStorage
        if (rememberMe.checked) {
            localStorage.setItem('dgiUser', username);
        }

        // Animation avant redirection
        loginBtn.textContent = 'Connexion...';
        loginBtn.disabled = true;
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    } else {
        errorMsg.style.display = 'block';
        loginBtn.textContent = 'Se connecter';
        loginBtn.disabled = false;
    }
});

// Soumission avec Entrée
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginBtn.click();
});

