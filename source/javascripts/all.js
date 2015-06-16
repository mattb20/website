//= require jquery
//= require ajaxchimp
//= require slick
//= require_tree .

$(document).ready(function() {
  $('.slider').slick({
    prevArrow: "<a class='slick-prev'></a>",
    nextArrow: "<a class='slick-next'></a>",
    adaptiveHeight: true
  });
  $('.email-capture').ajaxChimp();
});
