let allProjects = [];
let mobileSwiper = null;

async function loadProjectsData() {
  try {
    const resp = await fetch('./assets/js/projects.json');
    allProjects = await resp.json();
  } catch (e) {
    console.error('Error loading projects.json', e);
    allProjects = [];
  }
}

function renderMobileCarousel(filterGroup = 'category_all'){
  const container = document.getElementById('projects-container-mobile');
  if(!container) return;

  const filtered = allProjects.filter(p => filterGroup === 'category_all' ? true : p.categories.includes(filterGroup));

  const slides = filtered.map(p => {
    return `
      <div class="swiper-slide">
        <div class="card project-card">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <div class="more-btn-container"><a class="more-btn" href="${p.href}">Saber más</a></div>
            <img src="${p.img}" class="card-img-top" loading="lazy" alt="${p.title}">
          </div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="swiper mobile-projects-swiper">
      <div class="swiper-wrapper">
        ${slides}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>`;

  // Initialize or update Swiper
  const swiperEl = container.querySelector('.mobile-projects-swiper');
  if (!swiperEl) return;

  if(mobileSwiper){
    mobileSwiper.update();
    mobileSwiper.slideTo(0);
  } else {
    mobileSwiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 12,
      centeredSlides: false,
      loop: false,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadProjectsData();
  renderMobileCarousel();
});

// Listen filter events dispatched by filters.js
document.addEventListener('portfolio-filter-changed', (e) => {
  const group = (e && e.detail && e.detail.group) ? e.detail.group : 'category_all';
  renderMobileCarousel(group);
});
