//= require vendor/jquery
//= require track-form/track-form
(function($, analytics){
  $(document).on("ready", function () {
    trackForm.popData(window.localStorage, submitFormDataToAnalytics);
  });
})(jQuery, analytics);
