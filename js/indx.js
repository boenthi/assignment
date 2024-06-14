import { CardComponents } from "../components/CardComponents.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  .slice(0, 10)
  .map((product) => (renderArea.innerHTML += CardComponents(product)));