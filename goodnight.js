(function(window){
	"use strict";
	function goodnight() {
		var Goodnight = {};
		var hours = new Date().getHours();

		Goodnight.from = 18; // 6PM
		Goodnight.to = 6;    // 6AM

		Goodnight.css = function(path) {
			if (hours >= Goodnight.from || hours < Goodnight.to) {
				var dark = document.createElement("link");
				dark.rel = "stylesheet";
				dark.href = path || "dark.css";
				document.getElementsByTagName("head")[0].appendChild(dark);
			}
		};

		return Goodnight;
	}

	window.Goodnight = goodnight();
}(window));
