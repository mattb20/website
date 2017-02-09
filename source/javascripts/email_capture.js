/* Segment email capture takes in an email address and submits it to Segment.com
 jQuery Plugin

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

  $.fn.emailCapture = function () {

    return $(this).each(function(index, element) {
      var form = $(element);
      var email = form.find('input[type=email]');
      var label = form.find('label[for=' + email.attr('id') + ']');
      var submitMsg = "Thank you for subscribing!";
      var stage = "Signed up for newsletter";

      form.on("submit", submitEmailToSegment);

      function submitEmailToSegment(event) {
        event.preventDefault();
        sendToSegment();
        label.html(submitMsg).show(2000);
      }

      function sendToSegment() {
        analytics.alias(email.val());
        analytics.identify(email.val(), analyticsProperties());
        analytics.track(stage);
      }

      function analyticsProperties() {
        var values = {
          email: email.val(),
          Newsletter: false
        };

        return addSegments(values);
      }

      function addSegments(values) {

        var segments = email.data("segments");

        if (segments) {
          segments.split(",").forEach(function(element) {
            values[element.trim()] = true;
          });
        }

        return values;
      }
    });
  };
})(jQuery, analytics);
