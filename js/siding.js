$(document).ready(function() {
		siding();
});

function siding() { 
		
		/** Redirigir a ingcursos **/
		function apaga() {
			chrome.extension.sendRequest({method: "apaga"},function(response) {
				console.log(response);
			});
		}

		chrome.extension.sendRequest({method: "getIngcursos"}, function(response) {
			redirigir(response);
		});
		
		function redirigir(respuesta) {
			var redirige = respuesta.redirige;
			var desdeds = respuesta.desde_dS;
			var urlCursos = "https://intrawww.ing.puc.cl/siding/dirdes/ingcursos/cursos/index.phtml";
			if((redirige == "true") && (desdeds == "true") && (window.location.href!=urlCursos)){
				window.location.href = urlCursos;	
				apaga();
			} 
		}

		/** Click en salir **/
		$("a[href$='logout.phtml']").click(function(e){
			$.ajax($(this).attr("href")).done(function() {});
			window.location.href = chrome.extension.getURL("login.html");
			e.preventDefault();

		});
 }