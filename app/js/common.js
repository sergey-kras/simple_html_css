$(window).on('load', function() {
    $('.fullscreenSlider').owlCarousel({
        items: 1,
        pullDrag: false,
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        responsiveRefreshRate: 0,
        autoplay:true,
        autoplayTimeout:5000,
    });
});

