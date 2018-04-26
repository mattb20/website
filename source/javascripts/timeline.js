$(document).ready(function() {
  var POINTS = $('.timeline__point');
  var SELECT = $('#curriculum_select');
  var ABOUT  = $('.curriculum-selector__about');
  var ANIMATED_TIMELINE = true;

  var WEEKS = [
    'week-pc-1',
    'week-pc-2',
    'week-pc-3',
    'week-pc-4',
    'week-1',
    'week-2',
    'week-3',
    'week-4',
    'week-5',
    'week-6',
    'week-7',
    'week-8',
    'week-9', 
    'week-10', 
    'week-11', 
    'week-12'
  ];

  function removePoints() {
    POINTS.removeClass('timeline__point--selected');
  };

  function addPoint(week) {
    var point = '.timeline__point[data-week=' + week + ']';
    $(point).addClass('timeline__point--selected');
  }

  function removeInfoBoxes() {
    $('.point__info').remove();
  };

  function addInfoBox(weekData) {
    var point = '.timeline__point[data-week=' + weekData.week + ']';
    var header = "<h4 class='info__header'>" + weekData.header + "</h4>";
    var content = "<p class='info__content'>" + weekData.content + "</p>";

    $(point).html("<span class='point__info'>" + header + content + "</span>")
  };

  function updatePoints(selected) {
    removePoints();

    var contents = WEEKS.forEach(function(week) {
      var content = selected.attr('data-' + week + '-content');
      if(content === undefined) { return };
      addPoint(week);
    });
  };

  function updateInfoBoxes(selected) {
    removeInfoBoxes();

    var contents = WEEKS.map(function(week) {
      return {
        week: week,
        header: selected.attr('data-' + week + '-header'),
        content: selected.attr('data-' + week + '-content')
      }
    }).filter(function(weekData) { return weekData.content != undefined });

    for(var i = 0; i < contents.length; i++) {
      addInfoBox(contents[i]);
    };

    addPointListeners();
  };

  function updateAbout(selected) {
    ABOUT.html(selected.attr('data-content'));
  };

  function selectFirst(selected) {
    $('.timeline__point--selected').first().addClass('timeline__point--current');
  };

  function handleChange(e) {
    var selected = $(this).find(':selected');

    updateAbout(selected);
    updatePoints(selected);
    updateInfoBoxes(selected);
    cancelTimer();
    selectFirst();
    startTimelineAnimation();
  };

  function cancelTimer() {
    clearInterval(ANIMATED_TIMELINE);
  };

  function addPointListeners() {
    POINTS.removeClass('timeline__point--current');
    POINTS.off('mouseenter');
    $('.timeline__point--selected').on('mouseenter', function() {
      cancelTimer();
      POINTS.removeClass('timeline__point--current');
      $(this).addClass('timeline__point--current');
    });
  };

  function rotateCurrent() {
    var $next = $('.timeline__point--current').nextAll('.timeline__point--selected').first();
    POINTS.removeClass('timeline__point--current');

    if($next.length !== 0) {
      $next.addClass('timeline__point--current');
    } else {
      $('.timeline__point--selected').first().addClass('timeline__point--current');
    };
  };

  function startTimelineAnimation() {
    var ROTATION_TIME = 3000;
    ANIMATED_TIMELINE = setInterval(rotateCurrent, ROTATION_TIME);
  };

  SELECT.change(handleChange);
  addPointListeners(POINTS);
  handleChange.bind(SELECT)();
});