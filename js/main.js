$(document).ready(function() {
    showBody();

    if (document.title === "Portfolio") {
    	$("#projectOverlay").css({
    		left: (document.body.clientWidth - 500) / 2 + "px",
    		top: (resources.bgImages.height() - 300) / 2 + "px"
    	});
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

    var currentWidth = document.body.clientWidth;

    $(window).resize(function() {
    	if (document.body.clientWidth - currentWidth > 100) {
    		resources.bgImages.setBgImage();	
    	}
    });

    $(".delayLink").click(function(e) {
    	hideBody();
    	var link = $(this).attr("href");
    	setTimeout(function() {
    		window.location.href = link;
    	}, 750);
    	return false;
    });

    var overlayText = "";

	$(".project").click(function(e) {
		var attr = $(this).attr("class");
		switch (attr) {
			case "project p1":
				overlayText = resources.projectDescs.p1;
				break;
			case "project p2":
				overlayText = resources.projectDescs.p2;
				break;
			case "project p3":
				overlayText = resources.projectDescs.p3;
				break;
			case "project p4":
				overlayText = resources.projectDescs.p4;
				break;
			case "project p5":
				overlayText = resources.projectDescs.p5;
				break;
			default:
				break;	
		}
		$("#desc").html(overlayText);
	});
});
