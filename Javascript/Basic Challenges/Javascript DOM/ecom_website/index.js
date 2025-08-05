var sidebar = document.querySelector(".sidebar")
var searchText = document.querySelector(".search")
var search_container = document.querySelector(".search-img-output")
var search_content = search_container.querySelectorAll(".search-content")
var productName = ""


searchText.addEventListener("keyup",function(){
    productName = event.target.value.toUpperCase()
    for(var i=0;i<search_content.length;i++)
    {
        if(search_content[i].textContent.toUpperCase().indexOf(productName) < 0)
        {
            search_content[i].style.display="none"
        }
        else
        {
            search_content[i].style.display="block"
        }
    }
    
})

function toogle_btn(){
    sidebar.style.left="0"
}

function cancel_btn()
{
    sidebar.style.left="-50%"
}