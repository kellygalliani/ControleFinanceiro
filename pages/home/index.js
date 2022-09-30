//RENDER DADOS DO ARRAY EM TELA

const createCard = (card) =>{
    const {id, value, categoryID} = card

    let tagLi = document.createElement("li")
    tagLi.classList.add(`${id}`)
    tagLi.classList.add("li_value")

    let tagValue = document.createElement("h3")
    tagValue.classList.add("text1")
    tagValue.innerText = `R$ ${value}`

    let tagDivLi = document.createElement("div")
    tagDivLi.classList.add("li_buttons")

    let tagTag = document.createElement("button")
    tagTag.classList.add("button_tag")
    if(categoryID === 1){
        tagTag.innerText = "Entrada"
    } else{
        tagTag.innerText = "Saída"
    }

    let tagImgTrash= document.createElement("img")
    tagImgTrash.classList.add("trash")
    tagImgTrash.src = "../../assets/trash.svg"

    tagLi.append(tagValue, tagDivLi)
    tagDivLi.append(tagTag, tagImgTrash)

    return tagLi
}

const renderCards = (list) =>{
    
    const ulListCards = document.querySelector("ul")

    ulListCards.innerHTML =""

    list.forEach((card) =>{
        const cardCreated = createCard(card)
        ulListCards.appendChild(cardCreated)
    })
}

renderCards(insertedValues)



//ATUALIZAR A SOMA DOS VALORES
/* function incrementarSoma (){}
function decrementarSoma (){} */

//FILTROS
/* filtrar os dados a partir do ID passado como argumento e 
atualizar o array's de objetos insertedValuesfiltered */

/* function filter (){
    //OUVIR O CLIQUE E VER O ID do botão - se é 0 ou 1
    //COMPARAR COM A FUNÇÃO valuesCategory
    //ENVIAR OS ITENS COM DO ARRAY QUE SÃO 0 ou 1 para dentro do insertedValuesfiltered
    //RENDERIZAR OS ITENS DO insertedValuesfiltered

} */