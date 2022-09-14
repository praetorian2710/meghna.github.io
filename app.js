const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }
)
const gon=()=>{
    counter++;
    if(counter>3)
    counter=counter-4;
    slideImage()
}
const gop=()=>{
    counter--;
    if(counter<0)
    counter=counter+4;
    slideImage()
}
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}