import ProductData from "./ProductData.mjs";

import { getCategory } from "./utils.mjs";

import categoryProductsDetail from "./categoryProductListing.mjs";

import { loadHeaderFooter } from "./utils.mjs";

const category = getCategory("category");

const dataSource = await new ProductData(category);

const categoryListElement = document.querySelector(".category-product-list");

const products = new categoryProductsDetail(
  dataSource,
  categoryListElement,
  category,
);

loadHeaderFooter();

products.init();
