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
        analytics.identify(email.val(), analyticsTraits(), function() {
          // HubSpot requires a page call to flush information from Segment
          // any such page calls should have a category of "null"
          // and a page name of "Flush to HubSpot" (case-sensitive)
          analytics.page('null', 'Flush to HubSpot');
        });
        analytics.track(stage);
      }

      function analyticsTraits() {
        var traits = {
          email: email.val(),
          Newsletter: false
        };

        return addSegments(addLifecycleStage(addCustomerType(traits)));
      }

      function addSegments(traits) {
        var segments = email.data("segments");

        if (segments) {
          segments.split(",").forEach(function(element) {
            traits[element.trim()] = true;
          });
        }

        return traits;
      }

      function addLifecycleStage(traits) {
        var lifecycleStage = email.data("lifecyclestage");
        var HUBSPOT_LIFECYCLE_STAGE_KEY = "lifecyclestage";

        if(lifecycleStage) {
          traits[HUBSPOT_LIFECYCLE_STAGE_KEY] = lifecycleStage.trim();
        }

        return traits;
      }

      function addCustomerType(traits) {
        var customerType = email.data("customer-type");

        if(customerType) {
          traits[customerType.trim().toLowerCase()] = true;
        }

        return traits;
      }
    });
  };
})(jQuery, analytics);
