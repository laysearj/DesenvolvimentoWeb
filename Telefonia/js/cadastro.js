var celulares = document.querySelectorAll(".celular");

for(var i = 0; i < celulares.length; i++) {

    var celular = celulares[i];

    var tdCodigo = celular.querySelector(".info-codigo");
    var codigo = tdCodigo.textContent;

    var tdModelo = celular.querySelector(".info-modelo");
    var modelo = tdModelo.textContent;

    var tdPreco = celular.querySelector(".info-preco");
    var preco = tdPreco.textContent;
    
    var tdMarca = celular.querySelector(".info-marca");
    var marca = tdMarca.textContent;

    var tdCor = celular.querySelector(".info-cor");
    var cor = tdCor.textContent;
}

var botaoAdicionar = document.querySelector("#adicionar-cadastro");
botaoAdicionar.addEventListener("click", function(){
    
    event.preventDefault();

    var form = document.querySelector("#form-adicona");

    var codigo = form.codigo.value;
    var modelo = form.modelo.value;
    var preco = form.preco.value;
    var marca = form.marca.value;
    var cor = form.cor.value;

    var celularTr = document.createElement("tr");

    var codigoTd = document.createElement("td");
    var modeloTd = document.createElement("td");
    var precoTd = document.createElement("td");
    var marcaTd = document.createElement("td");
    var corTd = document.createElement("td");

    codigoTd.textContent = codigo;
    modeloTd.textContent = modelo;
    precoTd.textContent = preco;
    marcaTd.textContent = marca;
    corTd.textContent = cor;

    celularTr.appendChild(codigoTd);
    celularTr.appendChild(modeloTd);
    celularTr.appendChild(precoTd);
    celularTr.appendChild(marcaTd);
    celularTr.appendChild(corTd);


    var tabela = document.querySelector("#tabela-celulares");

    tabela.appendChild(celularTr);
    
})