var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var massa = prompt("Digite peso do objeto na terra");
var planeta = prompt("Você quer ver o peso do objeto em marte ou jupter?");
var result;

if(planeta == "marte"){
    result = (massa / gTerra )* gMarte;

    document.write("O peso do objeto em Marte é: " + result);
}else if(planeta == "jupter"){
    result = (massa / gTerra )* gJupter;

    document.write("O peso do objeto em Marte é: " + result);
}else {
    document.write("Não posso calcula peso nesse planeta.");
}