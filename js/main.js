$(document).ready(function() {
    $("button").button();
    splashes.setSplash();
    $("#container").children().click(function(e) {e.stopPropagation()});
    $("#linkBar").children().click(function(e) {e.stopPropagation()});
    $("#linkBar").click(switchTheme);
    $("#container").click(switchTheme);
});

var dark = true;

function switchTheme() {
  if (dark) {
    $(".bgswitch").css({"background-color": "rgba(255,255,255,0.7);", "color": "black"});
    // $("#cssmenu ul li a:before").css("background-color: rgba(255,255,255,0.7);");
    dark = false;
  } else {
    $(".bgswitch").css({"background-color": "rgba(0,0,0,0.7);", "color": "white"});
    // $("#cssmenu ul li a:before").css("background-color: rgba(0,0,0,0.7);");
    dark = true;
  }
} 
