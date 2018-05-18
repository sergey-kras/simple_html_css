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
var blockMenu = $('.menu');
var content = $('.content');
$win.scroll(function() {
    if ($win.scrollTop()  >= content.offset().top) {
        blockMenu.css({position : 'fixed'})
    }
    else {
        blockMenu.css({position : 'absolute'})
    }
});


var burger = $('.menu__burger');
var fade = $('.fade');
var left = $('.content .container').offset().left - 15;
var menu = $('.menu__nav');
var menuFooter = $('.menu__footer');
burger.css({'margin-left':left});

burger.on('click',function(){
    if(burger.hasClass('active')){
        hideMenu()
    }
    else{
        showMenu();
    }
});
var deleyForBlockMenu;
var deleyForAll = 400;
if (left <= 300){
    deleyForBlockMenu = 400;
}
else {
    deleyForBlockMenu = 0;
}
function hideMenu() {
    burger.animate({'margin-left':left},deleyForAll).removeClass('active');
    menu.animate({'margin-left':-100,'opacity':0},deleyForAll, function () {
        menu.css({display:'none'})
    });
    menuFooter.animate({'margin-left':-100,'opacity':0},deleyForAll, function () {
        menuFooter.css({display:'none'})
    });
    if (left <= 300){
        blockMenu.animate({width:0,maxWidth:0,minWidth: 0},deleyForBlockMenu);
    }
    fade.fadeOut(deleyForAll);
}
function showMenu() {
    burger.animate({'margin-left':20},deleyForAll).addClass('active');
    menu.css({display:'flex'}).animate({'margin-left':0,'opacity':1},deleyForAll);
    menuFooter.css({display:'flex'}).animate({'margin-left':0,'opacity':1},deleyForAll);
    blockMenu.animate({width:left+40,maxWidth:left+40,minWidth: 300+'px'},deleyForBlockMenu);
    fade.fadeIn(deleyForAll);
}
fade.on('click',function(){
    console.log(1);
    hideMenu();
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
    $('.fs-slides').owlCarousel({
        items: 1,
        pullDrag: false,
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        responsiveRefreshRate: 0,
    });
});

