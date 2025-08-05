const handleTipValue = (event) =>{

    // console.log(event.target.textContent)

    let tipPercentage = document.querySelector(".tipValue");
    
    let tipPercentValue = event.target.textContent.split("%")[0]

    tipPercentage.value = tipPercentValue;
}

function handleCalculate() {
    let billAmountValue = document.querySelector(".billValue").value;
    let tipPercentageValue = document.querySelector(".tipValue").value;
    let personCountValue = document.querySelector(".personCount").value;

    let tipAmountValue = document.querySelector(".tipAmountValue");
    let totalAmountValue = document.querySelector(".totalAmountValue");

    let totalTipAmount = billAmountValue * (tipPercentageValue/100) 
    let tipPerPerson =  (totalTipAmount / personCountValue).toFixed(2);
    let totalAmount = ((Number(billAmountValue)+Number(tipPerPerson)) / personCountValue).toFixed(2);

    tipAmountValue.textContent = "Rs "+tipPerPerson
    totalAmountValue.textContent = "Rs "+totalAmount
}


const handleReset= ()=>{
    let billAmount = document.querySelector(".billValue");
    let tipPercentage = document.querySelector(".tipValue");
    let personCount = document.querySelector(".personCount");

    let tipAmount = document.querySelector(".tipAmountValue");
    let totalAmount = document.querySelector(".totalAmountValue");

    billAmount.value = "";
    tipPercentage.value = "5";
    personCount.value = "1";

    tipAmount.textContent = "Rs 0"
    totalAmount.textContent = "Rs 0"

}