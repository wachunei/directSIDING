$(document).ready(function() {
    autolog();
});

function autolog() {
    $("#user-siding").val(localStorage.getItem("dS_user"));
    $("#password-siding").val(localStorage.getItem("dS_pass"));
    localStorage.setItem("dS_primera", "true");
    $("#form-siding").submit();
}