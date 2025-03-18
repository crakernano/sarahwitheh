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

async function number_counter($num = 0, $canvan_id, delay=200){        
  const timer = ms => new Promise(res => setTimeout(res, ms))
  document.getElementById($canvan_id).innerHTML = "+" + $num;
  for (let current_number = 0; current_number < $num; current_number++) {
    document.getElementById($canvan_id).innerHTML = "+" + current_number;
    await timer (delay);
  }
}