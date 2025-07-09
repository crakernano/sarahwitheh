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


  function animateProgressBar(){
    
    const bars = document.querySelectorAll('.progressbar');
    const labelsBar = document.querySelectorAll('.text-end');
    bars.forEach(async (bar, index) => {
      const percentage = bar.getAttribute('data-percentage');
      const fill = bar.querySelector('::before'); // We'll simulate this below
  
      // Create an inner element to animate
      const inner = document.createElement('div');
      inner.style.height = '100%';
      inner.style.width = '0';
      inner.style.backgroundColor = '#C30001';
      //inner.style.borderRadius = '5px';
      inner.style.transition = 'width 2s ease';
      bar.appendChild(inner);      

      // Set delay for each bar
      setTimeout(() => {
        inner.style.width = percentage;
        labelsBar[index].innerHTML = `${percentage}`;
        image.classList.add("animate__fadeIn");
        labelsBar[index].style.opacity = 1;
      }, index * 500); // 500ms delay between bars
    }); 
  }

// async function animateLabelProgressBar(){
//   const timer = ms => new Promise(res => setTimeout(res, ms))
//   const labelsBar = document.querySelectorAll('.text-end');
//   labelsBar.forEach(async (labelBar, index) => {
//     const percentage = labelBar.getAttribute('data-percentage');
//     for (let current_percent = 0; current_percent < percentage; current_percent++) {
//       labelBar.innerHTML = `${percentage}%`;
//       await timer (delay);
//     }
//   });
// }

async function animateLabelProgressBar(delay=5){
  const timer = ms => new Promise(res => setTimeout(res, ms));
  const labelsBar = document.querySelectorAll('.text-end');
  labelsBar.forEach(async (labelBar, index) => {
    const percentage = labelBar.getAttribute('data-percentage');
    for (let current_percent = 0; current_percent < percentage; current_percent++){labelBar.innerHTML = `${current_percent}%`; await timer (delay);}
    setTimeout(() => {}, 500);
  });
}