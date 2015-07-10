// All javascripts loaded in the footer

// Note the dependencies listed below will only be loaded in if the asset
// pipeline is set up. If you're loading this using Bower you'll need to include
// these yourself - the simplest way is just to add them using <script> tags in
// your layout html file
//
//= require vendor/jquery
//= require vendor/retina.min
//= require vendor/slick.js
//= require vendor/jquery.ajaxchimp
//= require mixpanel-email-capture
//= require navigation
//= require jquery.fixedscroll
//= require doorbell

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
  // set up instant feedback form using doorbell.io
  $('.email-capture').ajaxChimp({
    callback: mixpanelEmailCapture
  });

  $('.faq-links').fixedScroll();
});
