/* Segment email capture takes email from a form input and sends it to Segment.com

 Use:
 ===
 $('#form_id').emailCapture();

 - Form should have one <input> element with attribute 'type=email'
 - Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
 - Email <input> can have segments added using a data-segments attributes with each value comma-seperated
   e.g. <input type="email" data-segments="women,entrepeneurs">
 */

(function ($) {
  'use strict';

  $.fn.emailCapture = function (options) {

    return $(this).each(function(index, element) {
      var form = $(element);
      var email = form.find('input[type=email]');
      var label = form.find('label[for=' + email.attr('id') + ']');
      var submitMsg = "Thank you for subscribing!";
      var stage = "Signed up for newsletter";

      form.on("submit", signUpForNewsletter);

      function signUpForNewsletter(event) {
        event.preventDefault();
        sendToSegment();
        label.html(submitMsg).show(2000);
      }

      function sendToSegment() {
        analytics.alias(email.val());
        analytics.identify(analyticsProperties());
        analytics.track(stage);
      }

      function analyticsProperties() {
        var values = {
          email: email.val(),
          Newsletter: true,
          'Current Stage': stage
        };

        return addSegments(values);
      }

      function addSegments(values) {

        var segments = email.data("segments");

        if (segments) {
          segments.split(",").forEach(function(element) {
            values[element] = true;
          });
        }

        return values;
      }
    });
  };
})(jQuery);
