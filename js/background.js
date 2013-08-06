$(document).ready(function() {
    //background();
});

function background() {	
	var prefix ="PHPSESSID"
	var ds_cookie = prefix+"="+document.cookie.split(prefix+"=")[1];

	$("a[href*='descarga.phtml?']").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href")
		console.log("download clicked\n | href:"+href+"\n");
		$.get(href, function(data,status,xhr) {
			var archivo = new Blob([data], {type: 'application/pdf'});
			var archivo_url = window.URL.createObjectURL(archivo);
			window.open(archivo_url);
		});
	});

}