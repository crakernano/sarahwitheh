function fliterCategory(branding){
    filters = ["filter-all","filter-design","filter-branding","filter-ux"];
    //Eliminamos la clase "activo de todos los filtros"
    filters.map(function(x) {document.getElementById(x).classList.remove('active');});
    //Añadimos la clase "activo" al filtro en el que se ha heccho clic
    document.getElementById(branding.target.id).classList.add("active");

    //Filtros
    const articles = document.querySelectorAll("[data-groups]");
    
    articles.forEach((article) => {
      if(!article.dataset.groups.includes(`category_${branding.target.id.split("-")[1]}`)){
        article.style.display = "none";
      }else{
        article.style.display = "block";
      }
    });
  }