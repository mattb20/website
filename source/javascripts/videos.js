// Inject the YouTube Iframe API into the page
(function addYouTubeJS() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

// This function is called by the YouTube IFrame API when it has loaded
// This adds an overlay to video and enables control of the video object.
function onYouTubeIframeAPIReady(){
  $('.video-wrapper iframe').each(function() {
    new Video(this);
  });
}

function Video(iframe) {
  this.$iframe = $(iframe);
  this._enableJSAPI();
  this.player = new YT.Player(this.$iframe[0]);
  this._addOverlay();
  this.$iframe.data('video', this);
}

// The src attribute of the iframe needs to have enablejsapi=1
// for us to be able to use the YouTube Iframe API
Video.prototype._enableJSAPI = function() {
  var url = this.$iframe.attr('src');
  var seperator = (url.indexOf('?') > -1) ? '&' : '?';
  this.$iframe.attr('src', url + seperator + 'enablejsapi=1');
};

Video.prototype._addOverlay = function() {
  var player = this.player;
  var overlay = $('<div/>', {
    class: 'video-overlay',
    width: this.$iframe.width(),
    height: this.$iframe.height()
  }).appendTo(this.$iframe.parent());

  overlay.on('click', function() {
    player.playVideo();
    $(this).remove();
  });
};

Video.prototype.stop = function() {
  this.player.stopVideo();
  this._addOverlay();
};

