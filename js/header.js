document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const header = document.getElementById('site-header');
    const controlSearch = document.querySelector('.header-search .control');
    const searchInputContainer = document.querySelector('.search-input');
    const iconCloseSearch = document.querySelector('.header-search .icon-close');
    const body = document.body;
    const checkbox = document.getElementById('checkbox');

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
            body.classList.toggle('noscroll'); // Prevent body scroll when menu is active
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

    // Search Bar Toggle
    if (controlSearch && searchInputContainer && iconCloseSearch) {
        controlSearch.addEventListener('click', function () {
            body.classList.add('search-active');
            searchInputContainer.querySelector('.input-search').focus();
        });

        iconCloseSearch.addEventListener('click', function () {
            body.classList.remove('search-active');
        });
    }

    // Theme Switcher (Dark/Light Mode) - Assuming theme-change.js handles the core logic, just keeping toggle state persistence here
    if (checkbox) {
        checkbox.addEventListener('change', function () {
            // You might want to add logic here to save theme preference to localStorage or cookies if needed
        });
    }
});