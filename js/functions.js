$(document).ready(function () {





    // check if element is visible after scrolling
    $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    var viewport = true;

    $(window).on('resize scroll', function() {

        if ($('.zone5 .fiscale').isInViewport() && viewport === true) {
            viewport = false;
            $('.zone5 .fiscale .circle').css('animation', 'progress 1s ease-out forwards');
        }
    });





    
    // if ($(window).width() < 767){
    //     function checkOffset_iphone_bot_scroll() {
    //         if($('.zone4').offset().top + $('.zone4').height() >= $('.zone3').offset().top - 10)
    //             {
    //                 $('.zone4').css('display', 'block');
    //             }
    //         if($(document).scrollTop() + window.innerHeight < $('.zone3').offset().top)
    //             {
    //                 $('.zone4').css('display', 'none'); // restore when you scroll up
    //             }
    //     }

    //     $(document).scroll(function() {
    //         checkOffset_iphone_bot_scroll();
    //     });
    // }



    
    function checkOffset_for_fixed_zone4() {
        if($('.zone4').offset().top + $('.zone4').height() >= $('.zone5').offset().top - 10)
            {
                $('.zone4').css('position', 'relative');
            }
        if($(document).scrollTop() + window.innerHeight < $('.zone5').offset().top)
            {
                $('.zone4').css('position', 'fixed'); // restore when you scroll up
            }
    }

    $(document).scroll(function() {
        checkOffset_for_fixed_zone4();
    });


});



