//RENDER DADOS DO ARRAY EM TELA

const createCard = (card, list) =>{
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

    tagImgTrash.addEventListener("click", (event)=>{
        list.splice(event, 1)
        tagLi.remove()
        atualizarTotal()
        empty(list)
    })

    tagLi.append(tagValue, tagDivLi)
    tagDivLi.append(tagTag, tagImgTrash)

    return tagLi
}

const renderCards = (list) =>{

    const ulListCards = document.querySelector("ul")
    console.log(list)

    ulListCards.innerHTML = ""

    list.forEach((card) =>{
        const cardCreated = createCard(card, list)
        ulListCards.appendChild(cardCreated)
        
    })
    empty(list)
    atualizarTotal ()
}

renderCards(insertedValues)

function empty (list){

    let divEmpty = document.querySelector(".empty_sec")

    if(list.length){
        divEmpty.classList.add("hidden")
    } else {
        console.log(list)
        divEmpty.classList.remove("hidden")
    }
}

empty(insertedValues)