$(function() {
    $('html, body').animate({
        width: '+=0.0001%'
    }, 100);
    $('html, body').animate({
        width: '100%'
    }, 100);

    $('a').click(function() {
        let scrollElem = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(scrollElem).offset().top
        }, 1000);
    });
    //owl carousel
    $(".partners .owl-carousel").owlCarousel({
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            400:{
                items:3,
            },
            600:{
                items:4,
            },
            800:{
                items:5,
            },
            1000:{
                items:6,
            }
        }
    });

    


    $(".blog .owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: true,
        responsiveClass:true,
        margin: 10,
        dotsData: true,
        responsive:{
            0:{
                stagePadding: 0,
                items:1,
            },
            800:{
                items:2,
            },
            1150:{
                items:3,
            }
        }
    });
    //=============

    //"work" categories
    $('.work__item').click(function() {
        $('.work__item a').removeClass('active');
        $(this).find('a').addClass('active');

        $('.work__wrapper').hide();

        if ($(this).find('a').text() == 'ALL') {
            $('.work__wrapper').show();
            $('.work__works').css('display', '');
        } else {
            $('.work__works').css({
                'display': 'flex',
                'flex-wrap': 'wrap',
                'justify-content': 'center'
            });
            $(`.${$(this).find('a').text()}`).show();
        }
    });
    //====================
});