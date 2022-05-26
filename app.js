let mainBtn = document.querySelector(".btn");
let page = document.querySelector(".page");
let keyBtn = document.querySelector(".btn.btn--left");
let popup = document.querySelector(".pop-up");
let popupSlider = document.querySelector(".pop-up__slider-list");
let wrapper = document.querySelector(".key__content");
let closeBtn = document.querySelector(".close-btn");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let keyHide = document.querySelector('.key__items')
let listFirst = document.querySelectorAll(".list-first")
let listSecond = document.querySelectorAll(".list-second")



mainBtn.addEventListener("click", moveTo);

function moveTo() {
  location.href = '#info'


  page.classList.remove("page--blue");
  page.classList.add("page--pink");
}



keyBtn.addEventListener("click", popupShow);

function popupShow() {
  popup.classList.add("pop-up-active");
  keyHide.style.visibility = "hidden";
  popupSlider.classList.add("pop-up__slider-list-active");
  wrapper.classList.add("gradient");

}



closeBtn.addEventListener("click", function () {
  popup.classList.remove("pop-up-active");
  keyHide.style.visibility = "unset";
  popupSlider.classList.remove("pop-up__slider-list-active");
  wrapper.classList.remove("gradient");

});

btnLeft.addEventListener("click", () => {
  changeSlide("left");
});
btnRight.addEventListener("click", () => {
  changeSlide("right");
});



function changeSlide(direction) {
  if (direction === "right") {

    listFirst.forEach(el => el.classList.add("hide"))
    listSecond.forEach(el => el.classList.remove("hide"))


    btnLeft.classList.toggle("active-btn");
  } else if (direction === "left") {
    listFirst.forEach(el => el.classList.remove("hide"))
    listSecond.forEach(el => el.classList.add("hide"))

    btnRight.classList.toggle("active-btn");
  }
}


if (window.innerHeight > window.innerWidth) {
  portrait = true;
  landscape = false;
} else {
  portrait = false;
  landscape = true;
}