const slider=document.querySelector('.slider');
const sliderImages=document.querySelectorAll('.slider__img');
const sliderLine= document.querySelector('.slider__line');

const next=document.querySelector('.next');
const prev=document.querySelector('.prev');

let sliderCount=0;
let sliderWidth= slider.offsetWidth;

next.addEventListener('click',nextSlide);

prev.addEventListener('click',prevSlide);

function nextSlide(){
    sliderCount++;
    if(sliderCount>=sliderImages.length){
        sliderCount=0;
    }
    rollSlider();
}
function prevSlide(){
    sliderCount--;
    if(sliderCount<0){
        sliderCount=sliderImages.length-1;
    }
    rollSlider();
}
function rollSlider(){
    sliderLine.style.transform=`translateX(${-sliderCount*sliderWidth}px)`;
}

// авто свап слайдов
// setInterval(()=>{nextSlide()},3000);
