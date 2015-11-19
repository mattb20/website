/**
 * Tracks clicks to external links (for the moment just on the employers page)
 */
(function ($) {
  $(document).ready(function() {
    $('.employers-button').click(function(event) {
      event.preventDefault();

      var url = $(this).attr('href');

      analytics.track('Viewed Employers Enquiry Form', function() {
        document.location = url;
      });
    });
  });
})(jQuery);
