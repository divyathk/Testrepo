$(document).ready(function() {
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let j;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("dot1");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (j = 0; j < dots1.length; j++) {
    dots1[j].className = dots1[j].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 2500); // Change image every 2.5 seconds
}
});