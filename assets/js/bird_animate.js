//<canvas id="bird" width="200" height="200"></canvas>
const canvas = document.getElementById("bird");
const ctx = canvas.getContext("2d");
const sprite = new Image();
sprite.src = "spritesheet.png";

const frameWidth = 200;
const frameHeight = 200;
const totalFrames = 6;
let currentFrame = 0;

function animate() {
  ctx.clearRect(0, 0, frameWidth, frameHeight);
  ctx.drawImage(
    sprite,
    currentFrame * frameWidth, 0,  // posición en el spritesheet
    frameWidth, frameHeight,       // tamaño del frame
    0, 0, frameWidth, frameHeight  // posición en canvas
  );
  currentFrame = (currentFrame + 1) % totalFrames;
  setTimeout(animate, 100); // 100ms = 10 fps (ajusta velocidad aquí)
}

sprite.onload = animate;

