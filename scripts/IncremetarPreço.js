let totalPreco = 0
let totalValue = document.getElementById("#totalValue")

const valuesSum = insertedValues.value.reduce((previousValue, currentValue) =>{
   totalPreco = previousValue + currentValue
   return totalValue.innerText = `R$ ${totalPreco}`
})
