window.onload = function () {
	var header = document.getElementsByClassName('icon')[0];
	header.style.cursor = 'pointer';
	header.className = 'icon-sun';
	header.onclick = function () {
		Goodnight.toggle();
		return false;
	};
};
