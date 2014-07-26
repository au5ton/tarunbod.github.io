$(document).ready(function() {
    $("button").button();
    $("#splash").text(splashes.getSplash());
    if ($("#splash").text() === "Animation!") {
      $("#splash").css({"-webkit-animation": "animation 1s linear infinite, splash 500ms linear infinite", "animation" : "animation 1s linear infinite, splash 500ms linear infinite"});
    }
});