(function(window){
	"use strict";
	function goodnight() {
		var Goodnight = {};
		var hours = new Date().getHours();
		Goodnight.css = function(path) {
			if (hours > 17 || hours < 6) {
				var dark = document.createElement("link");
				dark.rel = "stylesheet";
				dark.href = path || "dark.css" || "styles/dark.css";

				document.getElementsByTagName("head")[0].appendChild(dark);
			}
		};

		return Goodnight;
	}

	window.Goodnight = goodnight();
}(window));