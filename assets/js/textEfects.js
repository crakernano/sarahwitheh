var speed = 100;
const WAI = ["Soy directora de arte.", "Soy creativa digital.", "Soy creadora de marcas."];

for (let i = 0; i < WAI.length; i++) {console.log(WAI[i]);}

async function typeWriter() {
  document.getElementById("WIA-display").innerHTML = "";
  const timer = ms => new Promise(res => setTimeout(res, ms))
  for (let i = 0; i < WAI.length; i++) {
    var txt = WAI[i]
    for (let l = 0; l < txt.length; l++) {document.getElementById("WIA-display").innerHTML += txt.charAt(l); await timer(speed);}
    await timer (200);
    for (let l = txt.length; l > -1; l--) {document.getElementById("WIA-display").innerHTML = txt.slice(0,l);await timer(speed);}
    await timer (200);
  }
  document.getElementById("WIA-display").innerHTML = WAI[0];

}
