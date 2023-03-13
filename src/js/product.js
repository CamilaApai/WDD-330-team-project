import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
var temp_cart = [];

function addProductToCart(product) {
  temp_cart = [];
  temp_cart = getLocalStorage("so-cart");
  temp_cart.push(product);
  setLocalStorage("so-cart", temp_cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
