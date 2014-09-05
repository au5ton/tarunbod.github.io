$(document).ready(function() {
    $("button").button();
    bounceAnimation();
    if (document.title !== "Resources") {
    	setTimeout(showInfo, 1500);
    	$(window).bind("scroll", function() {
		    if ($(this).scrollTop() >= 500 && showProjectsAnimation) {
		        showProjects();
		    }
		});
	}
});
