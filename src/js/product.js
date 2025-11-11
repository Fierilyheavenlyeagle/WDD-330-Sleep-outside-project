import ProductData from "./ProductData.mjs";
import { getParam, getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
console.log("Data source initialized:", dataSource);

const productId = getParam("product");
console.log("Product ID:", productId);

const product = new ProductDetails(productId, dataSource);
product.init();
console.log("Product details initialized:", product);

function addProductToCart(item) {
  let cart = getLocalStorage("so-cart");
  if (!Array.isArray(cart)) {
    if (cart && typeof cart === "object") {
      cart = Object.values(cart);
    } else {
      cart = [];
    }
  }

  cart.push(item);
  setLocalStorage("so-cart", cart);
}

async function addToCartHandler(e) {
  console.log("Add to Cart button clicked", e);
  e?.preventDefault?.();
  const id = e?.target?.dataset?.id;
  console.log("Product ID to add to cart:", id);
  if (!id) return console.warn("Missing data-id on Add to Cart button");

  const productToAdd = await dataSource.findProductById(id);
  console.log("Product found for adding to cart:", productToAdd);
  if (!productToAdd) return console.warn("No product found for id:", id);

  addProductToCart(productToAdd);
}

document
  .getElementById("addToCart")
  ?.addEventListener("click", addToCartHandler);
