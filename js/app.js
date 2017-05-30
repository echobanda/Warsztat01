document.addEventListener("DOMContentLoaded", function() {
// slider

var buttonNext = document.getElementById("buttonNext");
var buttonPrev = document.getElementById("buttonPrev");
var liElements = document.querySelectorAll(".slider_img");
var counter = 0;
liElements[0].classList.add("visible");
buttonNext.addEventListener("click", function() {
  liElements[counter].classList.remove("visible");
  counter++;
  if (counter >= liElements.length) {
    counter = 0;
  }
  liElements[counter].classList.add("visible");

})
buttonPrev.addEventListener("click", function() {
  liElements[counter].classList.remove("visible");
  counter--;
  if (counter < 0) {
    counter = liElements.length - 1;
  }
  liElements[counter].classList.add("visible");
})



// funkcja odpowiadająca za znikanie bloku z nazwą
  var opacity_1 = document.getElementById("opacity_1");
  opacity_1.addEventListener("mouseover", function() {
    opacity_1.style.visibility = 'hidden';

  })
  opacity_1.addEventListener("mouseout", function() {
    opacity_1.style.visibility = 'visible';

  })

  var opacity_2 = document.getElementById("opacity_2");
  opacity_2.addEventListener("mouseover", function() {
    opacity_2.style.visibility = 'hidden';

  })
  opacity_2.addEventListener("mouseout", function() {
    opacity_2.style.visibility = 'visible';

  })

  
});
