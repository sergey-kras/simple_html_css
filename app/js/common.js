$('.more').on('click',function () {
    var textBlock = $(this).parent().find('p');
    var more = $(this);
    if(more.hasClass('_small')){
        textBlock.css({
            'height':'auto'
        });
        more.css({
            'transform':'rotate(-45deg)'
        });
        more.removeClass('_small');
        more.addClass('_big')
    }
    else {
        textBlock.css({
            'height':'150px'
        });
        more.css({
            'transform':'rotate(135deg)'
        });
        more.removeClass('_big');
        more.addClass('_small')
    }
});


$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top }, 800);
    return false;
});
$('body').on('mousemove',function (e) {
    var block = $('.main');
    var width = block.width();
    var height = block.height();
    var xPosition = e.pageX;
    var yPosition = e.pageY;
    block.css({
        'background-position-x': width  / 2 * 0.1 -  width * 0.07  - xPosition * 0.07,
        'background-position-y': height / 2 * 0.1 - height * 0.07 - yPosition * 0.07
    })
});
function checkPosition() {
    var height = $('.main .city').height();
    $('.main .container').css({
        'bottom' : height * 0.827 - 60 - 50 - $('.main__text').height() - $('.main__toBottom').height()
    });
}
checkPosition();
setInterval(checkPosition(),1);

var $win = $(window);
var $block = $('.products__product');
$win.scroll(function() {
    for (var $i = 0; $i < $block.length ; $i++) {
        if ($win.scrollTop() + $win.height() >= $($block[$i]).offset().top + 60) {
            $($block[$i]).animate({'margin-top': 30 + 'px', 'opacity': 1}, 500);
        }
    }
});



// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.container__works').isotope({
    itemSelector: '.works__item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});


$(window).on('load', function() {
    $('.peopleSlider').addClass('owl-carousel');
    $('.peopleSlider').owlCarousel({
        nav: true,
        items: 4,
        loop: true,
        navText:['<img src="./img/mainDisplay/contentElements/slidearrow.svg">','<img src="./img/mainDisplay/contentElements/slidearrow.svg">']
    });
});

