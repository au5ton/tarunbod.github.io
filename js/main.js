$(document).ready(function() {
    $("button").button();
    bounceAnimation();
    if (document.title !== "Resources") {
    	$(window).bind("scroll", function() {
    		if ($(this).scrollTop() > 20 && showInfoAnimation) {
    			showInfoOnScroll();
    		}
		    if ($(this).scrollTop() >= 500 && showProjectsAnimation) {
		        showProjectsOnScroll();
		    }
		});
	}
});
