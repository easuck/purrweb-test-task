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

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dot6 = document.getElementById("dot6");
const dot7 = document.getElementById("dot7");
const dot8 = document.getElementById("dot8");
const dot9 = document.getElementById("dot9");
const dot10 = document.getElementById("dot10");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const slides = [slide1, slide2, slide3, slide4, slide5,
    slide6, slide7, slide8, slide9, slide10];
const dots = [dot1, dot2, dot3, dot4, dot5,
    dot6, dot7, dot8, dot9, dot10];
var counter = 0;

next.addEventListener('click', nextSlide);
function nextSlide(){
    next.style.pointerEvents = "none";
    slides[counter].style.animation = "next1 0.5s";
    removeActiveSlides();
    removeActiveDots();
    if(counter >= slides.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    slides[counter].style.animation = "next2 0.5s";
    slides[counter].classList.add("active");
    dots[counter].classList.add("dotActive");
    setTimeout(()=>{
        next.style.pointerEvents = "auto";
    }, 500);
    console.log(counter);
}

prev.addEventListener('click', prevSlide);
function prevSlide(){
    prev.style.pointerEvents = "none";
    slides[counter].style.animation = "prev1 0.5s";
    removeActiveSlides();
    removeActiveDots();
    if(counter == 0){
        counter = slides.length - 1;
    }
    else{
        counter--;
    }
    slides[counter].style.animation = "prev2 0.5s";
    slides[counter].classList.add("active");
    dots[counter].classList.add("dotActive");
    setTimeout(()=>{
        prev.style.pointerEvents = "auto";
    }, 500);
    console.log(counter);
}

function removeActiveSlides(){
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
}

function removeActiveDots(){
    dots.forEach((dot)=>{
        dot.classList.remove("dotActive");
    })
}

slides.forEach((slide, slideIndex) => {
    dots[slideIndex].addEventListener('click', ()=>{
        removeActiveSlides();
        removeActiveDots();
        counter = slideIndex;
        console.log(counter);
        slide.classList.add("active");
        dots[slideIndex].classList.add("dotActive");
    })
})