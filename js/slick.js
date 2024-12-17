$(".home-index-slider").slick({
    dots: !1,
    fade: !0,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 600,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1
        }
    }]
}),
$(".page-slider").slick({
    dots: !1,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 900,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
}),
$(".blog-slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 800,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1
        }
    }]
}),
$(".testimonial-slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !0,
    arrows: !0,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: !1,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}),
$(".service-slider").slick({
    dots: !1,
    infinite: !0,
    autoplay: !1,
    margin: 20,
    arrows: !0,
    speed: 800,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}),
$(".brand-slider").slick({
    dots: !1,
    infinite: !1,
    autoplay: !0,
    arrows: !0,
    lazyLoad: "ondemand",
    speed: 800,
    prevArrow: '<i class="bi-arrow-left dandik"></i>',
    nextArrow: '<i class="bi-arrow-right bamdik"></i>',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 6
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}),
$(".text-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false,
    dots: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 6, slidesToScroll: 6 } },
    { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
});
