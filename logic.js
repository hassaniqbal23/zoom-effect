var container=document.querySelector(".container");
var img =document.querySelector('img');


container.addEventListener("mousemove" ,(e)=>{
    var x =  e.clientX - e.target.offsetLeft;
    var y =  e.clientY - e.target.offsetTop;

    console.log(x, y)

    img.style.transformOrigin=`${x}px ${y}px`;
    img.style.transform="scale(3)";


})

container.addEventListener("onmouseleave" ,(e)=>{
    img.style.transformOrigin="center center";
    img.style.transform="scale(1)";
})

