$(document).ready(function() {
  var movementStrength = 35;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#first-left").mousemove(function(e) {
    var pageX = e.pageX - $(window).width() / 2;
    var pageY = e.pageY - $(window).height() / 2;
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $("#first-left").css(
      "background-position",
      newvalueX + "px " + newvalueY + "px"
    );
  });
});
