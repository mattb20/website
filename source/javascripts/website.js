//= require all

(function($, tracking) {
  var targets = {
    ".graduates-video": "Watched Alumni Video",
    "[data-track]": null,
  };

  var properties = {"Course Type": "Onsite"};

  $(document).ready(function(){
    tracking.trackClicks(targets, properties);
    $(".quiz-row").quiz();
    $(".email-capture").emailCapture();
  });
})(jQuery, tracking);
