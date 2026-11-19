const menuToggle = document.querySelector('.navbar-toggler[aria-controls="navbarNavAltMarkup"]');
const mobileMenu = document.getElementById('navbarNavAltMarkup');

if (menuToggle && mobileMenu) {
    const setMenuOpen = (isOpen) => {
        mobileMenu.classList.toggle('is-open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', () => {
        setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileMenu.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a')) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    window.matchMedia('(min-width: 992px)').addEventListener('change', (event) => {
        if (event.matches) {
            setMenuOpen(false);
        }
    });
}
