var EmailSignup = (function() {
  var form, input;

  function emailSubmit(event) {
    form = $(this);
    input = form.find("input[type=email]");
    if (form.get(0).checkValidity()) {
      event.preventDefault();
      register();
    }
  }

  function register() {
    var button = form.find("input[type=submit]");
  }

  return  {
    init: function() {
      $('.email-capture').submit(emailSubmit);
    }
  };
}());
