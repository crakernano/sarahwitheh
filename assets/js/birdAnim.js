// const birdFrames = [
//   "assets/img/pajaro/bird1.png",
//   "assets/img/pajaro/bird2.png",
//   "assets/img/pajaro/bird3.png",
//   "assets/img/pajaro/bird4.png",
//   "assets/img/pajaro/bird5.png",
//   "assets/img/pajaro/bird6.png",
//   "assets/img/pajaro/bird7.png",
//   "assets/img/pajaro/bird8.png",
//   "assets/img/pajaro/bird9.png"
// ];

// let currentFrame = 0;
// const birdImg = document.getElementById("bird-anim");

// setInterval(() => {
//   currentFrame = (currentFrame + 1) % birdFrames.length;
//   birdImg.src = birdFrames[currentFrame];
// }, 120); // Cambia el frame cada 120ms (ajusta para la velocidad deseada)

const birdFrames = [
  "assets/img/pajaro/bird1.png",
  "assets/img/pajaro/bird2.png",
  "assets/img/pajaro/bird3.png",
  "assets/img/pajaro/bird4.png",
  "assets/img/pajaro/bird5.png",
  "assets/img/pajaro/bird6.png",
  "assets/img/pajaro/bird7.png",
  "assets/img/pajaro/bird8.png",
  "assets/img/pajaro/bird9.png"
];

let currentFrame = 0;
const birdImg = document.getElementById("bird-anim");
let animInterval = null;
let scrollTimeout = null;

function startBirdAnim() {
  if (!animInterval) {
    animInterval = setInterval(() => {
      currentFrame = (currentFrame + 1) % birdFrames.length;
      birdImg.src = birdFrames[currentFrame];
    }, 120);
  }
}

function stopBirdAnim() {
  clearInterval(animInterval);
  animInterval = null;
}

window.addEventListener("scroll", () => {
  startBirdAnim();
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(stopBirdAnim, 300); // Detiene la animación 300ms después de parar el scroll
});