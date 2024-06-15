// Api -----

async function getProducts() {
  const res = await fetch(`/products`);
  return res.json();
}

async function getCategories() {
  const res = await fetch(`/products/categories`);
  return res.json();
}

let products = [];
let currentProducts = [];

// Categories dropdown -----
const categoriesDropdown = document.getElementById("category");

function initDropdown() {
  getCategories().then((result) => {
    result.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      categoriesDropdown.append(option);
    });
  });
}

initDropdown();

categoriesDropdown.addEventListener("change", () => applyFilters());

// Sort dropdown -----
const sortDropdown = document.getElementById("sort");
sortDropdown.addEventListener("change", () => applyFilters());

// Search -----
const searchBar = document.getElementById("search");
searchBar.addEventListener("input", () => applyFilters());

// Products list -----
const productsList = document.getElementById("products");

async function applyFilters() {
  // Fetch products if none exist
  if (products.length == 0) {
    productsList.innerHTML = "Loading...";
    products = await getProducts();
  }

  // Clear html
  productsList.innerHTML = "";

  // Get products
  currentProducts = [...products];

  // Apply category filter
  if (categoriesDropdown.value) {
    currentProducts = currentProducts.filter(
      (p) => p.category == categoriesDropdown.value
    );
  }

  // Apply search filter
  if (searchBar.value) {
    const searchString = searchBar.value.toLowerCase();
    currentProducts = currentProducts.filter((p) =>
      p.title.toLowerCase().includes(searchString)
    );
  }

  // Apply sort filter
  if (sortDropdown.value) {
    currentProducts = currentProducts.sort((p1, p2) => {
      switch (sortDropdown.value) {
        case "price-desc":
          return p2.price - p1.price;
        case "price-asc":
          return p1.price - p2.price;
        case "title":
          return p1.title > p2.title ? 1 : -1;
      }
    });
  }

  currentProducts.forEach((product) => {
    const card = createProductCard(product);
    productsList.append(card);
  });
}

applyFilters();

// Template -----
const template = document.getElementsByTagName("template")[0];

function createProductCard(product) {
  const card = template.content.cloneNode(true);
  card.querySelector(".category").textContent = product.category;
  card.querySelector(".image").src = product.image;
  card.querySelector(".title").textContent = product.title;
  card.querySelector(".price").textContent = `$${product.price}`;
  card.querySelector(".description").textContent = product.description;
  return card;
}
