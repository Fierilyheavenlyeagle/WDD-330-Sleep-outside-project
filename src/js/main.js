import ProductData from "./ProductData.mjs";

import ProductList from "./ProductList.mjs";

import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");

const productList = new ProductList("tents", dataSource, listElement);

/*const productId = getParam("product");

const backpacksImage = document.getElementById("backpacks");
const hammocksImage = document.getElementById("hammocks");
const sleepingbagsImage = document.getElementById("sleepingbags");
const tentsImage = document.getElementById("tents");

const todo = document.getElementById("todo-output");

async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();

    console.log(users);

    todo.innerHTML =
      "<h3>User Names:</h3><ul>" +
      users
        .map((user) => `<li>${user.name}></li><li>${user.email}></li>`)
        .join("") +
      "</ul>";
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}

todo.textContent = "Loading...";
getTodo();*/

productList.init();

loadHeaderFooter();
