$(document).ready(function() {
    var _w = $(window).width();
    // Masked input
    $('.phone-input').mask('+7 (999) 999-9999');

    $('.phone-input')
        .on('focus', function () {
            $parent = $(this).parent('.phone-tab');
            $('input[type="submit"]',$parent).fadeIn();
        })
        .on('focusout', function () {
            if($(this).val() == "+7 (___) ___-____") {
                $parent = $(this).parent('.phone-tab');
                $('input[type="submit"]', $parent).fadeOut();
            }
        });
})

