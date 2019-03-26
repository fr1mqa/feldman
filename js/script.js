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
        prevArrow: '.book__navigation-next',
        nextArrow: '.book__navigation-prev',
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

//lazy load
document.addEventListener("DOMContentLoaded", function() {
    let Images= [].slice.call(document.querySelectorAll("img.lazyloading"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting){
                    let Image= entry.target;
                    Image.src = Image.dataset.src;
                    Image.srcset = Image.dataset.srcset;
                    Image.onload = function(){
                        this.classList.remove("lazyloading");
                        delete this.dataset.src;
                        delete this.dataset.srcset;
                    };
                    lazyImageObserver.unobserve(Image);
                }
            });
        });

        Images.forEach(function(Image) {
            lazyImageObserver.observe(Image);
        });
    }
});

