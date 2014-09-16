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

var projectsBounce = new Bounce();
projectsBounce.translate({
	from: {x: 0, y: 500},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 2
});

var lightSpeedIn = new Bounce();
lightSpeedIn.translate({
	from: {x: -500, y: 0},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 5
}).skew({
	from: {x: 20, y: 0},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 5
});

var scaleUp = new Bounce();
scaleUp.scale({
	from: {x: 1, y: 1},
	to: {x: 5, y: 5},
	duration: 1000,
	stiffness: 3
});

var scaleDown = new Bounce();
scaleDown.scale({
	from: {x: 10, y: 10},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 3
})

function showNavbar() {
	lightSpeedIn.applyTo($(".navbar"));
	setTimeout(showTitle, 500);
}

function showTitle() {
	$(".header, #title").animate({opacity: 1});
	titleBounce.applyTo($("#title"));
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
	$(".project").animate({opacity: 1});
	projectsBounce.applyTo($(".project"));
}