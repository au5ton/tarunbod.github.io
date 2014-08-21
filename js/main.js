$(document).ready(function() {
    $("body").css("background-color",randomHex());
    $("button").button();
    splashes.setSplash();
});


function randomHex() {
   var hex = "#";
   var values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
   for (var i = 0; i < 6; i++) {
     hex += values[Math.floor(Math.random() * values.length)];
   }
   return hex;
}
