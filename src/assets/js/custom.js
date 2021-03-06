$(document).ready(function () {
    'use strict';

    /*-----------------------------------------------------
    Navbar Toggle for Mobile
    ------------------------------------------------------*/
    function navbarCollapse() {
        if ($(window).width() < 992) {
            $(document).on('click', function (event) {
                var clickover = $(event.target);
                var _opened = $("#main-nav-collapse").hasClass("in");
                if (_opened === true && !(clickover.is('.dropdown, #main-nav-collapse input, #main-nav-collapse button, #main-nav-collapse .fa, #main-nav-collapse select'))) {
                    $("button.navbar-toggle").trigger('click');
                }
            });

            $('.dropdown').unbind('click');
            $('.dropdown').on('click', function () {
                $(this).children('.dropdown-menu').slideToggle();
            });
        }
    }
    navbarCollapse();

    /*-----------------------------------------
    Mobile dropdown toggle
    -----------------------------------------*/
    function dropdownToggle() {
        if ($(window).width() < 992) {
            $('.navbar-toggle').css('display', 'block');
            $('.navbar-collapse').css('display', 'none');

            $('.dropdown').unbind('click');

            $('.dropdown').on('click', function (dd) {
                dd.stopPropagation();
                $(this).children('.dropdown-menu').slideToggle();
            });
        } else {
            $('.navbar-toggle').css('display', 'none');
            $('.navbar-collapse').css('display', 'block');
        }
    }

    dropdownToggle();

    /*-----------------------------------------
    Header Slider 
    -----------------------------------------*/
    $('#banner-slider').owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        pagination: true,
        paginationNumbers: true,
    });

    /*-----------------------------------------
    Video Carousel 
    -----------------------------------------*/
    $('.video-carousel').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 3],
        itemsMobile: [479, 1],
        slideSpeed: 200,
        navigation: true,
        navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
        pagination: false,
    });

    /*-----------------------------------------
    Single Gallery Slider
    -----------------------------------------*/
    $('.single-gallery-slider').owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
        pagination: false,
    });

    /*-----------------------------------------
    Magnific Popup
    -----------------------------------------*/
    $('.image-large').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.play-video').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /*-----------------------------------------
    All window event
    -----------------------------------------*/
    $(window).on('resize orientationchange', function () {
        dropdownToggle();
        navbarCollapse();
    });
});

/*-----------------------------------------
Preloader
-----------------------------------------*/
$(window).on('load', function () {
    $('#preloader').fadeOut('slow');
});
