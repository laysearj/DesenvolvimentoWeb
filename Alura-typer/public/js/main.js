// $ = jQuerry
var tempoInicial =  $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(".tooltip").tooltipster({
    trigger: "custom"
});

$(document).ready(function(){

    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

});



function atualizaTamanhoFrase() {
    
    var frase = $(".frase").text(); //procura e guarde a frase
    var numPalavras = frase.split(" ").length; //função split separa com o elemento que eu coloco dentro
    var tamanhoFrase = $("#tamanho-frase"); //ta achando o lugar desse id
    tamanhoFrase.text(numPalavras); //altera o id

}

function atualizaTempoInicial(tempo) {

    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);

}


function inicializaContadores() {
    
    //função faça se estiver escrevendo -> dentro da função
    campo.on("input", function(){
        var conteudo = campo.val();//valor dentro do meu campo
        var qtdPalavras = conteudo.split(/\S+/).length-1; // S = space
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });

}


function inicializaCronometro() {

    //focus->quando entra no campo para digitar
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroId);//trava a função SetInterval
                finalizaJogo();
            }
        }, 1000);
    })

}

function inicializaMarcadores() {

    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });

}


function reiniciaJogo(){

    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha"); 
    campo.removeClass("borda-verde"); 

}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}
