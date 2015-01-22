$(document).ready( function () {

  var shipj = $('#spaceship');
  var space = $('#space');
  var ship = document.getElementById("spaceship");
  var timerId;
  var spacePad = 4;

  function shrink() {
    if ( shipj.height() < 30) {
      shipj.hide();
      clearInterval(timerId);
    } else {
      shipj.height(shipj.height() / 2);
      shipj.width(shipj.width() / 2);
      // shipj.animate({
      //   height: '-=' + shipj.height() / 2,
      //   width: '-=' + shipj.width() / 2
      //});
      //space.css("padding", ( (space.width - shipj.width) - (shipj.width) + "px") );
    }
  }

  space.click( function () {
    //shipj.css("-webkit-animation-play-state", "paused");
    //shipj.css("animation-play-state", "paused");
    shipj.removeClass("spin-bkw");
    //space.removeClass("spin-fwd");
    timerId = setInterval(shrink, 200);
  })

})
