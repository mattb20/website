// Inject the YouTube Iframe API into the page
(function addYouTubeJS(document) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})(document);

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

Video.prototype.play = function() {
  this._removeOverlay();
  this.player.playVideo();
};

Video.prototype.stop = function() {
  if (this._isPlaying()) {
    this.player.pauseVideo();
  }
};

// The src attribute of the iframe needs to have enablejsapi=1
// for us to be able to use the YouTube Iframe API
Video.prototype._enableJSAPI = function() {
  var url = this.$iframe.attr('src');
  var seperator = (url.indexOf('?') > -1) ? '&' : '?';
  this.$iframe.attr('src', url + seperator + 'enablejsapi=1');
};

Video.prototype._addOverlay = function() {
  var self = this;
  var overlay = $('<div/>', {
    class: 'video-overlay',
    width: self.$iframe.width(),
    height: self.$iframe.height()
  }).appendTo(self.$iframe.parent());

  overlay.on('click', function() {
    self.play();
  });
};

Video.prototype._removeOverlay = function() {
  var overlay = this.$iframe.parent().find('.video-overlay');
  overlay.remove();
};

Video.prototype._isPlaying = function() {
  return this.player.getPlayerState() === YT.PlayerState.PLAYING;
};
