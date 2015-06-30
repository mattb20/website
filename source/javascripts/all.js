// All, loaded in the footer

//= require vendor/jquery
//= require vendor/retina.min
//= require vendor/slick.js
//= require vendor/jquery.ajaxchimp
//= require mixpanel-email-capture
//= require navigation
//= require jquery.fixedscroll

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

  // set up sliders using Slick
  // set up email capture using AJAXChimp
  $('.email-capture').ajaxChimp({
    callback: mixpanelEmailCapture
  });

  $('.faq-links').fixedScroll();
});
