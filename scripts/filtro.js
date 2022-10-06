
const buttonEntradaFilter = document.getElementById("entry")
const ulListCards = document.querySelector("ul")

function filter (){

    //chamar todos os botões do filtro
    const filterButtons = document.querySelectorAll(".button_outline")
    
    filterButtons.forEach(button => {
        button.addEventListener("click", ()=> {
            ulListCards.innerHTML = ""
            
            const buttonTextFilter = button.innerText
            
            if(buttonTextFilter === "Todos"){
                return renderCards(insertedValues)
            }
            
                const filteredProducts = filterProduct(buttonTextFilter, insertedValues)
                return renderCards(filteredProducts)

        } )
    })
}

function filterProduct(buttonText, array){

    if(buttonText === "Entradas"){
        
        let entryFilter = array.filter((product) => {
            let category = product.categoryID === 1
            return category 
        })
        return entryFilter 

    } else if(buttonText === "Saídas"){
        let outPutFilter = array.filter(product => product.categoryID === 2)
        return outPutFilter
    }
    
}
filter ()