//Dados da entidade
function populatesUf(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then( states => {

            for(const state of states){
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} <option>`
            }
        })
}


populatesUf()


function getCities(event){

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

   const ufValue = event.target.value;

   const indexOfSelectedState = event.target.selectedIndex
   stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} <option>`
        }

        citySelect.disabled = false;
    })
}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)



//Itens de coleta
//Pegar todas as li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [];

function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover uma classe com JavaScript

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id


    //verificar se existem items selecionados, se sim
    // pegar os items selecionados

    const alReadySelected = selectedItems.findIndex((item) => {

        const itemFound = item == itemId // essa linha de codigo será true ou false
        return itemFound;
    })


    //se já estiver selecionado, retirar da seleção
    if(alReadySelected >= 0){
        //remover item da seleção
        const filterdItems = selectedItems.filter(item =>{
            const itemsIsDifferent = item != itemId //false
            return itemsIsDifferent
        })

        selectedItems = filterdItems
    } else {
        //senão estiver selecionado, adicionar a seleção
        selectedItems.push(itemId)

    }

    //atualizar o campo escondido com os itens selecionados 
    collectedItems.value = selectedItems;    
    
}