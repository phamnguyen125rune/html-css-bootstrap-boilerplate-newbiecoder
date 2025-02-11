document.addEventListener('DOMContentLoaded', function () {
    // Delay initialization of Bootstrap Collapse
    setTimeout(function() {
        const searchBtn = document.getElementById('search-btn');
        const searchForm = new bootstrap.Collapse(document.getElementById('searchForm'), {
            toggle: false,
            parent: null
        });

        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            searchForm.toggle();
            if (!searchForm._element.classList.contains('show')) {
                document.querySelector('.header__search-input-field').focus();
            }
        });
    }, 100);

    $("#owl-demo1").owlCarousel({ 
        loop:true,
        margin:20,
        nav:false,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1,
                loop:false
            }
        }
    }); 

    // JavaScript for Header Fixed on Scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) { // Adjust scroll threshold (80px) as needed
            $("#site-header").addClass("nav-fixed"); // Add 'nav-fixed' class to header
        } else {
            $("#site-header").removeClass("nav-fixed"); // Remove 'nav-fixed' class from header
        }
    });
    // JavaScript for Header Darker Background on Mobile Menu Toggle - NEW CODE ADDED
    const navbarToggler = document.querySelector('.navbar-toggler'); // Select navbar toggler button
    const headerElement = document.getElementById('site-header'); // Select header element
    if (navbarToggler && headerElement) { // Check if both elements exist
        navbarToggler.addEventListener('click', function () {
            if (headerElement.classList.contains('nav-active')) {
                headerElement.classList.remove('nav-active'); // Remove 'nav-active' class to hide darker background
            } else {
                headerElement.classList.add('nav-active'); // Add 'nav-active' class to show darker background
            }
        });
    }    
});