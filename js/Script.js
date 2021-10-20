var smoothJumpUp = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 10);
    }
}

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.getElementById('upbutton').style.display = 'block';
    }
    else {
        document.getElementById('upbutton').style.display = 'none';
    }
}
function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");




    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читати більше";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Згорнути";
        moreText.style.display = "inline";
    }
}

$(function () {
    $('.minimized').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});

$(".btnJquery").on('click', function () {
    $(".jqueryHide").toggle();
})




/* Slider*/


$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        centerMode: true,


        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    fade: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    fade: true,

                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    fade: true,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider_2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider_3').slick({
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        centerMode: false,
        rows: 2,


        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    autoplay: false,
                    fade: false,
                    rows: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    fade: true,
                    rows: 5,
                    arrows: false,

                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    fade: true,
                    rows: 5,
                    arrows: false,
                }
            }
        ]
    });
});


/* End Slider*/