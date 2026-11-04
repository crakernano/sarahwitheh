function calcularExperiencia(fecha) {
    var hoy = new Date();
    var inicio = new Date(fecha);
    var experiencia = hoy.getFullYear() - inicio.getFullYear();
    var m = hoy.getMonth() - inicio.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < inicio.getDate())) {
        experiencia--;
    }

    return experiencia;
}

//FIXME: Problemas de visualización aleatorios por concurrencia en la ejecución
/*
async function number_counter($num = 0, $canvan_id, delay=200){        
  const timer = ms => new Promise(res => setTimeout(res, ms))
  document.getElementById($canvan_id).innerHTML = "+" + $num;
  for (let current_number = 0; current_number < $num; current_number++) {
    document.getElementById($canvan_id).innerHTML = "+" + current_number;
    await timer (delay);
  }
}

*/

/**
 * Esta versión corrige el error concurrencia que tenia la versión anterior
 */
const activeCounters = new Set();

async function number_counter(target = 0, elementId, delay = 200) {
  const element = document.getElementById(elementId);
  const max = Math.floor(Number(target));

  if (!element || !Number.isFinite(max) || activeCounters.has(elementId)) {
    return;
  }

  activeCounters.add(elementId);

  try {
    for (let current = 0; current <= max; current++) {
      element.textContent = `+${current}`;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  } finally {
    element.textContent = `+${max}`;
    activeCounters.delete(elementId);
  }
}