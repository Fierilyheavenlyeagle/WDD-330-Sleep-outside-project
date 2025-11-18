import ProductData from "./ProductData.mjs";
import { getCategory, getParam } from "./utils.mjs";
import { RenderDetails } from "./ProductDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";
const category = getCategory("category");

const dataCategory = new ProductData(category);

const products = await dataCategory.getData(category);

let id = getParam("product");

const product = products.find((item) => item.Id === id);

const render = new RenderDetails(product);

render.init();

loadHeaderFooter();

//async function addToCartHandler(e) {
// e?.preventDefault?.();
// const id = e?.target?.dataset?.id;
// if (!id) return console.warn('Missing data-id on Add to Cart button');

// cart.push(item);
//setLocalStorage("so-cart", cart);
//}

//async function addToCartHandler(e) {
// console.log("Add to Cart button clicked", e);
// e?.preventDefault?.();
// const id = e?.target?.dataset?.id;
// console.log("Product ID to add to cart:", id);
// if (!id) return console.warn("Missing data-id on Add to Cart button");

// document
//  .getElementById('addToCart')
//  ?.addEventListener('click', addToCartHandler);
