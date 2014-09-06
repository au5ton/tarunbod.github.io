$(document).ready(function() {
    $("button").button();
    setTimeout(bounceAnimation, 250);
    if (document.title !== "Resources") {
    	setTimeout(showInfo, 2500);
    	$(window).bind("scroll", function() {
		    if ($(this).scrollTop() >= 500 && showProjectsAnimation) {
		        showProjects();
		    }
		});
	}
});
