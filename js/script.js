$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut(); // body...
});

$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*======================
PROGRESS BARS
 ======================*/
$(function() {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/*======================
responsive tabs
 ======================*/
$(function() {
    $("#services-tabs").responsiveTabs({});
});
/*======================
portfolio
 ======================*/

$(window).on('load', function() {
    // init Isotope
    $('#isotope-container').isotope({
        // options
    });
    $('#isotope-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });
        // active class
        $('#isotope-filters').find('.active ').removeclass('active');
        $(this).addclass('active');
    });
});
/*======================
magnefic popup
 ======================*/
// $(function() {
//     $("#portfolio").magnificPopup({
//         delegate: 'a', // child items selector, by clicking on it popup will open
//         type: 'image',
//         gallery:{
//         	enabled:true
//         }
//         // other options
//     });
// });
/*======================
testimonial
 ======================*/
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*======================
COUNTER
 ======================*/
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
/*======================
Client
 ======================*/
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
$(function() {
    new WOW().init();
});