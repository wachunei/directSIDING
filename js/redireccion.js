	//chrome.extension.sendRequest({method: "getUser"}, function(response) {
	//			redireccion(response);
	// });

	//function redireccion(response){
	//	if(response.user != null){
	//		window.location.href = chrome.extension.getURL("autologin.html");
	//	} else {
	//		window.location.href = chrome.extension.getURL("login.html");
	//	}
	//}
window.location.href = chrome.extension.getURL("login.html");