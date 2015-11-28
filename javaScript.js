$(document).ready(function () {
    $("form").submit(function (e) {
        $(".rquired").each(function (input) {

            var valor = $(this).val();
            var mesagem = $(this).attr("placeholder");

            if (!validacampo(valor, mesagem)) {
                e.preventDefault();
            }
        });
    });
});

function validacampo(campo, mensagem) {
    if (campo == null || campo == "") {
        alert(mensagem);
        return false;
    }
    return true;
}