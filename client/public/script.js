/*global $, document, window, jQuery, changeColOrder*/
$(document).ready(function () {

    'use strict';
    // ------------------------------------------------------- //
    // Items Carousel
    // ------------------------------------------------------ //
    $('.item-slider').owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        dots: true,
        responsiveClass: false
    });


    // ------------------------------------------------------- //
    // Hero 1 Carousel
    // ------------------------------------------------------ //
    $('.hero-1-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplaySpeed: 1000,
        dotsSpeed: 1000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: false
    });


    // ------------------------------------------------------- //
    // Hweo 2 Carousel
    // ------------------------------------------------------ //
    $('.hero-2-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: false
    });

});