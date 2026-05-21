let scores = {
    home: 0,
    guest: 0
};

// Initialize display
document.getElementById('home-score').textContent = scores.home;
document.getElementById('guest-score').textContent = scores.guest;

function addScore(team, amount) {
    if (team === 'home') {
        scores.home += amount;
        document.getElementById('home-score').textContent = scores.home;
    } else if (team === 'guest') {
        scores.guest += amount;
        document.getElementById('guest-score').textContent = scores.guest;
    }
}

function resetGame() {
    scores.home = 0;
    scores.guest = 0;
    document.getElementById('home-score').textContent = 0;
    document.getElementById('guest-score').textContent = 0;
}
