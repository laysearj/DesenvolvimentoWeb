/*window.console.log("começo do script"); //não precisa colocar o window

document.write("Está é uma linha"); //escreve a linha
document.writeln("Está é uma linha com writeln"); //escreve e separa a linha
document.write("Outra linha");

//window.location.reload(); //recarregar a tela

console.log("cheguei no fim do script");*/


//segunda parte de code
/*
var p = document.getElementById("paragrafo");

p.innerHTML = "texto qualquer"

*/

//desenhando:

var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var x = 50;
var y = 50;

papel.beginPath();
papel.strokeStyle = "red";
pape.lineWidth = 3;
papel.moveTo(x, y);
papel.lineTo(200, 200);
papel.stronke();
papel.closePath();



