

// image slide 
const slide = document.querySelectorAll(".slides img");
let slideindex =0;
let intervalId =null;



document.addEventListener("DOMContentLoaded", initilizeSlider)


function initilizeSlider(){

    if(slide.length >0){
    slide[slideindex].classList.add("displaySlide");
     intervalId= setInterval(nextSlide,5000);
    }
}
function showSlide(index){

    if(index >= slide.length){
        slideindex=0;
    }else if(index<0){
        slideindex=slide.length-1;
    }
slide.forEach( slide => {
    slide.classList.remove("displaySlide");
});
slide[slideindex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideindex --;
    showSlide(slideindex);
    
}
function nextSlide(){
slideindex ++;
showSlide(slideindex);
}





























