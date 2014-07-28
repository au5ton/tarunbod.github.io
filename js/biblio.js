$(document).ready(function() {
    $("button").button();
    $("#container").children().click(function(e) {e.stopPropagation()});
    $("#container").click(switchTheme);
});

var dark = false;

function switchTheme() {
  if (dark) {
    $("#container").css("background-color", "rgba(255,255,255,0.7);");
    $("#container").css("color", "black");
    dark = false;
  } else {
    $("#container").css("background-color", "rgba(0,0,0,0.7);");
    $("#container").css("color", "white");
    dark = true;
  }
} 