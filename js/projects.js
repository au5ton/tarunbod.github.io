var overlayText = "";

$(".project").click(function(e) {
	var attr = $(this).attr("class");
	switch (attr) {
		case "p1":
			overlayText = projectDescs.p1;
			break;
		case "p2":
			overlayText = projectDescs.p2;
			break;
		case "p3":
			overlayText = projectDescs.p3;
			break;
		case "p4":
			overlayText = projectDescs.p4;
			break;
		case "p5":
			overlayText = projectDescs.p5;
			break;
		case "p6":
			overlayText = projectDescs.p6;
	}
	$("#projectsOverlay").html("<p>" + overlayText + "</p>");
});



var projectDescs = {
	p1: "",
	p2: "I helped code a website by my friend MacPhage. I didn't do much, but his website is pretty cool. <a href=\"http://austinj.net\">Here</a> it is.",
	p3: "",
	p4: "",
	p5: "",
	p6: "",
}