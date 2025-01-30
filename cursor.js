let currentImageIndex = 0;
const images = [
    'Images/Carte_k.jpg',
    'Images/photo_K.jpg'
];

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("photo").src = images[currentImageIndex];
}
