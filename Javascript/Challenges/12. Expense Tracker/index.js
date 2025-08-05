let transactions = document.querySelector(".transactions")
let noTransactions = document.querySelector(".noTransactions")

let expenseBtn =  document.querySelector(".expenseBtn")
let incomeBtn =document.querySelector(".incomeBtn")
let submitBtn =document.querySelector(".submitBtn")
let clearBtn = document.querySelector(".clearBtn")
let clearAllBtn = document.querySelector(".clearAllBtn")

let totalIncome = 0
let totalExpense = 0
let totalBalance = 0

expenseBtn.onclick=(e)=>{
    e.target.classList.add("active");
    if(incomeBtn.classList.contains("active")){
        incomeBtn.classList.remove("active")
    }
}

incomeBtn.onclick=(e)=>{
    e.target.classList.add("active");
    if(expenseBtn.classList.contains("active")){
        expenseBtn.classList.remove("active")
    }
}

clearAllBtn.onclick= () =>{
    localStorage.removeItem("transactionData");
    viewTransaction()
}

function viewTransaction(){
    let transactionData =  JSON.parse(localStorage.getItem("transactionData")) || [];
    let transactionsField = document.querySelector(".transactionsField") 

    let nameInput = document.querySelector(".nameInput")
    let amountInput = document.querySelector(".amountInput")
    let dateInput = document.querySelector(".dateInput")

    let expenseValue = document.querySelector(".expenseValue")
    let incomeValue = document.querySelector(".incomeValue")
    let totalBalanceValue = document.querySelector(".totalBalanceValue")
    
    transactionsField.innerHTML=""
    totalIncome = 0
    totalExpense = 0
    totalBalance = 0

    if(transactionData.length === 0){
        noTransactions.style.display = "block"
        clearAllBtn.style.display = "none"

        expenseValue.textContent = "- Rs. 0.00"
        incomeValue.textContent = "+ Rs. 0.00"
        totalBalanceValue.textContent = "Rs. 0.00"
   }
   else{    
 
        transactionData.forEach((data,index)=>{
            if(data.activeBtn){
            
                let newTransaction = document.createElement("div");
                
                newTransaction.classList.add("transactionsDetails");
                
                newTransaction.innerHTML = `<div class="transactionsNameContainer">
                                                <button class="clearBtn" onclick="clearDetails(${index})">X</button>
                                                
                                                <div class="transactionsNameDetails">
                                                    <h5 class="transactionsName">${data.nameInputValue}</h5>
                                                    <p class="transactionDate">${data.dateInputValue}</p>
                                                </div>
                                            </div>
                                            
                                            <p class="subtractBalance">- Rs. ${data.amountInputValue}.00</p>`
                
                newTransaction.style.display="flex"
                
                transactionsField.appendChild(newTransaction)
                
                totalExpense = totalExpense + Number(data.amountInputValue)
    
                expenseValue.textContent = "-" + " Rs. " + totalExpense + ".00"
                
                nameInput.value = "" 
                amountInput.value = ""
                dateInput.value = ""
                
            }
            else{
            
                let newTransaction = document.createElement("div");
                
                newTransaction.classList.add("transactionsDetails");
                
                newTransaction.innerHTML = `<div class="transactionsNameContainer">
                                                <button class="clearBtn" onclick="clearDetails(${index})">X</button>
                                                    
                                                <div class="transactionsNameDetails">
                                                <h5 class="transactionsName">${data.nameInputValue}</h5>
                                                    <p class="transactionDate">${data.dateInputValue}</p>
                                                </div>
                                            </div>
                                            
                                            <p class="addBalance">+ Rs. ${data.amountInputValue}.00</p>`
                
                newTransaction.style.display="flex"
                
                transactionsField.appendChild(newTransaction)
                
                totalIncome = totalIncome + Number(data.amountInputValue)
                
                incomeValue.textContent = "+" + " Rs. " + totalIncome + ".00"
                
                nameInput.value = "" 
                amountInput.value = "" 
                dateInput.value = ""
                
            }

            totalBalance = totalIncome - totalExpense;
            
            totalBalanceValue.textContent = "Rs. " + totalBalance +".00"
            
        })
        
        noTransactions.style.display = "none"
        clearAllBtn.style.display = "block"

    }

    console.log(transactionData)
     
}

const clearDetails = (dataIndex) =>{   
    let transactionData =  JSON.parse(localStorage.getItem("transactionData")) || [];
       
    transactionData = transactionData.filter((_, index) => index !== dataIndex)
    localStorage.setItem("transactionData", JSON.stringify(transactionData))
    
    viewTransaction();
    
}


submitBtn.onclick = (e) =>{
    e.preventDefault()
    
    let nameInput = document.querySelector(".nameInput")
    let amountInput = document.querySelector(".amountInput")
    let dateInput = document.querySelector(".dateInput")
    
    if(nameInput.value == "" || amountInput.value == "" || dateInput.value === ""){
        alert("Please Fill all the Field")
    }
    else{
        let nameInputValue = document.querySelector(".nameInput").value
        let amountInputValue = document.querySelector(".amountInput").value
        let dateInputValue = document.querySelector(".dateInput").value
        let activeBtn = expenseBtn.classList.contains("active")
        
        let transactionData =  JSON.parse(localStorage.getItem("transactionData")) || [];
        let transactionDataValues = { nameInputValue, amountInputValue, dateInputValue, activeBtn}

        transactionData.push(transactionDataValues)
        localStorage.setItem("transactionData",JSON.stringify(transactionData))
        
        nameInput.value = "" 
        amountInput.value = "" 
        dateInput.value = ""

        viewTransaction();
    }
}

viewTransaction();
