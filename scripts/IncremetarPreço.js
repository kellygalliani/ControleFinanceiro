let totalPreco = 0
let totalValue = document.getElementById("totalValue")

function atualizarTotal (){

const valuesSum = insertedValues.reduce((previousValue, currentValue) =>{
   
   return previousValue + currentValue.value
}, 0)

   totalValue.innerText = `R$ ${valuesSum}`
}
