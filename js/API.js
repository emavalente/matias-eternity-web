export const getProducts = async () => {
  const url = "http://localhost:4000/products";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ocurrio un error en el servidor");
    }

    const products = await response.json();
    console.log(products);

    return products;
  } catch (error) {
    console.log("Error al descargar Productos");
  }
};
