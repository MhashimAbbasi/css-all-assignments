$(document).ready(function() {
  	$(".carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><span><i class='fa fa-angle-left'></i></span></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><span><i class='fa fa-angle-right'></i></span></button>",
        responsive: [
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,   
                }
            }
        ]
    });


    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = currentYear; 

    $(window).scroll(function(){
        var sticky = $('.header-container'),
        scroll = $(window).scrollTop();

        if (scroll >= 100) {
            sticky.addClass('sticky-header');

        } else {
            sticky.removeClass('sticky-header');
        }

        if (scroll >= 400) {
            $('#scroll-top').show().fadeIn(); 

        } else {
            $('#scroll-top').fadeOut().hide();
        }
    });

    $('#scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });

    // $(".order-btn").hover(
    //   function () {
    //     $(this).addClass('animate__bounce');
    //   }, 
    //   function () {
    //     $(this).removeClass('animate__bounce');
    //   }
    // );
});