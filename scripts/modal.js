/* //CRIAR MODAL
const buttonOpenModal = document.querySelector(".open_modal");
console.log(buttonOpenModal)

buttonOpenModal.addEventListener ("click", function () {
        
        const modalId = buttonOpenModal.getAttribute("data-modal-control");
        document.getElementById(modalId).classList.toggle("show-modal");

        const id = insertedValues.length + 1;
        const botaoEntrada = document.getElementById("1");
        const botaoSaida = document.getElementById("2");
        let resultBotao = 0;

        botaoEntrada.addEventListener("click", function (event1) {
        event1.preventDefault();
        resultBotao = 1;
        });
        botaoSaida.addEventListener("click", function (event2) {
        event2.preventDefault();
        resultBotao = 2;
        });

        const buttonSave = document.getElementById("bt_insert");
        buttonSave.addEventListener("click", function (event) {
            event.preventDefault();

            const value = document.getElementById("input_form").value;

            insertedValues.push({
                id: id,
                value: Number(value),
                categoryID: resultBotao,
            });
            console.log(insertedValues)
            
            renderCards(insertedValues)
            document.getElementById(modalId).classList.remove("show-modal");
            //incrementarPreco (insertedValues);
        });
    })  */

/* function createTemplateModal(){

    //criando as tags template
    let tagDivContainerBackground = document.createElement("div")
    let tagDivContainerModal = document.createElement("div")
    let tagDivModalHeader = document.createElement("div")
    let tagModalTitle = document.createElement("h2")
    let tagButtonCloseModal = document.createElement("button")
    let tagModalDescription = document.createElement("p")
    let tagModalForm = document.createElement("form")
    let tagFormLabel = document.createElement("label")
    let tagFormInput = document.createElement("input")
    let tagFormText = document.createElement("p")
    let tagFormButtonEntry = document.createElement("button")
    let tagFormButtonOutput = document.createElement("button")
    let tagDivFormFooter = document.createElement("div")
    let tagFormButtonCancel = document.createElement("button")
    let tagFormButtonSave = document.createElement("button")

    //inserindo classes

    //alimentando
    tagModalTitle.innerText = "Registro de valor"
    tagButtonCloseModal.innerText = "X"
    tagModalDescription.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    tagFormLabel.innerText = "Valor"
    tagFormInput



    //apensando
    
}*/
const buttonOpenModal = document.querySelectorAll("[data-modal-control]");

buttonOpenModal.forEach((button)=>{

  button.addEventListener("click", function () {
  const modalId = button.getAttribute("data-modal-control");
  document.getElementById(modalId).classList.toggle("show-modal");
});
})


function addModal() {

  
  
  const id = insertedValues.length + 1;
  const botaoEntrada = document.getElementById("1");
  const botaoSaida = document.getElementById("2");
  let resultBotao = 0;

  botaoEntrada.addEventListener("click", function (event1) {
    event1.preventDefault();
    resultBotao = 1;
  });
  botaoSaida.addEventListener("click", function (event2) {
    event2.preventDefault();
    resultBotao = 2;
  });

  const buttonSave = document.getElementById("bt_insert");
  buttonSave.addEventListener("click", function (event) {
    event.preventDefault();

    const value = document.getElementById("input_form").value;

    insertedValues.push({
      id: id,
      value: Number(value),
      categoryID: resultBotao,
    });
    
    buttonOpenModal.forEach((button)=>{
    const modalId = button.getAttribute("data-modal-control");
    document.getElementById(modalId).classList.remove("show-modal");
    })

    renderCards(insertedValues);

  });
}

addModal();