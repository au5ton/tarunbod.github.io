var showProjectsAnimation = true;
var showInfoAnimation = true;

function showTitle() {
	$(".header").animate({opacity: 1});
	$("#title").animate({opacity: 1});
	var bounce = new Bounce();
	bounce.translate({
		from: {x: 300, y: -300},
		to: {x: 0, y: 0},
		duration: 1000,
		stiffness: 3
	}).applyTo($("#title"));
	var bounce2 = new Bounce();
	bounce2.scale({
		from: {x: 10, y: 10},
		to: {x: 1, y: 1},
		duration: 1000,
		stiffness: 3
	}).applyTo($(".header"));
	setTimeout(showInfo, 1000);
}

function showInfo() {
	$("#info").animate({opacity: 1});
	var bounce = new Bounce();
	bounce.scale({
		from: {x: 0, y: 0},
		to: {x: 1, y: 1},
		duration: 1000,
		stiffness: 2
	}).applyTo($("#info"));
	showInfoAnimation = false;
}

function showProjects() {
	var bounce = new Bounce();
	$(".project").animate({opacity: 1});
	bounce.scale({
		from: {x: 0, y: 0},
		to: {x: 1, y: 1},
		duration: 1000,
		stiffness: 2
	}).applyTo($(".project"));
	showProjectsAnimation = false;
}
