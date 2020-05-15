/** First Slider*/
$('.slider-one')
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

/** Second Slider*/
$('.slider-two')
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-two .slider-btn .prev",
    nextArrow:".site-slider-two .slider-btn .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000
});

/** Third Slider*/
$('.slider-three')
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-three .slider-btn .prev",
    nextArrow:".site-slider-three .slider-btn .next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:300,
    infinite:false
});

/** four Slider*/
$('.slider-four')
.not(".slick-intialized")
.slick({
    prevArrow:".site-slider-four .slider-btn .prev",
    nextArrow:".site-slider-four .slider-btn .next",
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:300,
    infinite:false
});