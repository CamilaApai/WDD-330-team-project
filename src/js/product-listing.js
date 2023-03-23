import ProductData from "../js/ProductData.mjs";
import ProductList from "../js/ProductList.mjs";
import {loadHeaderFooter, getParam } from "../js/utils.mjs";

loadHeaderFooter();

const category = getParam("category");
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// first create an instance of our ProductData class.
const element = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const listing = new ProductList(category, dataSource, element);
// finally call the init method to show our products

listing.init();