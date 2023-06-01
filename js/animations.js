const menuBtn = document.querySelector("#menubtn");
const slideMenu = document.querySelector("#slide");
const carrousel = document.querySelector(".carrousel__container");
const carrouselBtns = document.querySelectorAll(".carrousel__point");

// Carrousel
// window.onload = () => {
//   setInterval(() => {
//     console.log("Volvi a entrar al intervalo");
//     carrouselBtns.forEach((btn, i) => {
//       contain = btn.classList.contains("carrousel__point--active");
//       if (!contain) {
//         let moving = i * -50;
//         console.log(moving);
//         carrousel.style.transform = `translateX(${moving}%)`;
//         carrouselBtns.forEach((btn) => {
//           btn.classList.remove("carrousel__point--active");
//         });
//         btn.classList.add("carrousel__point--active");
//       }
//     });
//   }, 3000);
// };

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

// Mobile Menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  slideMenu.classList.toggle("navbar__slide--open");
});
