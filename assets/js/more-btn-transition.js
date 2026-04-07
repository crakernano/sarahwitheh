/**
 * More Button Smooth Transitions - ENFOQUE HÍBRIDO
 * CSS maneja el hover normal, JavaScript solo añade la transición de salida
 */

document.addEventListener('DOMContentLoaded', function() {
    const moreButtons = document.querySelectorAll('.more-btn');
    
    moreButtons.forEach((button, index) => {
        let exitTimeout = null;
        
        button.addEventListener('mouseleave', function() {
            // Limpiar timeout anterior si existe
            if (exitTimeout) {
                clearTimeout(exitTimeout);
            }
            
            // Añadir clase para transición de salida
            this.classList.add('smooth-exit');
            
            // Remover la clase después de la transición
            exitTimeout = setTimeout(() => {
                this.classList.remove('smooth-exit');
            }, 400);
        });
        
        button.addEventListener('mouseenter', function() {
            // Limpiar timeout y clase si se interrumpe
            if (exitTimeout) {
                clearTimeout(exitTimeout);
                exitTimeout = null;
            }
            this.classList.remove('smooth-exit');
        });
    });
});