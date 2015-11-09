/* Segment email capture
 jQuery Plugin

 Use:
 ===
 $('#form_id').emailCapture();

 - Form should have one <input> element with attribute 'type=email'
 - Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
 */

(function ($) {
  'use strict';

  $.fn.emailCapture = function (options) {

    return $(this).each(function(index, element) {
      var form = $(element);
      var email = form.find('input[type=email]');
      var label = form.find('label[for=' + email.attr('id') + ']');
      var submitMsg = "Thank you for subscribing!";

      form.on("submit", function(event) {
        event.preventDefault();

        analytics.identify(submitValues());

        label.html(submitMsg).show(2000);
      });

      function submitValues() {
        var values = {
          email: email.val(),
          newsletter: true,
        };
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
