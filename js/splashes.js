var splashes = {
	list: [
		"Uses jQuery!",
		"There's no place like 127.0.0.1!",
		"window.alert(\"Hello, World!\")",
		"HTML5!",
		"CSS3!",
		"PHP Free!",
		"Animation!"
	],
	getSplash: function () {
		var index = Math.floor(Math.random() * this.list.length);
		return this.list[index];
	},
	setSplash: function() {
		$("#splash").text(this.getSplash());
	}
}