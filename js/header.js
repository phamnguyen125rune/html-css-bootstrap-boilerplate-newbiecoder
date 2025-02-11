document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');

    if (darkModeSwitch) {
        darkModeSwitch.addEventListener('change', function (e) {
            console.log("Theme switch clicked!"); 
            if (e.target.checked) {
                console.log("Dark mode enabled"); 
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled'); 
            } else {
                console.log("Light mode enabled"); 
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled'); 
            }
        });

        if (localStorage.getItem('darkMode') === 'enabled') {
            console.log("Dark mode was enabled in localStorage, applying dark mode on load"); 
            darkModeSwitch.checked = true;
            document.body.classList.add('dark-mode');
        } else {
            console.log("Dark mode was NOT enabled in localStorage, applying light mode on load"); 
        }
    } else {
        console.log("darkModeSwitch element NOT FOUND!");
    }

    // 2. Search Functionality 
    const searchControl = document.querySelector('.header__search-control');
    const searchElement = document.querySelector('.header__search');
    const searchCloseIcon = document.querySelector('.header__search-close-icon');

    if (searchControl && searchElement && searchCloseIcon) {
        searchControl.addEventListener('click', function () {
            searchElement.classList.add('active');
            document.body.classList.add('search-active');
            const inputSearch = searchElement.querySelector('.header__search-input-field');
            if (inputSearch) {
                inputSearch.focus();
            }
        });

        searchCloseIcon.addEventListener('click', function () {
            searchElement.classList.remove('active');
            document.body.classList.remove('search-active');
        });
    }

    // 3. Header Menu Toggle Functionality (Mobile Menu - Vanilla JS) 
    const toggler = document.querySelector('.header__nav-toggler');
    const navbarContent = document.getElementById('headerNavbarContent');
    const headerContainer = document.querySelector('.header__container'); 

    if (toggler && navbarContent && headerContainer) {
        toggler.addEventListener('click', function() {
            const isExpanded = navbarContent.classList.contains('show');

            if (isExpanded) {
                navbarContent.classList.remove('show'); 
                headerContainer.classList.remove('menu-open');
                headerContainer.style.backgroundColor = '';
                toggler.setAttribute('aria-expanded', 'false'); 
            } else {
                navbarContent.classList.add('show');
                headerContainer.classList.add('menu-open'); 
                headerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
                toggler.setAttribute('aria-expanded', 'true'); 
            }
        });
    } else {
        console.log("Toggler, navbarContent, or headerContainer element NOT FOUND for Mobile Menu!"); 
    }


    // ** 4. Header Fixed on Scroll Functionality (jQuery) **
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });
});