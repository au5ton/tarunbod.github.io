$(document).ready(function() {
    $("button").button();
    splashes.setSplash();
});


/*
Dont know when I'll use this.
function randomHex() {
   var hex = "#";
   var values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
   for (var i = 0; i < 6; i++) {
     hex += values[Math.floor(Math.random() * values.length)];
   }
   return hex;
}
*/