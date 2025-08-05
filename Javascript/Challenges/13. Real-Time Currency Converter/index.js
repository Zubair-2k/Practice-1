

async function getCurrency(fromCurrencyFieldValue,toCurrencyFieldValue){
    try{
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyFieldValue}`)
        let data = await response.json()
    
        console.log(data.rates)
        return data.rates[toCurrencyFieldValue]
    }
    catch(error){
        console.log("Error : ",error)
    }
    
}

async function getValue(){
    let currencyDisplay = document.querySelector(".currencyDisplay")

    let amountInputValue = document.querySelector(".amountInput").value
    // let amountInputValue = e.target.value

    let fromCurrencyFieldValue = document.querySelector(".fromCurrencyField").value
    let toCurrencyFieldValue =  document.querySelector(".toCurrencyField").value

    let toCurrencyValue = await getCurrency(fromCurrencyFieldValue,toCurrencyFieldValue);
    console.log(toCurrencyValue)

    let totalCurrencyValue = (amountInputValue * toCurrencyValue).toFixed(2)
    currencyDisplay.textContent = amountInputValue + " " + fromCurrencyFieldValue + " = " + totalCurrencyValue + " " + toCurrencyFieldValue
}



const handleAmount = async () =>{
    console.log("Hello")
    await getValue()
}

const handleFromCurrency = async() =>{
    // getValue()
    await getValue()
}

const handleToCurrency = async() =>{
    await getValue()
}