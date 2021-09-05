const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
];

const choseImage = images[Math.floor(Math.random() * images.length)];
const backImage = document.createElement("img");
backImage.classList.add("backimg");

backImage.src=`img/${choseImage}`;

document.body.appendChild(backImage);
