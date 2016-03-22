window.onload = function () {
	var header = document.getElementsByTagName('i')[0];
	header.style.cursor = 'pointer';
	header.onclick = function () {
		Goodnight.toggle();
		return false;
	};
};
