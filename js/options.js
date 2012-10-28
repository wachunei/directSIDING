$(document).ready(function() {
		optsSiding();
});

function optsSiding() { 

	var usuario = localStorage.getItem("dS_user");
	var autologin = localStorage.getItem("dS_autologin");
	var autoingcursos = localStorage.getItem("dS_ingcursos");
	var currenttab = localStorage.getItem("dS_currenttab")
	var iconogris = localStorage.getItem("dS_gray");
	
	var recordado = (usuario != null);
	if(recordado) {
		$("#rem_user").prepend(usuario);
		$("#auto_login").attr("checked",(autologin=="true"));
		$("#auto_ingcursos").attr("checked",(autoingcursos == "true"));
		$("#currenttab").attr("checked",(currenttab == "true"));
	} else {
		disableopts();
	}

	$("#icono_gris").attr("checked",(iconogris == "true"));
	
	$("#auto_login").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_autologin", "true");
		} else {
			localStorage.setItem("dS_autologin", "false");
		}
	});
	
	$("#auto_ingcursos").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_ingcursos", "true");
		} else {
			localStorage.setItem("dS_ingcursos", "false");
		}
	});
	
	$("#currenttab").change(function() {
		if($(this).is(':checked')) {
			localStorage.setItem("dS_currenttab", "true");
		} else {
			localStorage.setItem("dS_currenttab", "false");
		}
	});
	

	$("#forget").click(function(e) {
		localStorage.clear();
		disableopts();
	});

	/*$("#icono_gris").change(function(){
		if($(this).is(':checked')) {
			localStorage.setItem("dS_gray", "true");
		} else {
			localStorage.setItem("dS_gray", "false");
		}
	});*/

	if(!navigator.onLine) {
		$("#share").hide();
	}

	function disableopts() {
		$("#rem_user").html("Ninguno").addClass("disabled");
		$("#forget").hide();
		$("#auto_login").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#auto_ingcursos").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#currenttab").attr("disabled","disabled").attr("checked",false).closest("div").addClass("disabled");
		$("#aviso_logueado").removeClass("alertoff");
	}
	
}