$(document).ready( function () {

  var count = 0;

  function endSplash() {
    if (count > 0 ) {
      window.location.replace("trivia.html");
    };
    count++;
    return false;
  }

  setInterval(endSplash, 2000);

})
