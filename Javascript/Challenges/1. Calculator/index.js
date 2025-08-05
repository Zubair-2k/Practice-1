var inputField = document.querySelector(".display_values");
var buttons = document.querySelectorAll(".number_btn")

const handleClick = (event) =>{
    let inputFieldContent = inputField.value

    // console.log(typeof(event.target.textContent))

    if(event.target.textContent == "C") return inputField.value = ""

    // console.log(event.target.textContent)
    // console.log(typeof(event.target.textContent))

    if(event.target.textContent == "sqrt"){
        inputField.value=event.target.textContent + " "
    }

    else if(event.target.textContent == "CE")
    {
        let inputFieldValue = inputField.value

        if(inputFieldValue === "") return inputField.value = ""

        inputField.value = inputFieldValue.slice(0,inputFieldValue.length-1)

        console.log(inputField.value)
    }

    else{
        inputField.value =inputFieldContent+event.target.textContent

    }

    
}

const handleCalculation = () =>{
    let inputFieldContent = String(inputField.value)

    // console.log(inputFieldContent)

    if(inputFieldContent == "") return inputField.value = ""

    // console.log(inputFieldContent.indexOf("+"))

    if(inputFieldContent.indexOf("+") > 0){
        let c=inputFieldContent.split("+")
        inputField.value = String(Number(c[0])+Number(c[1]));
        console.log(inputField.value)
    }

    else if(inputFieldContent.indexOf("-") > 0){
        let c=inputFieldContent.split("-")
        inputField.value= String(Number(c[0])-Number(c[1]));
        console.log(inputField.value)
    }

    else if(inputFieldContent.indexOf("*") > 0){
        let c=inputFieldContent.split("*")
        inputField.value = String(Number(c[0])*Number(c[1]));
        console.log(inputField.value)
    }
    
    else if(inputFieldContent.indexOf("/") > 0){
        let c=inputFieldContent.split("/")
        inputField.value = String(Number(c[0])/Number(c[1]));
        console.log(inputField.value)
    }
    
    else if(inputFieldContent.indexOf("%") > 0){
        let c=inputFieldContent.split("%")
        inputField.value = String(Number(c[0])%Number(c[1]));
        console.log(inputField.value)
    }

    else if(inputFieldContent.indexOf("sqrt") == 0){
        let c=inputFieldContent.split("sqrt")

        // console.log(c[1])
        // console.log(typeof(c[1]))

        // console.log(Math.sqrt((c[1])))
        // console.log(typeof(Math.sqrt(c[1])))

        inputField.value =String(Math.sqrt(Number(c[1])))

        // inputField.value = String(Number(c[0])%Number(c[1]));
        // console.log(inputField.value)
    }

    else{
        inputField.value=""
    }

    // else{
    //     inputField.value=""
    // }
}