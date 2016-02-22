(function ($, analytics, window) {
  'use strict';

  $.fn.employersForm = function (options) {

    return $(this).each(function(index, element) {
      var form = $(element);
      var email = form.find('input[type=email]');

      form.on("submit", submitToAnalytics);

      function submitToAnalytics(event, options) {

        // Check for option to stop an infinite loop of form submissions
        // when we trigger the form event manually below
        if (options && options.submittedAnalytics) {
          return;
        }

        if (email.val() !== "") {
          event.preventDefault();
          storePropertiesForAnalytics();
          submitForm();
        }
      }

      function storePropertiesForAnalytics() {
        var properties = JSON.stringify(analyticsProperties());
        window.localStorage.setItem("employerAnalyticsProperties", properties);
      }

      function submitForm() {
        form.trigger('submit', {submittedAnalytics: true});
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
