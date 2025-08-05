let infiniteScrollContainer = document.querySelector(".infiniteScrollContainer");
let loader = document.querySelector(".loader");
let sentinal = document.querySelector(".sentinal")

let listItemCount = 0
let isLoading = false

const loadContent = (count=10) =>{
    if(isLoading) return;

    isLoading=true
    loader.style.display="block"

    setTimeout(()=>{

        for(i=0;i<count;i++){
            infiniteScrollContainer.append(createItems(++listItemCount))
        }

        isLoading=false
        loader.style.display="block"

    },1000)

}

const createItems = (index) =>{
    let div =  document.createElement("div");
    div.classList.add("listItems");
    div.textContent = `List - ${index}`
    return div
}

let observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        loadContent();
    }
})

loadContent();

observer.observe(sentinal)
