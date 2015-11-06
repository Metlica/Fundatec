function validarFormulario() {
    var form = document.forms["cadastroForm"];

    var nome = form["fname"].value;

    var email = form["femail"].value;

    var senha = form["fsenha1"].value;

    var repitasenha = form["fsenha2"].value;

    if (validacampo(nome, "prencha seu nome") &&
        validacampo(email, "preencha seu email") &&
        validacampo(senha, "prencha sua senha") &&
        validacampo(repitasenha, "digite novamente sua senha") &&
        validasenha(senha, repitasenha)) {
        alert("Obrigado por se cadastrar");
        return true;
    }
    return false;


}

function validacampo(campo, mensagem) {
    if (campo == null || campo == "") {
        alert(mensagem);
        return false;
    }
    return true;
}
    
function validasenha(senha, repitasenha) {
    if (senha != repitasenha) {
        alert("O seguinte cara, as senha tem que ser iguais flw valeu");
        return false;
    }
    return true;
}
        