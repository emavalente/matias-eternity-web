// Mobile Menu
const menuBtn = document.querySelector("#menubtn");
const slice = document.querySelector("#slide");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  slice.classList.toggle("navbar__slide--open");
});

// Carrousel
const carrousel = document.querySelector(".carrousel__container");
const carrouselBtns = document.querySelectorAll(".carrousel__point");

carrouselBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let moving = i * -50;
    carrousel.style.transform = `translateX(${moving}%)`;

    carrouselBtns.forEach((btn) => {
      btn.classList.remove("carrousel__point--active");
    });

    btn.classList.add("carrousel__point--active");
  });
});
