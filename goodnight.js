(function(window){
	"use strict";
	function goodnight() {
		var Goodnight = {};
		var hours = new Date().getHours();

		Goodnight.AM = 6; // 6AM
		Goodnight.PM = 18; // 6PM

		Goodnight.css = function(path) {
			if (hours >= Goodnight.PM || hours < Goodnight.AM) {
				var dark = document.createElement("link");
				dark.rel = "stylesheet";
				dark.href = path || "styles/dark.css";
				document.getElementsByTagName("head")[0].appendChild(dark);
			}
		};

		return Goodnight;
	}

	window.Goodnight = goodnight();
}(window));
