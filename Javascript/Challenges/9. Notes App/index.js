let color = document.querySelector(".color")
let createBtn = document.querySelector(".createBtn")
let list = document.querySelector(".list")

let topZindex = 1;  

createBtn.onclick = (e) => {
    e.preventDefault();

    let newNote = document.createElement("div");

    newNote.classList.add("note");
    newNote.innerHTML=` <span class="closeBtn">x</span>
                        <textarea placeholder="Write Something..." rows="10" cols="30"></textarea>`
    newNote.style.borderColor=color.value;

    list.appendChild(newNote)
}


document.addEventListener(("click"),(e)=>{
    if(e.target.classList.contains("closeBtn"))
    {
        e.target.parentElement.remove();
    }
})

let cursor ={
    x: null,
    y: null
}

let note ={
    dom:null,
    x: null,
    y: null
}

document.addEventListener("mousedown",(e)=>{

    if(e.target.classList.contains("note")){

        cursor={
            x: e.clientX,
            y: e.clientY,
        }

        // console.table(cursor)

        note={
            dom: e.target,
            x: e.target.getBoundingClientRect().left,
            y: e.target.getBoundingClientRect().top
        }

        topZindex++;

        note.dom.style.cursor= "grab"

        note.dom.style.zIndex = topZindex; 

        // console.table(note)

    }
})

document.addEventListener("mouseover",(e)=>{
    if(note.dom == null) return;

    let currentCursor={
        x: e.clientX,
        y: e.clientY
    }

    let distance={
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }

    note.dom.style.left = (note.x + distance.x) + "px"
    note.dom.style.top = (note.y + distance.y) +"px"  

    // console.log("Current Cursor - X : "+currentCursor.x)
    // console.log("Cursor - X : "+cursor.x)
    // console.log("Distance - X : "+distance.x)
    // console.log("Note - X : "+note.x)

})

document.addEventListener("mouseup",()=>{
    if(note.dom == null) return;

    note.dom.style.cursor= "auto"
    note.dom = null
})