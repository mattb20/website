$(document).ready(function() {

  $('.slider').on('init', function(){
    var $sliderRows = $('.slider-row, .half-slider-row');
    $sliderRows.css("opacity", 1);
    $sliderRows.css("min-height", 0);
  });

  $('.slider:not(.lazy-slider)').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    adaptiveHeight: true
  });

  $('.lazy-slider').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    lazyload: 'progressive'
  });

  $('.slider--video').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var $nextSlide = $(slick.$slides[nextSlide]);
    var $currentSlide = $(slick.$slides[currentSlide]);
    var $description = $('#' + $(this).data('description-container'));

    $description.find('.header').fadeOut(150, function() {
      $(this).html($nextSlide.data('header'));
      $(this).fadeIn();
    });

    $description.find('.subheader').fadeOut(150, function() {
      $(this).html($nextSlide.data('subheader'));
      $(this).fadeIn();
    });

    var video = $currentSlide.find('.video').data('video');
    video.stop();
  });
});
