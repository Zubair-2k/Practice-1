
document.addEventListener("DOMContentLoaded", viewData);

const handleAdd = () => {
    let studentName = document.querySelector(".todo_name")
    let studentAge = document.querySelector(".todo_age")
    let studentEmail = document.querySelector(".todo_email")
    let studentPhone = document.querySelector(".todo_phone")

    let studentNameValue = document.querySelector(".todo_name").value
    let studentAgeValue = document.querySelector(".todo_age").value
    let studentEmailValue = document.querySelector(".todo_email").value
    let studentPhoneValue = document.querySelector(".todo_phone").value

    // let add_btn = document.querySelector(".add_btn")

    if (studentNameValue.length === 0 || studentAgeValue.length === 0 || studentEmailValue.length === 0 || studentPhoneValue.length === 0) {
        alert("Enter all Values")
        return;
    }
    else if(studentEmailValue.indexOf("@gmail.com")<1){
        // let email_error = document.querySelector(".email_error")
        // email_error.style.display="block"

        alert("This field require \"@gmail.com")
        return;
    }
    
    else if(studentPhoneValue.length > 10){
        // let phone_error = document.querySelector(".phone_error")
        // phone_error.style.display="block"
        // console.log(studentEmailValue.indexOf("@gmail.com"))
        alert("Please check the phone number")
        return;
    }
    
    else {
        let tableData = JSON.parse(localStorage.getItem("tableData")) || []
        let tableDataValues = { studentNameValue, studentAgeValue, studentEmailValue, studentPhoneValue }

        tableData.push(tableDataValues)
        localStorage.setItem("tableData", JSON.stringify(tableData))

        // let todoValue = document.querySelector(".todoList");
        // let tr = document.createElement("tr");

        // tr.innerHTML = `<td>${studentNameValue}</td>
        //             <td>${studentAgeValue}</td>
        //             <td>${studentEmailValue}</td>
        //             <td>${studentPhoneValue}</td>
        //             <td>
        //                 <button class="edit_btn" onclick="handleEdit(event)">Edit</button>
        //                 <button class="delete_btn" onclick="handleDelete(event)">Delete</button>
        //             </td>`

        // todoValue.append(tr);

        studentName.value = ""
        studentAge.value = ""
        studentEmail.value = ""
        studentPhone.value = ""

        viewData();
    }
}

function viewData(){
    let todoList = document.querySelector(".todoList")
    todoList.innerHTML = ""

    let tableData = JSON.parse(localStorage.getItem("tableData")) || []

    tableData.forEach((data, index) => {
        let tr = todoList.insertRow();

        tr.innerHTML = `<td>${data.studentNameValue}</td>
                    <td>${data.studentAgeValue}</td>
                    <td>${data.studentEmailValue}</td>
                    <td>${data.studentPhoneValue}</td>
                    <td>
                       <button class="edit_btn" onclick="handleEdit(${index})">Edit</button>
                       <button class="delete_btn" onclick="handleDelete(${index})">Delete</button>
                    </td>`;

    });
}


const handleDelete = (dataIndex) => {
    // event.target.parentElement.parentElement.remove()

    let tableData = JSON.parse(localStorage.getItem("tableData")) || []

    tableData = tableData.filter((_, index) => index !== dataIndex)
    localStorage.setItem("tableData", JSON.stringify(tableData))

    viewData();

}

const handleEdit = (dataIndex) => {
    let add_btn = document.querySelector(".add_btn")
    // let edit_btn = document.querySelector(".edit_btn")
    let cancel_btn = document.querySelector(".cancel_btn")
    // let delete_btn = document.querySelector(".delete_btn")

    let edit_btn_container = document.querySelector(".edit_btn_container")

    add_btn.style.display = "none"
    // delete_btn.style.display = "none"

    cancel_btn.style.display = "inline"
    edit_btn_container.style.display = "block"

    let studentName = document.querySelector(".todo_name")
    let studentAge = document.querySelector(".todo_age")
    let studentEmail = document.querySelector(".todo_email")
    let studentPhone = document.querySelector(".todo_phone")

    let tableData = JSON.parse(localStorage.getItem("tableData")) || []

    filteredData = tableData.filter((_, index) => index === dataIndex)

    // console.log(filteredData[0])

    studentName.value = filteredData[0].studentNameValue
    studentAge.value = filteredData[0].studentAgeValue
    studentEmail.value = filteredData[0].studentEmailValue
    studentPhone.value = filteredData[0].studentPhoneValue

    // let tr = event.target.parentElement.parentElement

    // selectedRow = tr

    // console.log(tr)
    // let tr = event.target.closest("tr")
    // console.log(selectedRow)

    // studentName.value = tr.cells[0].textContent
    // studentAge.value = tr.cells[1].textContent
    // studentEmail.value = tr.cells[2].textContent
    // studentPhone.value = tr.cells[3].textContent

    // handleUpdate(dataIndex)

}

const handleUpdate = () => {
    let studentName = document.querySelector(".todo_name")
    let studentAge = document.querySelector(".todo_age")
    let studentEmail = document.querySelector(".todo_email")
    let studentPhone = document.querySelector(".todo_phone")

    let add_btn = document.querySelector(".add_btn")
    let edit_btn = document.querySelector(".edit_btn")

    let edit_btn_container = document.querySelector(".edit_btn_container")

    let tableData = JSON.parse(localStorage.getItem("tableData")) || []

    console.log(filteredData)

    tableData = tableData.map((data) => {

        // console.log(filteredData[0].studentNameValue === data.studentNameValue )
        // console.log(data)
        // console.log(studentName.value)
        return filteredData[0].studentNameValue === data.studentNameValue ?
            {
                studentNameValue: studentName.value,
                studentAgeValue: studentAge.value,
                studentEmailValue: studentEmail.value,
                studentPhoneValue: studentPhone.value
            }
            : data;
    })

    localStorage.setItem("tableData", JSON.stringify(tableData))

    // console.log(tableData)

    // selectedRow.cells[0].textContent = studentNameValue;
    // selectedRow.cells[1].textContent = studentAgeValue;
    // selectedRow.cells[2].textContent = studentEmailValue;
    // selectedRow.cells[3].textContent = studentPhoneValue;

    studentName.value = ""
    studentAge.value = ""
    studentEmail.value = ""
    studentPhone.value = ""

    // selectedRow = null

    edit_btn_container.style.display = "none"

    add_btn.style.display = "block"
    edit_btn.style.display = "inline"

    viewData();
}

const handleCancel = () => {
    let studentName = document.querySelector(".todo_name")
    let studentAge = document.querySelector(".todo_age")
    let studentEmail = document.querySelector(".todo_email")
    let studentPhone = document.querySelector(".todo_phone")

    let add_btn = document.querySelector(".add_btn")
    let edit_btn = document.querySelector(".edit_btn")

    let edit_btn_container = document.querySelector(".edit_btn_container")

    studentName.value = ""
    studentAge.value = ""
    studentEmail.value = ""
    studentPhone.value = ""

    selectedRow = null

    edit_btn_container.style.display = "none"

    add_btn.style.display = "block"
    edit_btn.style.display = "inline"

}
const handleClearTable = () => {
    // let todoList = document.querySelector(".todoList")
    localStorage.removeItem("tableData");

    viewData();
}
