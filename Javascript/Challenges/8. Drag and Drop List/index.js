const elements = document.querySelectorAll(".element")
const containers = document.querySelectorAll(".containerCard")

elements.forEach((element)=>{
    element.addEventListener("dragstart",()=>{
        element.classList.add("dragging");
    })

    element.addEventListener("dragend",()=>{
        element.classList.remove("dragging");
    })
})

containers.forEach((container)=>{
    container.addEventListener("dragover",(e)=>{
        e.preventDefault()

        const afterElement =  getDragAfterElement(container,e.clientY)
        const draggable = document.querySelector(".dragging")
        // console.log(afterElement)
        if(afterElement == null){
            container.appendChild(draggable)
        }
        else{
            container.insertBefore(draggable,afterElement)
        }
    })
})

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll(".element:not(.dragging)")]

    return draggableElements.reduce((closest, child)=>{
        const box =  child.getBoundingClientRect();
        // console.log(box)

        console.log(y)
        console.log(box.top)
        console.log("Closest : " + closest.offset)
        
        const offset =  y - box.top;
        
        // console.log("Offset : " + offset)
        // console.log("Closest : " + closest.offset)

        return (offset < 0 && offset > closest.offset) ? {offset: offset,element : child} : closest;

    },{offset: Number.NEGATIVE_INFINITY}).element
}