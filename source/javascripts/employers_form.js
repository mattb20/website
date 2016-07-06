(function ($, analytics, window) {
  'use strict';

  $.fn.employersForm = function (options) {

    return $(this).each(function(index, element) {
      var form = $(element);
      var email = form.find('input[type=email]');

      form.on("submit", saveForAnalytics);
      analytics.trackForm(form, 'Submitted Employers Enquiry Form');

      // Save identity/alias analytics data for after when the form has
      // submitted
      function saveForAnalytics(event, options) {
        if (email.val() !== "") {
          storePropertiesForAnalytics();
        }
      }

      function storePropertiesForAnalytics() {
        var properties = JSON.stringify(analyticsProperties());
        window.localStorage.setItem("employerAnalyticsProperties", properties);
      }

      function analyticsProperties() {
        var names = form.find("#name").val().split(" ");

        var values = {
          firstName: names.shift(),
          lastName: names.join(" ")
        };

        $.each(form.serializeArray(), function(i, field) {
          values[field.name] = field.value;
        });

        return values;
      }
    });
  };
}(jQuery, analytics, window));
