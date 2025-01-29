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


//const cursor = document.querySelector('.custom-cursor');

document.body.style.cursor = "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/external-sword-game-development-xnimrodx-lineal-color-xnimrodx.png";

const elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/external-sword-game-development-xnimrodx-lineal-color-xnimrodx.png'), auto";
/*
document.addEventListener('mousemove', (e) => {
    console.log(y: ${e.clientY});
    cursor.style.left = ${e.clientX}px;
    cursor.style.top = ${e.clientY}px;
});
*/


document.addEventListener('click', () => {
    elementToChange.classList.add('attack');

    setTimeout(() => {
        elementToChange.classList.remove('attack');
    }, 150);
});