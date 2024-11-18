const password_value = document.querySelector(".password_value");
const show_password = document.querySelector(".show_password");

function handlePassword()
{

    const type=password_value.getAttribute("type") === "text" ? "password" : "text";
    password_value.setAttribute("type",type)
    
}