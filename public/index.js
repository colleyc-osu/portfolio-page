function sendPassword (inputtedPassword) {

	var request = new XMLHttpRequest();

	var currentURL = window.location.pathname;
	console.log(currentURL);
	var requestURL = currentURL + 'sendPwd';
	request.open('POST', requestURL);

	var requestBody = inputtedPassword;

	request.addEventListener('load', function (event) {
		//
	});

	request.send(reqBody);

}

document.getElementById('pw-submit').onclick = function() {
	var password = document.getElementById('pw-prompt').value;
	if (password) {
		sendPassword(password);
	}
}