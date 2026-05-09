function fliterCategory(branding){
    filters = ["filter-all","filter-design","filter-branding","filter-ux"];
    //Eliminamos la clase "activo de todos los filtros"
    filters.map(function(x) {document.getElementById(x).classList.remove('button-red');});
    //Añadimos la clase "activo" al filtro en el que se ha heccho clic
    document.getElementById(branding.target.id).classList.add("button-red");

    //Filtros
    const articles = document.querySelectorAll("[data-groups]");
    
    articles.forEach((article) => {
      if(!article.dataset.groups.includes(`category_${branding.target.id.split("-")[1]}`)){
        article.style.display = "none";
      }else{
        article.style.display = "block";
      }
    });
    // Emitir evento para listeners externos (p.ej. carrusel móvil)
    try {
      const selectedGroup = `category_${branding.target.id.split("-")[1]}`;
      document.dispatchEvent(new CustomEvent('portfolio-filter-changed', { detail: { group: selectedGroup } }));
    } catch (e) {
      console.warn('Error dispatching portfolio-filter-changed', e);
    }
  }