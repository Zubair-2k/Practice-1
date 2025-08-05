var container = document.querySelector(".container")
var delete_btn = document.getElementById("delete")
var add_btn = document.getElementById("add")
var overlay =document.querySelector(".overlay")
var overlay_box = document.querySelector(".overlay_box")
var add_book = document.getElementById("add_overlay")
var cancel_book = document.getElementById("cancel_overlay")
var book_title = document.getElementById("book_title")
var book_author = document.getElementById("book_author")
var book_description = document.getElementById("book_description")

function delete_button(event){
    event.preventDefault()
    event.target.parentElement.parentElement.remove()
}

add_btn.addEventListener("click",function(){
    overlay.style.display="block"
    overlay_box.style.display="block"
})

cancel_book.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    overlay_box.style.display="none"
})

// book_title.addEventListener("keyup",function(){
//     if(book_title.value != "")
//         {
//             document.querySelector(".overlay_box button").style.display="block"
//         }
//         else
//         {
//             document.querySelector(".overlay_box button").style.display="none"
//         }
// })

add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book_box")
    div.innerHTML=`<h1>${book_title.value}</h1>
    <h3>${book_author.value}</h3>
    <p>${book_description.value}</p>
    <div class='del_btn'>
    <button id='delete' onclick='delete_button(event)'>Delete</button>
    </div>`
    container.append(div)
    overlay.style.display="none"
    overlay_box.style.display="none"
    book_title.value=""
    book_author.value=""
    book_description.value=""
    // console.log(book_title)
})

