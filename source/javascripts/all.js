// All javascripts loaded in the footer

// Note the dependencies listed below will only be loaded in if the asset
// pipeline is set up. If you're loading this using Bower you'll need to include
// these yourself - the simplest way is just to add them using <script> tags in
// your layout html file
//
// Here are some useful paths for your copy/pasting convenience:
//
// bower_components/makers_styles/source/javascripts/vendor/jquery.js
// bower_components/makers_styles/source/javascripts/vendor/slick.js
// bower_components/makers_styles/source/javascripts/vendor/retina.min.js
// bower_components/makers_styles/source/javascripts/vendor/baseliner.js
// bower_components/makers_styles/source/javascripts/navigation.js
// bower_components/makers_styles/source/javascripts/jquery.fixedscroll.js
// bower_components/makers_styles/source/javascripts/doorbell.js


//= require vendor/jquery
//= require vendor/retina.min
//= require vendor/slick.js
//= require vendor/prism
//= require email_capture
//= require navigation
//= require jquery.fixedscroll
//= require doorbell
//= require vendor/baseliner
//= require tabs
//= require vertical_tabs
//= require elements
//= require sliders
//= require videos

$(document).ready(function() {

  $('.email-capture').emailCapture();

  $('.definition-links').fixedScroll();

  var trackEvents = {
    ".graduates-slider .slick-prev": "Clicked Grads Slider",
    ".graduates-slider .slick-next": "Clicked Grads Slider",
    ".curriculum-slider .slick-prev": "Clicked Curriculum Slider",
    ".curriculum-slider .slick-next": "Clicked Curriculum Slider",
    ".graduates-video": "Watched Alumni Video",
    "[data-track]": null,
  }

  function isAnchor(el) {
    el.nodeName == "A";
  }

  for (var el in trackEvents) {
    var properties = {"Course Type": "Offline"};
    
    $(el).each(function(){
      var $this = $(this);
      var eventType = ($this.data("track") || trackEvents[el]);

      if (isAnchor(this)) {
        analytics.trackLink($this, eventType, properties)
      } else {
        $this.click(function(){
          analytics.track(eventType, properties);
        });
      }
    })
  }
});
