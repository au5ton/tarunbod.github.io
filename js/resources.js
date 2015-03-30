var resources = {
	colors: {
		randomHex: function() {
			var hex = '#';
			var date = new Date();
			if (date.getMonth() === 9 && date.getDate() > 20) {
				return Math.random() > 0.5 ? "#f72" : "#000" ;
			} else if (date.getMonth() === 11 && date.getDate() >= 10) {
				return Math.random() > 0.5 ? "#0f0" : "#f00";
			} else if (document.title !== "Error 404") {
				var colors = ["4","f"];
				for (var i = 0; i < 6; i++) {
					hex += colors[Math.floor(Math.random() * colors.length)];
				}
			} else {
				hex += Math.random() > 0.5 ? "4" : "C";
				hex += Math.random() > 0.5 ? "4" : "C";
				hex += Math.random() > 0.5 ? "1234" : "0000";
			}
			return hex;
		},
		randomHexArray: function() {
			var randomLength = Math.floor(Math.random() * 10 + 4);
			var array = [];
			for (var i = 0; i < randomLength; i++) {
				array.push(this.randomHex());
			}
			return array;
		}
	}
}

resources.bg = {
	opacity: 0,
	pattern: new Trianglify({noiseIntensity: 0, x_gradient: resources.colors.randomHexArray(), y_gradient: resources.colors.randomHexArray(), cellsize: 1000, fillOpacity: this.opacity, strokeOpacity: this.opacity}),
	height: function() {
		return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,document.body.offsetHeight, document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);
	},
	setBgImage: function() {
        document.body.style.backgroundImage = this.pattern.generate(document.body.clientWidth + 100, this.height() + 100).dataUrl;
	}
}
