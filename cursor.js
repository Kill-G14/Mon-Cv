const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 0}px`;
    cursor.style.top = `${e.clientY - 0}px`;
});

document.addEventListener('click', () => {
    cursor.classList.add('attack');

    setTimeout(() => {
        cursor.classList.remove('attack');
    }, 150);
});
