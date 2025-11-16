// Simuler des utilisateurs (pour prototype)
const users = [
    { username: 'eddy', password: 'dgi123' },
    { username: 'david', password: 'dgi456' }
];

const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');
const rememberMe = document.getElementById('rememberMe');
const loginContainer = document.querySelector('.login-container');

// Redirection automatique si "Se souvenir de moi" est activé
window.onload = () => {
    const rememberedUser = localStorage.getItem('dgiUser');
    if (rememberedUser) {
        window.location.href = 'index.html';
    }
};

// Fonction de connexion
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        errorMsg.style.display = 'none';

        // Stocker dans localStorage si "Se souvenir de moi"
        if (rememberMe.checked) {
            localStorage.setItem('dgiUser', username);
        }

        // Animation fade-out avant redirection
        loginContainer.classList.add('fade-out');
        loginBtn.textContent = 'Connexion...';
        loginBtn.disabled = true;

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800); // durée de l'animation
    } else {
        errorMsg.style.display = 'block';
        loginBtn.textContent = 'Se connecter';
        loginBtn.disabled = false;
    }
}

// Événement clic sur bouton
loginBtn.addEventListener('click', login);

// Soumission avec Entrée
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
});
