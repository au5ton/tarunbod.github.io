var resources = {
	splashes: {
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
			"Trianglify.js!",
			"Exclamation points!",
			"Javascript Libraries!",
			"Polygons!",
			"Gradients!"
		],
		getSplash: function () {
			return this.list[Math.floor(Math.random() * this.list.length)];
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
	},
	bgImages: {
		pattern: new Trianglify({noiseIntensity: 0}),
		height: function() {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,document.body.offsetHeight, document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);
		},
		setBgImage: function() {
	        document.body.style.backgroundImage = this.pattern.generate(document.body.clientWidth + 100, this.height()).dataUrl;
		}
	},
	projectDescs: {
		p1: "",
		p2: "I helped code a website by my friend MacPhage. I didn't do much, but his website is pretty cool. <a href=\"http://austinj.net\">Here</a> it is.",
		p3: "",
		p4: "",
		p5: "",
	}
}