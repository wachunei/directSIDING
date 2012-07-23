$(document).ready(function () {
    directSiding();
});

function directSiding() {

	if (!navigator.onLine) {
		$("#offline").fadeIn("slow");
	}

	cargaCookies();

	setTimeout(function () {$('#user-siding').focus(); }, 100);
	
	$('#btncerrar').click(function (e) { e.preventDefault(); window.close(); });
	$("#btnconfig").click(function (e) {
		e.preventDefault();
		chrome.tabs.create({'url': chrome.extension.getURL("options.html")});
	});
	
    $('input').keyup(function (e) {
		checkea_boton();
    });
	
	$("h1").click(function (e) {
		if (localStorage.getItem("dS_currenttab") === "true") {
			chrome.tabs.update({'url': "https://intrawww.ing.puc.cl/siding/index.phtml"}, function () {
				window.close();
			});
		} else {
			chrome.tabs.create({'url': "https://intrawww.ing.puc.cl/siding/index.phtml"});
		}
    });
	
	$("input[type=submit]").click(function (e) {
		guardaCookies();
		e.preventDefault();
		localStorage.setItem("dS_primera", "true");
		if (localStorage.getItem("dS_currenttab") === "true") {
			chrome.tabs.update({url: chrome.extension.getURL("autologin.html")}, function () {
				window.close();
			});
		} else {
			$("#form-siding").submit();
		}
		
	});
	
	function checkea_boton() {
		var user, pass;
		user = $("#user-siding").val();
		pass = $("#password-siding").val();
		if (user.length !== 0 && pass.length !== 0) {
			$('#btnsub').removeAttr("disabled");
		} else {
			$('#btnsub').attr("disabled", "disabled");
		}
	}
	
	
	function cargaCookies() {
		if (localStorage.getItem("dS_remember") === "true") {
			if (localStorage.getItem("dS_autologin") === "true") {
				$("#content").css({visibility: "hidden"});
				localStorage.setItem("dS_primera", "true");
				if (localStorage.getItem("dS_currenttab") === "true") {
					chrome.tabs.update({url: chrome.extension.getURL("autologin.html")}, function () {
						window.close();
					});
				} else {
					chrome.tabs.create({url: chrome.extension.getURL("autologin.html")});
				}
			}
			$("#user-siding").val(localStorage.getItem("dS_user"));
			$("#password-siding").val(localStorage.getItem("dS_pass"));
			$("#check_remember").attr("checked", "true");
			
		} else {
			$('#btnsub').attr('disabled', 'disabled');
		}
	}


	function guardaCookies() {
		if ($("#check_remember").attr("checked")) {
			localStorage.setItem("dS_user", $("#user-siding").val());
			localStorage.setItem("dS_pass", $("#password-siding").val());
			localStorage.setItem("dS_remember", "true");
		} else {
			localStorage.clear();
		}

	}
	
	
}