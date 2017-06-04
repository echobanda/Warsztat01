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


//Zmiana koloru cennika
      var prices_left = document.getElementsByClassName("prices_left");
      for (var i = 0; i < prices_left.length; i++) {
          prices_left[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#24ba9f";
            this.style.border = "2px solid #24ba9f";
            this.querySelector(".price").style.backgroundColor = "white";
            this.querySelector(".price").style.border = "#24ba9f";
            this.querySelector("h3").style.color = "white";
            this.querySelector(".price-button").style.backgroundColor = "white";
            this.querySelector(".price-button").style.color = "#24ba9f";
            this.querySelector(".circle").style.backgroundColor = "#24ba9f";
            this.querySelector(".circle").style.border = "2px solid #24ba9f";
            this.querySelector(".small-circle").style.backgroundColor = "white";
          });
      }
      for (var i = 0; i < prices_left.length; i++) {
          prices_left[i].addEventListener("mouseout", function () {
              this.style.backgroundColor = "#fbfbfb";
              this.style.border = "2px solid lightgrey";
              this.querySelector(".price").style.backgroundColor = "white";
              this.querySelector(".price").style.border = "2px solid lightgrey";
              this.querySelector("h3").style.color = "#24ba9f";
              this.querySelector(".price-button").style.backgroundColor = "#24ba9f";
              this.querySelector(".price-button").style.color = "white";
              this.querySelector(".circle").style.backgroundColor = "white";
              this.querySelector(".circle").style.border = "2px solid lightgrey";
              this.querySelector(".small-circle").style.backgroundColor = "darkgrey";
          });
      }

      var prices_right = document.getElementsByClassName("prices_right");
      for (var i = 0; i < prices_left.length; i++) {
          prices_right[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#24ba9f";
            this.style.border = "2px solid #24ba9f";
            this.querySelector(".price").style.backgroundColor = "white";
            this.querySelector(".price").style.border = "#24ba9f";
            this.querySelector("h3").style.color = "white";
            this.querySelector(".price-button").style.backgroundColor = "white";
            this.querySelector(".price-button").style.color = "#24ba9f";
            this.querySelector(".circle").style.backgroundColor = "#24ba9f";
            this.querySelector(".circle").style.border = "2px solid #24ba9f";
            this.querySelector(".small-circle").style.backgroundColor = "white";
          });
      }
      for (var i = 0; i < prices_left.length; i++) {
          prices_right[i].addEventListener("mouseout", function () {
              this.style.backgroundColor = "#fbfbfb";
              this.style.border = "2px solid lightgrey";
              this.querySelector(".price").style.backgroundColor = "white";
              this.querySelector(".price").style.border = "2px solid lightgrey";
              this.querySelector("h3").style.color = "#24ba9f";
              this.querySelector(".price-button").style.backgroundColor = "#24ba9f";
              this.querySelector(".price-button").style.color = "white";
              this.querySelector(".circle").style.backgroundColor = "white";
              this.querySelector(".circle").style.border = "2px solid lightgrey";
              this.querySelector(".small-circle").style.backgroundColor = "darkgrey";
          });
      }

      var prices_center = document.getElementsByClassName("prices_center");
      for (var i = 0; i < prices_left.length; i++) {
          prices_center[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#24ba9f";
            this.style.border = "2px solid #24ba9f";
            this.querySelector(".price").style.backgroundColor = "white";
            this.querySelector(".price").style.border = "#24ba9f";
            this.querySelector("h3").style.color = "white";
            this.querySelector(".price-button").style.backgroundColor = "white";
            this.querySelector(".price-button").style.color = "#24ba9f";
            this.querySelector(".circle").style.backgroundColor = "#24ba9f";
            this.querySelector(".circle").style.border = "2px solid #24ba9f";
            this.querySelector(".small-circle").style.backgroundColor = "white";
          });
      }
      for (var i = 0; i < prices_left.length; i++) {
          prices_center[i].addEventListener("mouseout", function () {
              this.style.backgroundColor = "#fbfbfb";
              this.style.border = "2px solid lightgrey";
              this.querySelector(".price").style.backgroundColor = "white";
              this.querySelector(".price").style.border = "2px solid lightgrey";
              this.querySelector("h3").style.color = "#24ba9f";
              this.querySelector(".price-button").style.backgroundColor = "#24ba9f";
              this.querySelector(".price-button").style.color = "white";
              this.querySelector(".circle").style.backgroundColor = "white";
              this.querySelector(".circle").style.border = "2px solid lightgrey";
              this.querySelector(".small-circle").style.backgroundColor = "darkgrey";
          });
      }

  //Kalkulator
  //Dropdowns
  var arrows = document.querySelectorAll(".list_arrow");
  console.log(arrows);
  for (var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener("click", function () {
          var dropdown = this.nextElementSibling;
          if (dropdown.classList.contains("visible")) {
              dropdown.classList.remove("visible");
          } else {
              dropdown.classList.add("visible");
          }

      });
  }


});
