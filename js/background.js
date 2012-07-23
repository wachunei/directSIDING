chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
	if (request.method === "getIngcursos") {
		sendResponse({desde_dS: localStorage.getItem("dS_primera"), redirige: localStorage.getItem("dS_ingcursos")});
	} else if (request.method === "apaga") {
		localStorage.setItem("dS_primera", "false");
	} else if (request.method === "getUser") {
		sendResponse({user: localStorage.getItem("dS_user")});
	} else {
		sendResponse({}); //nada.
	}
});