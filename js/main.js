$(document).ready(function() {

  var dataIndexes = [];
  
  $("h1,h2,h3").addClass("text-center");

  $(".slide").each(function(i) {
    $(this).attr("data-index", i);
    dataIndexes.push(i);
  });

  $(".contact-anchor-button").addClass("text-secondary")

  $(".contact-anchor-button").click(function() {
    $("html, body").animate({
      scrollTop: $(".slide[data-index=" + dataIndexes[dataIndexes.length - 1] + "]").offset().top
    }, 500);
  });
});