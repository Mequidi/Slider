const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function(slide,index)
{
    slide.style.left=`${index*100}%`;
})

let count = 0;
nextBtn.addEventListener("click",function(){
    count++;
    moveslide();
})
prevBtn.addEventListener("click",function(){
    count--;
    moveslide();
})
function moveslide(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${count*100}%)`;
    })
    
    if(count===0)
        prevBtn.style.display="none";
    else
        prevBtn.style.display="block";
    if(count===slides.length-1)
        nextBtn.style.display="none";
    else    
        nextBtn.style.display="block";
}
prevBtn.style.display="none";