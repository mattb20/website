//For showing and hiding navigation

var hideNav = function($nav) {
  // only affect desktop navigation
  var $nav = $('header.navigation');
  $nav.addClass('hidden-nav');
};

$(document).ready(function() {
  // only affect desktop navigation
  var $nav = $('header.navigation');
  // hide after 5 seconds
  var t = window.setTimeout(hideNav, 5000);

  $nav.hover(
    function() { clearTimeout(t) },
    function() { t = window.setTimeout(hideNav, 5000) }
  );

  var lastScrollTop = 0;
  $(window).scroll(function(e) {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      // on scroll down, hide nav
      $nav.addClass('hidden-nav');
    } else {
      // on scroll up, show nav
      $nav.removeClass('hidden-nav');
    };
    lastScrollTop = scrollTop;
  });

});
