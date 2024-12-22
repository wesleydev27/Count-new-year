function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2025 00:00:00');
    const diff = newYear - now;

    if (diff <= 0) {
        // Chegou 2025!
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('celebration').style.display = 'block';
        document.querySelector('.title').textContent = 'FELIZ 2025!';
        // Aumentar a frequência das partículas para a celebração
        createParticles(50); // Mais partículas para celebração
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function createParticles(amount = 20) {
    const container = document.querySelector('.countdown-container');
    for (let i = 0; i < amount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const x = Math.random() * 400 - 200;
        const y = Math.random() * 400 - 200;

        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = `${200 + x}px`;
        particle.style.top = `${200 + y}px`;

        container.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

setInterval(createParticles, 500);
setInterval(updateCountdown, 1000);
updateCountdown();
