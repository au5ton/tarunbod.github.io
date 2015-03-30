$(document).ready(function() {
<<<<<<< HEAD
	resources.bg.setBgImage();
	var date = new Date();
	if (date.getMonth() === 9 && date.getDate() > 20) {
		$("#navbar-brand").html("Happy Halloween!");
	} else if (date.getMonth() === 11 && date.getDate() >= 10) {
		$("#navbar-brand").html("Happy Holidays!");
	} 
	if (date.getHours() + 1 <= 12) {
		$(".content-container").addClass("light");
	} else {
		$(".content-container").addClass("dark");
	}
	$("#downloadsBox").css({
		"margin-top": ((resources.bg.height() - $(this).height()) / 2) + "px"
	});
	$(".col-10").addClass("col-xs-10 col-sm-10 col-md-10 col-lg-10");
	$(".col-8").addClass("col-xs-8 col-sm-8 col-md-8 col-lg-8");
	$(".col-6").addClass("col-xs-6 col-sm-6 col-md-6 col-lg-6");
	$(".col-4").addClass("col-xs-4 col-sm-4 col-md-4 col-lg-4");
	$(".col-offset-1").addClass("col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1");
	anim.show();
});

=======

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
>>>>>>> indev
