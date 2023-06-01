import { getProducts } from "./API.js";

const productContainer = document.querySelector(".products__container");

export const printProducts = async () => {
  const products = await getProducts();

  products.forEach((product) => {
    const { id, title, image, price, description } = product;
    const div = document.createElement("DIV");
    div.classList.add("card");
    div.innerHTML = `
    <img
        src=${image}
        class="card__image"
        alt="imagen de perfume"
    />
    <h2 class="card__title">${title}</h2>
    <p class="card__description">${description}</p>
    <p class="card__price">$${price}</p>
    <button class="card__btn">Agregar</button>
    `;

    productContainer.appendChild(div);
  });
};
