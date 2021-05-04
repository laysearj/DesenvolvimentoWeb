function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    //promessa
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        //esse for faz mágica namoral
        //ele pega o valor que ja ta dentro e faz uma concatenação
        //oq ta entre o $ é pra pegar da epi
        for( state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs();

function getCities(event) {
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");

    const ufValue = event.target.value;

    const indexOfSelectState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        //esse for faz mágica namoral
        //ele pega o valor que ja ta dentro e faz uma concatenação
        //oq ta entre o $ é pra pegar da epi
        
        for( city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false;
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);

//Itens de Coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    //add or remove class
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    //verificar se existe itens selecionados, se sim pegar os itens selecionadas
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = (item == itemId);
        return itemFound; //retornar true or false
    })

    //se já estiver selecionado, tirar da seleção
    if(alreadySelected >0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId; //false
            return itemIsDifferent;
        })

        selectedItems = filteredItems;
    }else {
        //se não tiver selecionado
        //add ao array
        selectedItems.push(itemId);
    }

    //atualizar o campo escondido
    collectedItems.value = selectedItems;
}