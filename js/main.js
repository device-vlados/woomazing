$(function () {
    $('.header__slider').slick({
        dots: true,
        appendDots: $('.header__dots'),
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
    // $('.team__image-box').slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
        
    // })
    $('.team__slaid-inner').slick({
        arrows: false,
        dots: true,
        appendDots: $('.team__dots'),
        infinite: true,
        speed: 500,
        })
    $('.team__prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slaid-inner').slick('slickPrev')
    })
    $('.team__next').on('click', function (e) {
        e.preventDefault()
        $('.team__slaid-inner').slick('slickNext')
    })
})