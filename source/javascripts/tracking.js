var tracking = (function(analytics) {
  function isAnchor(el) {
    el.nodeName == "A";
  }

  function trackClicks(targets, properties) {
    for (var el in targets) {
      $(el).each(function(){
        var $this = $(this);
        var eventType = ($this.data("track") || targets[el]);

        if (isAnchor(this)) {
          analytics.trackLink($this, eventType, properties)
        } else {
          $this.click(function(){
            analytics.track(eventType, properties);
          });
        }
      });
    }
  }
  return {
    trackClicks: trackClicks
  }
})(analytics);
