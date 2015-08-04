// Callback after Mailchimp email capture tells Mixpanel
// User has signed up for email campaign
function mixpanelEmailCapture (response, email) {
  var stage = "Signed up for newsletter";

  if (response.result === "success") {
    mixpanel.identify(email);
    mixpanel.track(stage);
    mixpanel.people.set({'$email': email, 'Current Stage': stage});
  }
}
