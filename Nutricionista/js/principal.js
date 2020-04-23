//Para alterar um elemnto dentro do html

var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista"

/********************************************/

//essa # é pra selecionar id
var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    // . é classe
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var valido = true;

    if(peso < 0 || peso > 500) {
        console.log("Peso Invalido");
        valido =  false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido")
    }

    if(altura < 0 || altura > 2.40) {
        console.log("Peso Invalido");
        valido =  false;
        tdImc.textContent = "Altura Invalido";
        paciente.classList.add("paciente-invalido")
    }

    if( valido == true) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);    
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#fo;rm-adicona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
})

