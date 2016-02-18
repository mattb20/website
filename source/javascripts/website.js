//= require all
//= require employers_form

(function($, tracking) {
  var targets = {
    ".employers-testimonials-slider .slick-prev": "Clicked Employers Testimonials Slider",
    ".employers-testimonials-slider .slick-next": "Clicked Employers Testimonials Slider",
    ".graduates-slider .slick-prev": "Clicked Grads Slider",
    ".graduates-slider .slick-next": "Clicked Grads Slider",
    ".curriculum-slider .slick-prev": "Clicked Curriculum Slider",
    ".curriculum-slider .slick-next": "Clicked Curriculum Slider",
    ".graduates-video": "Watched Alumni Video",
    "[data-track]": null,
  };

  var properties = {"Course Type": "Offline"};

  $(document).ready(function(){
    tracking.trackClicks(targets, properties);

    $('#employers-form').employersForm();
  });
})(jQuery, tracking);
