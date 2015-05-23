$(document).ready(function() {

  setupColumns();
  fadeInUp();

  $("h1,h2,h3").addClass("text-center");

  $(".contact-anchor-button").click(function() {
    $("html, body").animate({
      scrollTop: $(".contact-slide").offset().top
    }, 500);
  });
});

function setupColumns() {
  $(".col-4").addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
  $(".col-offset-4").addClass("col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4");
  
  $(".col-6").addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");
  $(".col-offset-3").addClass("col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3");

  $(".col-8").addClass("col-lg-8 col-md-8 col-sm-8 col-xs-8");
  $(".col-offset-2").addClass("col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2");
}

function fadeInUp() {
  setTimeout(function() {
    $(".name").addClass("animated fadeInUp");
  }, 1000);

  setTimeout(function() {
    $(".prof").addClass("animated fadeInUp");
  }, 1500);
  
  setTimeout(function() {
    $(".contact-anchor-button").addClass("animated fadeInUp");
  }, 2500);
}
