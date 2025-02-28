// Criar cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input  amount para receber somente números.
amount.addEventListener("input", () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    // Caso o valor inserido não seja um número
    if(isNaN(total)){
      return alert("Por favor, digite o valor corretamente!")
    }

    total = formatCurrencyBRL(total).replace("R$", "")
    //Exibindo o resultado total
    result.textContent = `${total} Reais`
    
    
    // Aplica a classe que exibe o footer com display block
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe que exibe o footer com display block
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possivel converter.")
  }
}
// Função de formatação para o BRL
function formatCurrencyBRL(value){
  // Converte para o número para utiizar o toLocaleString
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}





