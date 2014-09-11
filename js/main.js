$(document).ready(function() {
    showTitle();
    if (document.title !== "Resources") {
    	$(window).bind("scroll", function() {
		    if ($(this).scrollTop() >= ($("#projectsHeader").position().top - 100) && showProjectsAnimation) {
		        showProjects();
		    }
		});
	}
});
