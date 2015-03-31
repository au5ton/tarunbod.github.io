$(document).ready(function() {

  var dataIndexes = [];
  
  $(".col-4").addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
  $(".col-offset-4").addClass("col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4");
  
  $(".col-6").addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");
  $(".col-offset-3").addClass("col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3");
  
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
