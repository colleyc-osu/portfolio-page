function viewFile(event, fileName) {
	var fileTexts = Object.values(document.getElementsByClassName('file-text'));

	fileTexts.forEach(function (section) {
		section.hidden = true;
	});

	document.getElementById(fileName).hidden = false;
}