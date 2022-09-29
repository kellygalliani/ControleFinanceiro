let totalPreco = 0
let totalValue = document.getElementById("#totalValue")


function incrementarPreco(cards){
console.log(cards)
 for(let i = 0; i < cards.length; i++){
    totalPreco = totalPreco + cards[i].value
 }
 totalValue.innerText = `R$ ${totalPreco}`
}

function decrementarPreco(idProduto){
    for(let i = 0; i< data.length; i++){

       if(idProduto == data[i].id){
           totalPreco -= data[i].value
       }
    }
precoTotalCarrinho.innerText = `R$ ${totalPreco}`
}