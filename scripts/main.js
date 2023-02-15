const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menu");
const productDetail = document.querySelector("#productDetail");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const shoppingCart = document.querySelector(".shopping-cart");
const arrow = document.querySelector(".arrow");
const btnClose = document.querySelector(".product-detail-close");
const budge = document.createElement("div");

navbarShoppingCart.appendChild(budge);

budge.innerHTML = 2;

navbarEmail.addEventListener("click", navbarEmailClose);
menuBurger.addEventListener("click", menuMobileActive);
navbarShoppingCart.addEventListener("click", myOrder);
arrow.addEventListener("click", myOrderClose);
btnClose.addEventListener("click", closeItem);

function navbarEmailClose() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
}

function menuMobileActive() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function myOrder() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function myOrderClose() {
  shoppingCartContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Moto",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

for (product of productList) {
  const productCard = document.createElement("div");
  const productImage = document.createElement("img");
  const productInfo = document.createElement("div");
  const productFeatures = document.createElement("div");
  const price = document.createElement("p");
  const name = document.createElement("p");
  const figure = document.createElement("figure");
  const figureImage = document.createElement("img");
  const imageDetail = document.createElement("img");

  productImage.style.cursor = "pointer";

  productImage.addEventListener("click", openDetails);

  imageDetail.setAttribute("src", product.image);
  figureImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figure.appendChild(figureImage);

  price.innerHTML = `$${product.price}`;
  name.innerHTML = product.name;

  productFeatures.append(price, name);
  productCard.classList.add("product-card");
  productImage.setAttribute("src", product.image);
  productInfo.classList.add("product-info");
  productInfo.append(productFeatures, figure);
  productCard.append(productImage, productInfo);
  cardsContainer.appendChild(productCard);
}

function openDetails() {
  productDetail.classList.remove("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}

function closeItem() {
  productDetail.classList.add("inactive");
}
