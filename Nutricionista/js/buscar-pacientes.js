//busca o botão
var botaoAdicionar = document.querySelector("#buscar-pacientes");

//ouve o evento do click no botao
botaoAdicionar.addEventListener("click", function() {

    //abre a nova aba
    var xhr = new XMLHttpRequest();

    //escreve na nova aba
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //carrega as informações novas
    xhr.addEventListener("load", function() {
        
        var erroAjax = document.querySelector("#erro-ajax");

        //200 é deu certo
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);//transforma em JS
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else { //404 por exemplo que é erro
            erroAjax.classList.remove("invisivel");
        }
    });

    //envia para nós
    xhr.send();
});