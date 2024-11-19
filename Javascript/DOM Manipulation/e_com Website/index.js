var sidebar = document.querySelector(".sidebar");
var search =document.querySelector("#searchInputBox");
var products = document.querySelector(".products_display");
var products_list = products.querySelectorAll("div");
var noDataFound = document.querySelector(".noDataFound")
    
function showSidebar(){
    sidebar.style.left="0"
}

function closeSidebar(){
    sidebar.style.left="-60%"
}

function searchImg(event){

    var enteredValue = event.target.value.toUpperCase()

    let filteredCount = 0
    
    for(let count=0;count<products_list.length;count++)
    {
        var productname=products_list[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            products_list[count].style.display="none"
        }
        else{
            products_list[count].style.display="block"
            filteredCount++
        }
    }

    if(filteredCount<=0){
        noDataFound.style.display="block"
    }
    else{
        noDataFound.style.display="none"
    }
}