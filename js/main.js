$(document).ready(function() {
    $("button").button();
    $("#splash").text(splashes.getSplash());
    $("#container").click(switchTheme);
    setInterval(updateSplash, 1);
});

var dark = true;

function updateSplash() {
  if ($("#splash").text() === "Animation!") {
      $("#splash").css({"-webkit-animation": "animation 1s linear infinite, splash 500ms linear infinite", "animation" : "animation 1s linear infinite, splash 500ms linear infinite"});
  } else {
    $("#splash").css({"-webkit-animation": "splash 500ms linear infinite", "animation" : "splash 500ms linear infinite"});
  }
}

/*
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
} */

function switchTheme( event ) {

  if ( event.target.id === 'container' ) { //the container was clicked, and not a text node

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
}
