const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);
