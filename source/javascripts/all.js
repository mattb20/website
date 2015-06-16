// All, loaded in the footer

//= require jquery
//= require slick

$(document).ready(function() {
  // set up sliders using Slick
  $('.slider').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    adaptiveHeight: true
  });
  // set up email capture using AJAXChimp
  $('.email-capture').ajaxChimp();
});
