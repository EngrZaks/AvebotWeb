function scaleHeader() {
     const header = document.querySelector(".header");
     header.style.transform = "scale(1)";
}
scaleHeader(); //scale the header text

//navigation menu
const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
let x = 0;
function shoHide() {
     if (x === 0) {
          navItems.style.height = "100%";
          x = 1;
     } else {
          navItems.style.height = "0";
          x = 0;
     }
}
navBtn.addEventListener("click", shoHide);
closeBtn.addEventListener("click", shoHide);

// THE CODE FOR THE SLIDERS
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
     showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
     showSlides((slideIndex = n));
}
function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {
          slideIndex = 1;
     }
     if (n < 1) {
          slideIndex = slides.length;
     }
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
}
