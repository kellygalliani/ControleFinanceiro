let insertedValuesfiltered = [];

const buttonEntradaFilter = document.getElementById("entry")

buttonEntradaFilter.addEventListener("click" ((insertedValues)=>{
    
    insertedValues.filter((value) => {
    if (value.categoryID === 1){

        insertedValuesfiltered.push(value)
    }
    return listCards (insertedValuesfiltered, ulListCards)
})
}))


const buttonSaidaFilter = document.getElementById("output")
const filterSaida = insertedValues.filter((value) => {
    if (value.categoryID === 2){
        insertedValuesfiltered.push(value)
        
    }
    return listCards (insertedValuesfiltered, ulListCards)
})

const buttonTodosFilter = document.getElementById("all")
const filterTodos = insertedValues.filter((value) => {
    if (value.categoryID === 1 || 2){
        insertedValuesfiltered.push(value)
        
        
    }
    return listCards (insertedValuesfiltered, ulListCards)
})


//Como remover os outros que não são entrada?
