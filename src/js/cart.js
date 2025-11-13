import { getLocalStorage, loadHeaderFooter } from "../js/utils.mjs";
import ProductsBought from "../js/ShoppingCart.mjs";

const dataSource = getLocalStorage("so-cart");

const cartListElement = document.querySelector(".cart-product-list");

const productsCartList = new ProductsBought(dataSource, cartListElement);

productsCartList.init();

loadHeaderFooter();
