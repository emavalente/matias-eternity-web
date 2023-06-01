const menuBtn = document.querySelector("#menubtn");
const slideMenu = document.querySelector("#slide");
const carrousel = document.querySelector(".carrousel__container");
const carrouselBtns = document.querySelectorAll(".carrousel__point");

window.onload = () => {
  setInterval(() => {
    let activeBtnIndex = -1;

    for (let i = 0; i < carrouselBtns.length; i++) { 
      if (btn.classList.contains("carrousel__point--active")) {
        activeBtnIndex = index;
        break;
      }
    }

    const nextBtnIndex = (activeBtnIndex + 1) % carrouselBtns.length;

    carrouselBtns.forEach((btn, index) => {
      const isActive = index === nextBtnIndex;
      btn.classList.toggle("carrousel__point--active", isActive);
    });

    const moving = nextBtnIndex * -50;
    carrousel.style.transform = `translateX(${moving}%)`;
  }, 3000);
};

// Mobile Menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  slideMenu.classList.toggle("navbar__slide--open");
});
