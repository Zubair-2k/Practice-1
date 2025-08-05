let includesNumberValue = document.querySelector(".includesNumberValue")
let smallAlphabetValue = document.querySelector(".smallAlphabetValue")
let largeAlphabetValue = document.querySelector(".largeAlphabetValue")
let symbolsValue = document.querySelector(".includesSymbolValue")
let passwordLengthRange = document.querySelector(".passwordLengthRange")

let generatePasswordBtn = document.querySelector(".generatePasswordBtn")
let copyPasswordBtn = document.querySelector(".copyPasswordBtn")
let clearPasswordBtn = document.querySelector(".clearPasswordBtn")


passwordLengthRange.onchange=(e)=>{
    let passwordLengthValue = document.querySelector(".passwordLengthValue")
    passwordLengthValue.textContent = e.target.value;
}

generatePasswordBtn.onclick = (e)=>{
    e.preventDefault();

    let passwordInput =document.querySelector(".passwordInput")
    let passwordLengthValue = document.querySelector(".passwordLengthValue")

    let charArray=""
    let password =""

    includesNumberValue.checked ? charArray+="1234567890" : ""

    smallAlphabetValue.checked ? charArray+="abcdefghijklmnopqrstuvwxyz" : ""
        
    largeAlphabetValue.checked ? charArray+="ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
        
    symbolsValue.checked ? charArray+="!@#$%^&*()_+-=[]{}|;:,.<>?" : ""

    if(charArray.length === 0){
        alert("Please Select Atleast One Checkbox in the field")
        return;
    }

    console.log(typeof(passwordLengthValue.textContent))

    for(i=0;i<Number(passwordLengthValue.textContent);i++){

        let randomIndex= Math.floor(Math.random()*Number(charArray.length))
        
        password+= charArray[randomIndex]
    }

    passwordInput.value =password;

    // includesNumberValue.checked = false

    // smallAlphabetValue.checked = false
        
    // largeAlphabetValue.checked = false
        
    // symbolsValue.checked = false

    // passwordLengthRange.value =16
    // passwordLengthValue.textContent = 16;




    // console.log(charArray)

    console.log("Generate Password Button")
    
}


copyPasswordBtn.onclick=()=>{

    let passwordInput =document.querySelector(".passwordInput")

    navigator.clipboard.writeText(passwordInput.value)
    .then(()=>alert("Copied"))
    .catch(()=>alert("Copy Failed"))
 
    // console.log(passwordInput.value)

}

clearPasswordBtn.onclick = (e) =>{

    e.preventDefault()
    
    let passwordInput =document.querySelector(".passwordInput")
    let passwordLengthValue = document.querySelector(".passwordLengthValue")

    passwordInput.value = ""

    includesNumberValue.checked = false

    smallAlphabetValue.checked = false
        
    largeAlphabetValue.checked = false
        
    symbolsValue.checked = false

    passwordLengthRange.value =16
    passwordLengthValue.textContent = 16;
}
