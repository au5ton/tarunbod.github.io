var showProjectsAnimation = true;
var showInfoAnimation = true;

function bounceAnimation() {
	var bounce = new Bounce();
	bounce
	  .translate({
	    from: { x: 0, y: -300 },
	    to: { x: 0, y: 0 },
	    duration: 600,
	    stiffness: 4
	  })
	  .scale({
	    from: { x: 1, y: 1},
	    to: { x: 3, y: 1 },
	    easing: "sway",
	    duration: 800,
	    delay: 30,
	  })
	  .applyTo($("#container"));
}

function showInfoOnScroll() {
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

function showProjectsOnScroll() {
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
