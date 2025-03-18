const scrollableDiv = document.querySelector('.competence-section');
const image = document.getElementById('background-competence-img');
var lateral = 0
var lastScrollTop = 0;
window.addEventListener('scroll', function(event) {
  if(window.scrollY > 1600 && window.scrollY < 2000){

    image.style.top  = `${window.scrollY}px`;
    image.style.right = `${lateral}px`;

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      lateral = lateral + 10;
    } else if (st < lastScrollTop) {
      lateral = lateral - 10;
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  }
});