async function getProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return res.json();
}

async function getCategories() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  return res.json();
}

async function getCategoryProducts(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.json();
}

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

categoriesDropdown.addEventListener("change", (e) => refreshProducts());

// Products list -----
const productsList = document.getElementById("products");

async function refreshProducts() {
  productsList.innerHTML = "Loading...";

  let products = [];
  if (categoriesDropdown.value) {
    products = await getCategoryProducts(categoriesDropdown.value);
  } else {
    products = await getProducts();
  }

  productsList.innerHTML = "";

  products.forEach((product) => {
    const card = createProductCard(product);
    productsList.append(card);
  });
}

refreshProducts();

// Template -----
const template = document.getElementsByTagName("template")[0];

function createProductCard(product) {
  const card = template.content.cloneNode(true);
  card.querySelector(".image").src = product.image;
  card.querySelector(".title").textContent = product.title;
  card.querySelector(".price").textContent = `$${product.price}`;
  card.querySelector(".description").textContent = `${product.description}`;
  return card;
}
