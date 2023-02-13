let newMeat;
let allMeats;
let newMerch;

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/meats")
    .then((res) => res.json())
    .then((meats) => {
      renderPage();
      allMeats = meats;
      meats.forEach((meat) => {
        renderMeat(meat);
      });
      //favorite();
    });
});

function renderMeat(meat) {
  newMeat = meat;
  let meatCard = document.createElement("div");
  meatCard.setAttribute("class", "card");

  let h3 = document.createElement("h3");
  h3.textContent = meat.name;

  let img = document.createElement("img");
  img.src = meat.image;
  img.setAttribute("class", "meat-avatar");

  let p = document.createElement("p");
  p.textContent = `$${meat.price}`;
  p.setAttribute("class", "meat-price");

  let favoriteBtn = document.createElement("button");
  if(meat.favorite){
    favoriteBtn.textContent = "★";
  }
  else{
    favoriteBtn.textContent = "☆";
  }
  
  favoriteBtn.setAttribute("class", "card-btn");
  favoriteBtn.addEventListener("click", () => {
    if (meat.favorite) {
      meat.favorite = false;
      favoriteBtn.textContent = "☆";
    } else {
      meat.favorite = true;
      favoriteBtn.textContent = "★";
      
    }
    console.log(meat.favorite);
  });

  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.setAttribute("class", "card-btn");

  meatCard.append(h3, img, p, favoriteBtn, addToCartBtn);
  document.querySelector("#Meat-Menu").appendChild(meatCard);
}

function renderPage() {
  let logoImg = document.createElement("img");
  logoImg.setAttribute("src", "sources/sausage-depot-high-resolution-color-logo (2).png");
  logoImg.setAttribute("class", "logo");


  let meats = document.createElement("h2");
  meats.textContent = "Meats";
  meats.addEventListener("click", () => {showAll()});

  let favs = document.createElement("h2");
  favs.textContent = "Favorites";
  favs.setAttribute("id", "favs");
  favs.addEventListener("click", () => {showFavorites()})

  let showMeat = document.createElement("h2");
  showMeat.textContent = "Show Me The Meat";

  let merch = document.createElement("h2");
  merch.textContent = "Merch";
  merch.addEventListener("click", () => {showMerch()})

  let sideBar = document.querySelector("#sideBar");

  sideBar.append(logoImg, meats, favs, showMeat, merch);
}


function showFavorites() {
console.log(allMeats);
console.log('i got cloicked')

clearPage();
allMeats.forEach((meat) => {
  if (meat.favorite) {
    renderMeat(meat);
  }
});
}
function flipCard() {}

function clearPage(){
  let content = document.querySelector("#Meat-Menu");
  content.innerHTML = "";
}

function showMerch() {
  clearPage();

  fetch("http://localhost:3000/merch")
    .then((res) => res.json())
    .then((merchItems) => {

      merchItems.forEach((item) => {
        renderMerch(item);
      });
      //favorite();
    });

}

function renderMerch(item) {
  newMerch = item;
  let merchCard = document.createElement("div");
  merchCard.setAttribute("class", "card");

  let h3 = document.createElement("h3");
  h3.textContent = item.name;

  let p = document.createElement("p");
  p.textContent = `$${item.price}`;


  let img = document.createElement("img");
  img.src = item.image;
  img.setAttribute("class", "meat-avatar");


  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.setAttribute("class", "card-btn");

  merchCard.append(h3, img, addToCartBtn, p);
  document.querySelector("#Meat-Menu").appendChild(merchCard);

  
}


function showAll(){
  clearPage();
  allMeats.forEach((meat) => {
    
      renderMeat(meat);
});
}