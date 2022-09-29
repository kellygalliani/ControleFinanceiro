//RENDER DADOS DO ARRAY EM TELA
const ulListCards = document.querySelector("ul")

function listCards (lista, referenciaHtml){
    
    referenciaHtml.innerHTML =""

    //PERCORRENDO CARDS 
    for(let i = 0; i < lista.length; i++){
        
        //ACESSANDO CARDS
        let cards = lista[i]
  
        //CRIANDO TEMPLATE --> LI
        let template = criarTemplateCard(cards)
  
        //JOGANDO TEMPLATE NA INTERFACE
        referenciaHtml.appendChild(template)
    }
  }
  
  listCards (insertedValues, ulListCards)

function criarTemplateCard(cards){

    //criando as tags template
    let tagLi = document.createElement("li")
    let tagValue = document.createElement("h3")
    let tagDivLi = document.createElement("div")
    let tagTag = document.createElement("button")
    let tagImgTrash= document.createElement("img")

    //adicionando classes
    tagLi.classList.add(`${cards.id}`)
    tagLi.classList.add("li_value")
    tagValue.classList.add("text1")
    tagDivLi.classList.add("li_buttons")
    tagTag.classList.add("button_tag")
    tagImgTrash.classList.add("trash")

    //alimentando tags
    tagValue.innerText = `R$ ${cards.value}`
    if(cards.categoryID === 1){
        tagTag.innerText = "Entrada"
    } else{
        tagTag.innerText = "Saída"
    }
    tagImgTrash.src = "../../assets/trash.svg"

    //append
    tagLi.append(tagValue, tagDivLi)
    tagDivLi.append(tagTag, tagImgTrash)

    return tagLi
}

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