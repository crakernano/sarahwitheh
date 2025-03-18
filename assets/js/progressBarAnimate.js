async function progressAnimate($percentMax = 100, progressBarNumber, delay=200){        
    const timer = ms => new Promise(res => setTimeout(res, ms))
    const elemento = document.getElementById(`progress-bar-${progressBarNumber}`);
    const etiqueta = document.getElementById(`progress-label-${progressBarNumber}`);

    for (let current_percent = 0; current_percent < $percentMax; current_percent++) {
      elemento.style.setProperty("width", `${current_percent}%`);
      etiqueta.innerHTML = `${current_percent - 9}%`;
      await timer (delay);
    }
  }