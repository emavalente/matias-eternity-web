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
  let activeBtnIndex = -1;
  // Get the active index
  carrouselBtns.forEach((btn, i) => {
    if (btn.classList.contains("carrousel__point--active")) {
      activeBtnIndex = i;
    }
  });

  // Calculate the next index - is not activate.
  const nextBtnIndex = (activeBtnIndex + 1) % carrouselBtns.length;

  // add and remove the active class on respective btn. Will be activate when the index is the next one to activate.
  carrouselBtns.forEach((btn, index) => {
    const Activate = index === nextBtnIndex;
    btn.classList.toggle("carrousel__point--active", Activate);
  });

  const moving = nextBtnIndex * -50;
  carrousel.style.transform = `translateX(${moving}%)`;
}
