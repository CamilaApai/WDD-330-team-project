// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
} 

// helper to get parameter strings
export function getParams (param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

//REVIEW
export async function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin") {
  const htmlStrings = data.map(templateFn);
  if (callback) {
    callback(data);
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export async function loadHeaderFooter() {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");

  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
}

export async function loadTemplate(path) {
  const fetchpath = await fetch(path);
  const template = await fetchpath.text();
  return template;
}
