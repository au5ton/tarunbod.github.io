var bounceInfo = new Bounce();
bounceInfo.translate({
	from: {x: 0, y: 50},
	to: {x: 0, y: 0},
	duration: 1000,
	stiffness: 4.9
});

var bounceIn = new Bounce();
bounceIn.scale({
	from: {x: 0.2, y: 0.2},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 5
});

var anim = {
	showJumbotron: function() {
		$(".header-box").animate({opacity: 1});
		bounceIn.applyTo($(".header-box"));
		this.showInfo();
	},
	bounceUpInfo: function(elem) {
		elem.animate({opacity: 1});
		bounceInfo.applyTo(elem);
	},
	showInfo: function() {
		$(".header-info").each(function(index, e) {
			var $this = $(this);
			setTimeout(function() {
				anim.bounceUpInfo($this);
			}, index * 250 + 250);
		});
		setTimeout(this.showMainContent, 1000);
	},
	showMainContent: function() {
		if (document.title === "FirstWorldAnarchy") {
			$(".main-content, .projects").animate({opacity: 1});
			bounceIn.applyTo($(".main-content, .projects"));
		}
	},
	show: function() {
		this.showJumbotron();
	}
}