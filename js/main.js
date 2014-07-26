$(document).ready(function() {
    $("button").button();
    $("#splash").text(splashes.getSplash());
    setInterval(updateSplash, 1);
});


function updateSplash() {
  if ($("#splash").text() === "Animation!") {
      $("#splash").css({"-webkit-animation": "animation 1s linear infinite, splash 500ms linear infinite", "animation" : "animation 1s linear infinite, splash 500ms linear infinite"});
  } else {
    $("#splash").css({"-webkit-animation": "splash 500ms linear infinite", "animation" : "splash 500ms linear infinite"});
  }
}
    if ($("#splash").text() === "Animation!") {
      $("#splash").css({"-webkit-animation": "splash 500ms linear infinite, animation 1s linear infinite", "animation" : "animation 1s linear infinite, splash 500ms linear infinite"});
    }
}