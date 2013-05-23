$(document).ready(function() {
		optsSiding();
});

function optsSiding() { 

	// Variables
	var user = localStorage.getItem("dS_user");
	var autologin = localStorage.getItem("dS_autologin");
	var autoingcursos = localStorage.getItem("dS_ingcursos");
	var currenttab = localStorage.getItem("dS_currenttab")
	var remembered = (localStorage.getItem("dS_remember") === "true");

	// Load saved data
	if(remembered) {
		$("#rem_user").prepend(user);
		$("#auto_login").attr("checked",(autologin==="true"));
		$("#auto_ingcursos").attr("checked",(autoingcursos === "true"));
		$("#currenttab").attr("checked",(currenttab === "true"));
	} else {
		disableopts();
	}

	// Change Options

	// Automatic login
	$("#auto_login").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_autologin", "true");
		} else {
			localStorage.setItem("dS_autologin", "false");
		}
	});

	// IngCursos redirect
	$("#auto_ingcursos").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_ingcursos", "true");
		} else {
			localStorage.setItem("dS_ingcursos", "false");
		}
	});
	
	// Use the same tab
	$("#currenttab").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_currenttab", "true");
		} else {
			localStorage.setItem("dS_currenttab", "false");
		}
	});

	// Clear data
	$("#forget").click(function(e) {
		localStorage.clear();
		disableopts();
	});

	// Clear data
	function disableopts() {
		$("#rem_user").html("Ninguno").addClass("disabled");
		$("#forget").hide();
		$("#auto_login").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#auto_ingcursos").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#currenttab").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#aviso_logueado").removeClass("alertoff");
	}

}