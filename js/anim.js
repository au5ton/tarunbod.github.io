var showProjectsAnimation = true;

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
infoBounce.scale({
	from: {x: 0, y: 0},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 2
});

var projectsBounce = new Bounce();
projectsBounce.scale({
	from: {x: 0, y: 0},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 2
});

function showTitle() {
	$(".header, #title").animate({opacity: 1});
	titleBounce.applyTo($("#title"));
	headerBounce.applyTo($(".header"));
	setTimeout(showInfo, 1000);
}

function showInfo() {
	$("#info").animate({opacity: 1});
	infoBounce.applyTo($("#info"));
}

function showProjects() {
	$(".project").animate({opacity: 1});
	projectsBounce.applyTo($(".project"));
	showProjectsAnimation = false;
}