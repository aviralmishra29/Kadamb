// This is preloder
var startTime = new Date().getTime();

var preloader = document.querySelectorAll(".preloader")[0];
var preloaderlayer = document.querySelectorAll(".preloaderlayer")[0];

window.addEventListener("load",()=>{
    while(true){
        if((new Date().getTime()) -(startTime) > 1500){
            preloader.style.display = "none";
            preloaderlayer.style.display = "none";
            break;
        }
    }
})


// ****************** Carousel *********************
 

let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
	sliderImages[i].style.display = "none";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
	current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
	current = -1;
}
slideRight();
});

startSlide();




// ************ Navbar button toggle *****************


var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown', function (e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
});
