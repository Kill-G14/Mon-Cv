const cursor = document.querySelector('.custom-cursor');

// Suivi de la position de la souris
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 20}px`; // Centrer le curseur (ajouter un décalage)
    cursor.style.top = `${e.clientY - 20}px`;  // Centrer le curseur (ajouter un décalage)
});

// Ajouter l'animation lors du clic
document.addEventListener('click', () => {
    cursor.classList.add('attack');
    // Enlever la classe 'attack' après l'animation pour pouvoir la rejouer
    setTimeout(() => {
        cursor.classList.remove('attack');
    }, 200); // La durée de l'animation (200 ms)
});
