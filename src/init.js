$(document).ready(function () {
  window.dancers = [];

  $('.lineUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(40, 20 + (i * 50));
    }
  });

  $('body').on('mouseover', '.dancer', function (event) {
    window.dancers[$(this).attr('id')].setPosition((($('body').height() - 80) * Math.random()) + 40, (($('body').width() - 40) * Math.random()) + 40);
  });

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      (($('body').height() - 80) * Math.random()) + 40,
      (($('body').width() - 40) * Math.random()) + 40,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});