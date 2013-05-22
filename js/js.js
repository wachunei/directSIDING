$(document).ready(function () {
    directSiding();
});

function directSiding() {

	// Variables
	var user, pass, url_home, url_cursos, url_selected;

	// URLs
	url_home = "https://intrawww.ing.puc.cl/siding/index.phtml";
	url_cursos = "https://intrawww.ing.puc.cl/siding/dirdes/ingcursos/cursos/vista.phtml";

	// Check connectivity, displays alert
	if (!navigator.onLine) {
		$("#offline").fadeIn("slow");
	}

	cargaCookies();
	
	// If automatic login is activated, then login, load saved data otherwise
	if (get_opcion("dS_autologin") === "true") {
		login(get_opcion("dS_user"),get_opcion("dS_pass"),true);
	}
	
	// Close pop-up
	$('#btncerrar').click(function (e) { e.preventDefault(); window.close(); });
	
	// Open Settings
	$("#btnconfig").click(function (e) {
		e.preventDefault();
		chrome.tabs.create({'url': chrome.extension.getURL("options.html")});
	});
	
	// Check both inputs 
    $('input').keyup(function (e) {
		checkea_boton();
    });
	
	// Send Form
	$("form").submit(function (e) {
		guardaCookies();
		e.preventDefault();
		user = $("#user").val();
		pass = $("#password").val();
		login(user,pass,true);
	});
	

	function checkea_boton() {
		user = $("#user").val();
		pass = $("#password").val();
		if (user.length !== 0 && pass.length !== 0) {
			$('#btnsub').removeAttr("disabled").removeClass("disabled");
		} else {
			$('#btnsub').attr("disabled", "disabled").addClass("disabled");
		}
	}
	
	
	function cargaCookies() {
		if (get_opcion("dS_remember") === "true") {
			$("#user").val(get_opcion("dS_user"));
			$("#password").val(get_opcion("dS_pass"));
			$("#check_remember").attr("checked", "true");
		} else {
			$('#btnsub').attr('disabled', 'disabled').addClass("disabled");
		}
	}

	function guardaCookies() {
		if ($("#check_remember").is(":checked") === true) {
			localStorage.setItem("dS_user", $("#user").val());
			localStorage.setItem("dS_pass", $("#password").val());
			localStorage.setItem("dS_remember", "true");
		} else {
			localStorage.clear();
		}
		
	}

	function login(user,pass,open) {
		$("form").addClass("hidden");
		$("#loader").removeClass("hidden");
		$.get(url_home,{"login":user,"passwd":pass}, function(data) {
			if(open){
				openTab();
				window.close();
			}
		});
	}

	function openTab() {
		if (get_opcion("dS_ingcursos") === "true") {
			url_selected = url_cursos;
		} else {
			url_selected = url_home;
		}

		if (get_opcion("dS_currenttab") === "true") {
			chrome.tabs.update({url: url_selected});
		} else {
			chrome.tabs.create({url: url_selected});
		}
	}

	function get_opcion(opcion) {
		return localStorage.getItem(opcion);
	}
	
	function set_opcion(opcion, valor) {
		localStorage.setItem(opcion, valor);
	}
	
}