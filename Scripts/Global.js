// This is preloder
var startTime = new Date().getTime();

var preloader = document.querySelectorAll(".preloader")[0];
var preloaderlayer = document.querySelectorAll(".preloaderlayer")[0];

window.addEventListener("load",()=>{
    while(true){
        if((new Date().getTime()) -(startTime) > 4000){
            preloader.style.display = "none";
            preloaderlayer.style.display = "none";
            break;
        }
    }
})
