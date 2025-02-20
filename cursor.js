let currentImageIndex = 0;
const images = ["Images/molgo.jpg", "Images/killianGodmont.jpg"];

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("photo").src = images[currentImageIndex];
}

let cursor = document.createElement("div");
cursor.classList.add("cursor-animation");
document.body.appendChild(cursor);

document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});

document.body.addEventListener("click", function () {
  cursor.classList.add("cursor-swing");

  setTimeout(function () {
    cursor.classList.remove("cursor-swing");
  }, 300);
});
