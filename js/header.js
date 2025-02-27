document.addEventListener('DOMContentLoaded', function () {
    //nav-bar active item
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('#primary-menu .nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        const normalizedCurrentPath = currentPage.endsWith('/') ? currentPage.slice(0, -1) : currentPage;
        const normalizedLinkPath = linkPath.endsWith('/') ? linkPath.slice(0, -1) : linkPath;

        if (normalizedCurrentPath === normalizedLinkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });



    // Mobile Menu Toggle
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            header.classList.toggle('active');
            body.classList.toggle('noscroll');
        });
    }

    // Sticky Header on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 80) {
            header.classList.add("nav-fixed");
        } else {
            header.classList.remove("nav-fixed");
        }
    });
});