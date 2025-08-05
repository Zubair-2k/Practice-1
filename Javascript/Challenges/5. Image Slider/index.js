const images = [
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
]

var prevImg = document.querySelector(".prevImg");
var nextImg = document.querySelector(".nextImg");

prevImg.textContent = "<";
nextImg.textContent = ">";

var index=0;
var imgSource = document.querySelector(".sliderImg")

const prevBtn = () =>{
    index = (index - 1 + images.length) % images.length;
    showImg();
}

const nextBtn = () =>{
    index = (index + 1) % images.length;
    showImg();
}

const showImg = () =>{
    imgSource.src = images[index];
    imgSource.alt = "Image - "+index
}

const autoSlide=()=>{
    nextBtn();
    setTimeout(autoSlide,3000)
    // console.log("autoslice")
}

showImg();
// setTimeout(autoSlide,3000);

