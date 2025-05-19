const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img/bunny.jpeg", "img/japan.jpeg", "img/pink.webp", "img/sunflower.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    image.src = randomImage;
    console.log("New image", randomImage);
}