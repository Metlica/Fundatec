function validarFormulario() {
    var form = document.forms["cadastroForm"];

    var nome = form["fname"].value;

    var email = form["femail"].value;

    var senha = form["fsenha1"].value;

    var repitasenha = form["fsenha2"].value;

    var v = validacampo


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

function soma() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return total;
    //alert(total);
}

function executa(numero, operacao) {
    alert(operacao(numero, numero))
}

function multiplicacao(x, y) {
    return x * y;
}

var car = {
    marca: "Fiat",
    modelo: "500",
    ano: 2010,
    cor: "Azul"
};

function carshow() {
    var uno = new carro("Fiat", "UNO");
    var gol = uno;
    gol.modelo = "gol";
    uno.show();
    gol.show();
    //    var gol = new carro("VW", "Gol");
    //    gol.show();

}

function carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

carro.prototype.show = function () {
    alert(this.modelo);
}