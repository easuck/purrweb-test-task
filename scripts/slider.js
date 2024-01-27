const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");
const slide6 = document.getElementById("slide6");
const slide7 = document.getElementById("slide7");
const slide8 = document.getElementById("slide8");
const slide9 = document.getElementById("slide9");
const slide10 = document.getElementById("slide10");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const slides = [slide1, slide2, slide3, slide4, slide5,
    slide6, slide7, slide8, slide9, slide10];
var counter = 0;

next.addEventListener('click', nextSlide);
function nextSlide(){
    next.style.pointerEvents = "none";
    slides[counter].style.animation = "next1 0.5s forwards";
    if(counter >= slides.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    slides[counter].style.animation = "next2 0.5s forwards";
    setTimeout(()=>{
        next.style.pointerEvents = "auto";
    }, 500);
}

prev.addEventListener('click', prevSlide);
function prevSlide(){
    prev.style.pointerEvents = "none";
    slides[counter].style.animation = "prev1 0.5s forwards";
    if(counter == 0){
        counter = slides.length - 1;
    }
    else{
        counter--;
    }
    slides[counter].style.animation = "prev2 0.5s forwards";
    setTimeout(()=>{
        prev.style.pointerEvents = "auto";
    }, 500);
}