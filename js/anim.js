var titleBounce = new Bounce();
titleBounce.translate({
	from: {x: 300, y: -300},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 3
});

var headerBounce = new Bounce();
headerBounce.scale({
	from: {x: 7, y: 7},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 3
});

var infoBounce = new Bounce();
infoBounce.translate({
	from: {x: -500, y: 0},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 2
});

var bounceUp = new Bounce();
bounceUp.translate({
	from: {x: 0, y: 50},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 2
}).rotate({
	from: 90,
	to: 0,
	duration: 500,
	stiffness: 1
})

var lightSpeedIn = new Bounce();
lightSpeedIn.translate({
	from: {x: -1500, y: 0},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 5
}).skew({
	from: {x: 20, y: 0},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 5
});

var lightSpeedOut = new Bounce();
lightSpeedOut.translate({
	from: {x: 0, y: 0},
	to: {x: -1500, y: 0},
	duration: 1000,
	stiffness: 5
}).skew({
	from: {x: 0, y: 0},
	to: {x: 20, y: 0},
	duration: 1000,
	stiffness: 5
});

function showBody() {
	lightSpeedIn.applyTo($(".navbar"));
	setTimeout(function() {$("#container").animate({opacity: 1}); lightSpeedIn.applyTo($("#container"));}, 250);
	setTimeout(showTitle, 500);
}

function showTitle() {
	$(".header, #title").animate({opacity: 1});
	if (document.title === "FirstWorldAnarchy") {
		titleBounce.applyTo($("#title"));
	}
	headerBounce.applyTo($(".header"));
	setTimeout(showInfo, 1000);
}

function showInfo() {
	$("#info").animate({opacity: 1});
	infoBounce.applyTo($("#info"));
	if (document.title === "Portfolio") {
		setTimeout(showProjects, 1000);
	}
}

function showProjects() {
	$(".project").each(function(index, e) {
		var $this = $(this);
		setTimeout(function() {
			$this.animate({opacity: 1});
			bounceUpProject($this);
		}, index * 250);
	});
}

function bounceUpProject(element) {
	bounceUp.applyTo(element);
}

function hideBody() {
	lightSpeedOut.applyTo($(".navbar"));
	setTimeout(function() {lightSpeedOut.applyTo($("#container"));}, 250);
}