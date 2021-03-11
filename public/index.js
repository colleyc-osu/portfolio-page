function sendPassword (inputtedPassword) {

	var request = new XMLHttpRequest();

	var currentURL = window.location.pathname;
	var requestURL = currentURL + '/sendPwd';

	request.open('POST', requestURL);

	var requestBody = JSON.stringify({password: inputtedPassword});
	request.setRequestHeader('Content-Type', 'application/json');

	request.addEventListener('load', function (event) {
		if (event.target.status === 200) {
			var truePage = event.target.response;
			document.documentElement.innerHTML = truePage;

			//if you include this js in index, it doesnt load correctly because it
			//	first loads on the pwd page and remains null
			var newjs = document.createElement("script");
			newjs.src = "/truePage.js";
			newjs.charset = "utf-8";
			newjs.defer = true;
			document.head.appendChild(newjs);

			// below works, but bad practice
			//document.open();
			//document.write(truePage);
			//document.close();
		}
		else {
			alert("Password was incorrect.");
		}
	});

	request.send(requestBody);

}

document.getElementById('pw-submit').onclick = function() {

	var password = document.getElementById('pw-prompt').value;
	if (password) {
		sendPassword(password);
	}
}