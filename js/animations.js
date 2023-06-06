const menuBtn = document.querySelector("#menubtn");
const slideMenu = document.querySelector("#slide");
const carrousel = document.querySelector(".carrousel__container");
const carrouselBtns = document.querySelectorAll(".carrousel__point");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    carrouselAnimation();
  }, 5000);
});

carrouselBtns.forEach((btn) => {
  btn.addEventListener("click", carrouselAnimation);
});

// Mobile Btn Menu and Slide Menu Animation activate.
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  slideMenu.classList.toggle("navbar__slide--open");
});

function carrouselAnimation() {
  let contain;
  carrouselBtns.forEach((btn, i) => {
    contain = btn.classList.contains("carrousel__point--active");
    if (!contain) {
      let moving = i * -50;
      carrousel.style.transform = `translateX(${moving}%)`;
    }
  });
  carrouselBtns.forEach((btn) => {
    btn.classList.toggle("carrousel__point--active");
  });
}
