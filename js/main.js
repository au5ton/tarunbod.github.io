$(document).ready(function() {
    $("button").button();
    $("#splash").text(splashes.getSplash());
    if ($("#splash").text() === "Animation!") {
      $("#splash").css({"-webkit-animation": "animation 500ms linear infinite", "animation" : "animation 500ms linear infinite"});
    }
});