var speed = 100;
const WAI = ["Soy directora de arte.", "Soy creativa digital.", "Soy creadora de marcas."];

// !FIXME:Esta versión tiene un bug, no controla la concurrencia y varias instancias corriendo a la vez sobre el mismo espacio produce mensajes aleatorios
// async function typeWriter() {
//   document.getElementById("WIA-display").innerHTML = "";
//   const timer = ms => new Promise(res => setTimeout(res, ms))
//   for (let i = 0; i < WAI.length; i++) {
//     var txt = WAI[i]
//     for (let l = 0; l < txt.length; l++) {document.getElementById("WIA-display").innerHTML += txt.charAt(l); await timer(speed);}
//     await timer (200);
//     for (let l = txt.length; l > -1; l--) {document.getElementById("WIA-display").innerHTML = txt.slice(0,l);await timer(speed);}
//     await timer (200);
//   }
//   document.getElementById("WIA-display").innerHTML = WAI[0];

// }


/**
 * Esta versión evita la concurrencia que producia mensajes aparentemente erraticos y aleatorios
 * 
 */
let isTyping = false;

async function typeWriter() {
  const display = document.getElementById("WIA-display");

  if (!display || isTyping) return;
  isTyping = true;

  const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

  try {
    display.textContent = "";

    for (const txt of WAI) {
      for (let l = 0; l < txt.length; l++) {
        display.textContent += txt.charAt(l);
        await timer(speed);
      }

      await timer(200);

      for (let l = txt.length; l >= 0; l--) {
        display.textContent = txt.slice(0, l);
        await timer(speed);
      }

      await timer(200);
    }

    display.textContent = WAI[0];
  } finally {
    isTyping = false;
  }
}