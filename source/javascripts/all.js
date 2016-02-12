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

function isAnchor(el) {
  el.nodeName == "A";
}

function trackClickEvents(targets, properties) {
  for (var el in targets) {
    $(el).each(function(){
      var $this = $(this);
      var eventType = ($this.data("track") || targets[el]);

      if (isAnchor(this)) {
        analytics.trackLink($this, eventType, properties)
      } else {
        $this.click(function(){
          analytics.track(eventType, properties);
        });
      }
    });
  }
}

$(document).ready(function() {

  $('.email-capture').emailCapture();

  $('.definition-links').fixedScroll();
});
