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
// bower_components/makers_styles/source/javascripts/intercom.js


//= require vendor/jquery
//= require vendor/retina.min
//= require vendor/slick.js
//= require vendor/prism
//= require navigation
//= require jquery.fixedscroll
//= require email_capture
//= require intercom
//= require vendor/baseliner
//= require tabs
//= require vertical_tabs
//= require elements
//= require sliders
//= require videos
//= require tracking
//= require vendor/intlTelInput/utils
//= require vendor/intlTelInput/intlTelInput.min


$(document).ready(function() {
  $('.definition-links').fixedScroll();
});
