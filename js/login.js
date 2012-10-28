$(document).ready(function () {
    login();
});

function login() {
		
	var usuario = localStorage.getItem("dS_user"), recordado = (usuario !== null);
	if (recordado) {
		$(".user").text(usuario);
	} else {
		$(".logLeft").hide();
		$(".logRight").css({float: "none", margin: "0 auto", padding: "0 0 0 35px"});
	}

	$(".user").click(function () {
		window.location.href = chrome.extension.getURL("autologin.html");
	});

}