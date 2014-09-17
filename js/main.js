$(document).ready(function() {
    showNavbar();

    if (document.title === "Portfolio") {
    	$("#projectOverlay").draggable();

    	$(".project").click(function(e) {
    		$("#overlay").fadeIn();
    		$("#projectOverlay").fadeIn();
    	});

    	$("#exit").click(function(e) {
    		$("#overlay").fadeOut();
    		$("#projectOverlay").fadeOut();
    	})
    }
});
