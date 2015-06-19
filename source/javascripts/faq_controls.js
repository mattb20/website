// sticky controls once scrolled to a certain point

$(document).ready(function() {
  var $faqs = $('#faqs');
  var $faqControls = $('#faq_controls');

  var contentOffset = $faqs.offset().top - 120;
  console.log("offset: " + contentOffset);
  $(window).scroll(function(e) {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if (scrollTop < contentOffset) {
      $faqControls.removeClass("controls--fixed");
    } else if (scrollTop > contentOffset) {
      $faqControls.addClass("controls--fixed");
    };
  });

});
