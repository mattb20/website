!function(t){"use strict";t.fn.emailCapture=function(){return t(this).each(function(n,a){function e(t){t.preventDefault(),i(),f.html(y).show(2e3)}function i(){analytics.alias(s.val()),analytics.identify(s.val(),r(),function(){analytics.page("null","Flush to HubSpot")}),analytics.track(m)}function r(){var t={email:s.val(),Newsletter:!1};return u(c(l(t)))}function u(t){var n=s.data("segments");return n&&n.split(",").forEach(function(n){t[n.trim()]=!0}),t}function c(t){var n=s.data("lifecyclestage"),a="lifecyclestage";return n&&(t[a]=n.trim()),t}function l(t){var n=s.data("customer-type");return n&&(t[n.trim().toLowerCase()]=!0),t}var o=t(a),s=o.find("input[type=email]"),f=o.find("label[for="+s.attr("id")+"]"),y="Thank you for subscribing!",m="Signed up for newsletter";o.on("submit",e)})}}(jQuery,analytics);