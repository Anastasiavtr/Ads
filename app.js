let body = document.body;
let mainBtn = document.querySelector(".btn");
let content = document.querySelector(".content");
let info = document.querySelector(".info");
let page = document.querySelector(".page");
let key = document.querySelector(".key__content");
let keyBtn = document.querySelector(".btn.btn--left");
let popup = document.querySelector(".pop-up");
let popupSlider = document.querySelector(".pop-up__slider-list");
let wrapper = document.querySelector(".key__wrapper");
let btn = document.querySelector(".close-btn");
btnLeft = document.querySelector(".btn-left");
btnRight = document.querySelector(".btn-right");



mainBtn.addEventListener("click", moveTo);

function moveTo() {
  location.href='#info'


  page.classList.remove("page--blue");
  page.classList.add("page--pink");
}



key.addEventListener("click", changeBackground);
info.addEventListener("click", changeBackground);
content.addEventListener("click", changeBackground);

function changeBackground(e) {
  if (e.currentTarget == key) {
    if (
      page.classList.contains("page--pink") ||
      page.classList.contains("page--blue")
    ) {
      page.classList.remove("page--pink", "page--blue");
    }
    page.classList.add("page--pink-blue");
  } else if (e.currentTarget == info) {
    if (
      page.classList.contains("page--pink-blue") ||
      page.classList.contains("page--blue")
    ) {
      page.classList.remove("page--pink-blue", "page--blue");
    }
    page.classList.add("page--pink");
  } else if (e.currentTarget == content) {
    if (
      page.classList.contains("page--pink-blue") ||
      page.classList.contains("page--pink")
    ) {
      page.classList.remove("page--pink-blue", "page--pink");
    }

    page.classList.add("page--blue");
  }
}


keyBtn.addEventListener("click", popupShow);

function popupShow() {
  wrapper.style.cssText = `
       position: absolute;`;

  popup.classList.add("pop-up-active");
 popupSlider.classList.add("pop-up__slider-list-active");
  page.classList.add("gradient");
}



btn.addEventListener("click", function () {
  popup.classList.remove("pop-up-active");
  popupSlider.classList.remove("pop-up__slider-list-active");

  wrapper.remove.cssText = `
        position: absolute;`;

  page.classList.remove("gradient");

});

btnLeft.addEventListener("click", () => {
  changeSlide("left");
});
btnRight.addEventListener("click", () => {
  changeSlide("right");
});


function changeSlide(direction) {
  if (direction === "left") {
    popupSlider.style.transform = `translateY(-25%)`;
    btnLeft.classList.toggle("active-btn");
  } else if (direction === "right") {
    popupSlider.style.transform = `translateY(35%)`;
    btnRight.classList.toggle("active-btn");
  }
}
