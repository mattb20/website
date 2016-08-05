//= require track-form/track-form
//= require vendor/jquery
(function($){
  $('.trackable-form').on("submit", function(event){
    var formData =  $(this).serializeArray();
    trackForm.saveForLater(formData, window.localStorage);
  });

})(jQuery);
