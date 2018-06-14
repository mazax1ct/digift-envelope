
$(document).ready(function () {
    var _w = $(window).width();
    if(_w<991) {

        $('.open-btn img').click(function () {
            $(this).fadeOut();
            startAnimation();
        });
    }
    else
    {
        myHandler();
    }
    function startAnimation() {


        // 1. Show back of envelope smoothly
        setTimeout(
            function () {
                // 1.1 Hide front envelope


                    // 2. Move envelope down
                    var envHeight = $('#envelope-front').height();
                    var downHeight = parseInt(envHeight * 0.67);

                    var $elem = $('.envelop-rotate');

                    $({deg: 0}).animate({deg: 90}, {
                        duration: 400,
                        step: function (now) {

                            $elem.css({
                                transform: 'rotateX(' + now + 'deg)'
                            });
                        },
                        complete: function () {
                            $('#envelope-back').addClass('envelope--open');
                            $({deg: 90}).animate({deg: 180}, {
                                duration: 400,
                                step: function (now) {

                                    $elem.css({
                                        transform: 'rotateX(' + now + 'deg)'
                                    });
                                },
                                complete: function () {
                                    setTimeout(function () {
                                        $('.envelope-flaps').css('z-index', '5');
                                        $('#gift-card').css('overflow', 'visible').css('z-index', '4')
                                    });
                                    $('#gift-card').animate(

                                        {top: '-500px'}
                                    );
                                    $('.envelope-flaps, .envelop-rotate').animate(
                                        // { top: '-' + (downHeight + additional) + 'px' },
                                        {
                                            top: '300px',
                                            opacity: 0
                                        }, 1000
                                    )
                                }
                            });
                        }
                    });


                    //
                    $('#envelope-back').animate(
                        {top: 500 + 'px'}, 1000
                    );



            },
            200
        );

    }


// document.getElementById('video').addEventListener('ended', myHandler, false);



function myHandler(e) {

    // What you want to do after the event
    // $("#video").hide();
    $(".animation-block").show();
    $('.open-btn img').click(function () {
        startAnimation();
        $(this).fadeOut();
    });


    function startAnimation() {


        // 1. Show back of envelope smoothly
        setTimeout(
            function () {
                    // 2. Move envelope down
                    var envHeight = $('#envelope-front').height();
                    var downHeight = parseInt(envHeight * 0.67);





                            // 3. Hide flap-up
                            // $('#envelope-back').removeClass('envelope--close');
                            // $('#envelope-back').addClass('envelope--open');
                            var $elem = $('.envelop-rotate');

                            $({deg: 0}).animate({deg: 90}, {
                                duration: 400,
                                step: function (now) {
                                    // in the step-callback (that is fired each step of the animation),
                                    // you can use the `now` paramter which contains the current
                                    // animation-position (`0` up to `angle`)
                                    $elem.css({
                                        transform: 'rotateX(' + now + 'deg)'
                                    });
                                },
                                complete: function () {
                                    $('#envelope-back').addClass('envelope--open');
                                    $({deg: 90}).animate({deg: 180}, {
                                        duration: 400,
                                        step: function (now) {
                                            // in the step-callback (that is fired each step of the animation),
                                            // you can use the `now` paramter which contains the current
                                            // animation-position (`0` up to `angle`)
                                            $elem.css({
                                                transform: 'rotateX(' + now + 'deg)'
                                            });
                                        },
                                        complete: function () {
                                            setTimeout(function () {
                                                $('.envelope-flaps').css('z-index', '5');
                                                $('#gift-card').css('overflow', 'visible').css('z-index', '4')
                                            });
                                            $('#gift-card').animate(
                                                // { top: '-' + (downHeight + additional) + 'px' },
                                                {top: '-450px'}
                                            );
                                            $('.envelope-flaps, .envelop-rotate').animate(
                                                // { top: '-' + (downHeight + additional) + 'px' },
                                                {
                                                    top: '500px',
                                                    opacity: 0
                                                }, 500
                                            )
                                        }
                                    });
                                }
                            });


                            //
                            $('#envelope-back').animate(
                                {top: 500 + 'px'}, 1000
                            );

            },
            200
        );
    }
}

});

