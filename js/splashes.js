var splashes = {
	list: [
		"Powered by jQuery!",
		"There's no place like 127.0.0.1!",
		"window.alert(\"Hello, World!\")",
		"HTML5!",
		"CSS3!",
		"PHP Free!",
		"Animation!",
		"WORA!",
		"Java!",
		"Tiny!",
		"Hosted on GitHub!",
		"No WebGL!",
		"Bounce.js!",
		"Exclamation points!",
	],
	getSplash: function () {
		var index = Math.floor(Math.random() * this.list.length);
		return this.list[index];
	},
	setSplash: function() {
		var splash = this.getSplash();
		if (splash === "Animation!") {
			$("#splash").css({"-webkit-animation": "animation 1s linear infinite, splash 500ms linear infinite", "animation" : "animation 1s linear infinite, splash 500ms linear infinite"});
		} else {
			if (splash === "Tiny!") {
				$("#splash").css("font-size", "8px");
			} else {
				$("#splash").css("font-size", "24px");
			}
			$("#splash").css({"-webkit-animation": "splash 500ms linear infinite", "animation" : "splash 500ms linear infinite"});
		}
		$("#splash").text(splash);
	}
}