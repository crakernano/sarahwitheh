const scrollableDiv = document.querySelector('.competence-section');
const image = document.getElementById('background-competence-img');
// var lateral = 0
// var lastScrollTop = 0;
// window.addEventListener('scroll', function(event) {
//   if(window.scrollY > 1600 && window.scrollY < 2000){

//     image.style.top  = `${window.scrollY}px`;
//     image.style.right = `${lateral}px`;

//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop) {
//       if(lateral < this.window.innerWidth){lateral = lateral + (window.scrollY * 0.1);}
//     } else if (st < lastScrollTop) {
//       if(lateral > 0){lateral = lateral - (window.scrollY * 0.1);}
//     }
//     lastScrollTop = st <= 0 ? 0 : st; 
//   }
// });

// ---------------------------------------------------------------------------------------------------------------------------------------------

// function moveBird(){
//   const scrollableDiv = document.querySelector('.competence-section');
//   const image = document.getElementById('background-competence-img');

//   var lastScrollTop = 0;

//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   image.style.top  = `${window.scrollY}px`;
//   if (st > lastScrollTop) {
//     console.log("Subiendo");
//   } else if (st < lastScrollTop) {
//     console.log("Bajando");
//   }
//   lastScrollTop = st <= 0 ? 0 : st; 
// }

let lastScrollTop = 0;
let isAnimating = false;

window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  // Solo activa si no está ya animando
  if (!isAnimating && Math.abs(st - lastScrollTop) > 50) {
    triggerFly();
    lastScrollTop = st <= 0 ? 0 : st;
  }
});

function triggerFly() {
  //const img = document.getElementById("flyImage");
  isAnimating = true;
  image.classList.add("animate");

  setTimeout(() => {
    image.classList.remove("animate");
    isAnimating = false;
  }, 3000); // Duración de la animación
}