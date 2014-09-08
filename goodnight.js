(function (g, ns) {
	"use strict";

	function gn() {
		var Goodnight = { AM: 6, PM: 18 }, hours = new Date().getHours(), ln = [];

		Goodnight.night = function () {
			return hours < this.PM ? hours < this.AM ? true : false : true;
		};

		Goodnight.css = function (path) {
			if (!path) {
				return;
			}

			var item  = document.createElement("link");
			item.rel = "stylesheet";
			item.href = path;
			ln.push(item);

			if (this.night()) {
				document.head.appendChild(item);
			}
		};

		Goodnight.toggle = function () {
			var i;
			
			for (i = 0; i < ln.length; i++) {
				if (ln[i].parentNode) {
					ln[i].parentNode.removeChild(ln[i]);
				} else {
					document.head.appendChild(ln[i]);
				}
			}
		};

		return Goodnight;
	}

	g[ns] = gn();
})(window, "Goodnight");