$(document).ready(function(){
    //smooth scroll
    $(".navigation__item").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    // articles slider
    $('.articles__list').slick({
        infinite: true,
        prevArrow: '.articles__button-prev',
        nextArrow: '.articles__button-next',
    });
    // books slider
    $('.book__list').slick({
        infinite: true,
        prevArrow: '.book__navigation-prev',
        nextArrow: '.book__navigation-next',
        asNavFor: '.bookshelf__image-list',
    });
    //books__image slider
    $('.bookshelf__image-list').slick({
        infinite: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
    });
});
