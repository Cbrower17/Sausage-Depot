let newMeat;
let allMeats;
let newMerch;
let meatBanner;

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
  let meatCard = document.createElement("div");
  meatCard.setAttribute("class", "card");

  // Create front face of the card with the meat image
  let meatCardFront = document.createElement("div");
  meatCardFront.setAttribute("class", "card-front");
  meatCardFront.style.backgroundImage = `url(${meat.image})`;
  meatCardFront.style.backgroundSize = "cover";
  meatCardFront.style.backgroundPosition = "center";
  let meatName = document.createElement("p");
  meatName.setAttribute("class", "card-name");
  meatName.textContent = meat.name;
  meatCardFront.appendChild(meatName);
  let favoriteBtnFront = document.createElement("button");
  if (meat.favorite) {
    favoriteBtnFront.textContent = "★";
  } else {
    favoriteBtnFront.textContent = "☆";
  }
  favoriteBtnFront.setAttribute("class", "card-btn");
  favoriteBtnFront.addEventListener("click", (event) => {
    if (meat.favorite) {
      meat.favorite = false;
      favoriteBtnFront.textContent = "☆";
    } else {
      meat.favorite = true;
      favoriteBtnFront.textContent = "★";
    }
    event.stopPropagation(); // prevent event from propagating to card
  });
  meatCardFront.appendChild(favoriteBtnFront);
  meatCard.appendChild(meatCardFront);

  // Create back face of the card with meat details and add-to-cart button
  let meatCardBack = document.createElement("div");
  meatCardBack.setAttribute("class", "card-back");
  meatCardBack.style.backgroundColor = "#ccc";
  let meatDetails = document.createElement("div");
  meatDetails.setAttribute("class", "card-details");
  meatDetails.textContent = meat.description;
  let meatPrice = document.createElement("p");
  meatPrice.textContent = `$${meat.price} per pound`;
  meatDetails.appendChild(meatPrice);
  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";

  addToCartBtn.addEventListener("click", () => {
    // Add meat to cart
  });

  meatDetails.append(addToCartForm());


  meatDetails.appendChild(addToCartBtn);
  meatCardBack.appendChild(meatDetails);
  meatCard.appendChild(meatCardBack);

  // Add click event listener to flip the card on click
  meatCard.addEventListener("click", () => {
    meatCard.classList.toggle("card-flip");
  });

  document.querySelector("#Meat-Menu").appendChild(meatCard);
}



function renderCheese(cheese) {
  let cheeseCard = document.createElement("div");
  cheeseCard.setAttribute("class", "card");

  // Create front face of the card with the cheese image and name
  let cheeseCardFront = document.createElement("div");
  cheeseCardFront.setAttribute("class", "card-front");
  cheeseCardFront.style.backgroundImage = `url(${cheese.image})`;
  cheeseCardFront.style.backgroundSize = "cover";
  cheeseCardFront.style.backgroundPosition = "center";
  let cheeseName = document.createElement("div");
  cheeseName.setAttribute("class", "card-name");
  cheeseName.textContent = cheese.name;
  cheeseCardFront.appendChild(cheeseName);
  let favoriteBtnFront = document.createElement("button");
  if (cheese.favorite) {
    favoriteBtnFront.textContent = "★";
  } else {
    favoriteBtnFront.textContent = "☆";
  }
  favoriteBtnFront.setAttribute("class", "card-btn favorite-btn");
  favoriteBtnFront.addEventListener("click", (event) => {
    if (cheese.favorite) {
      cheese.favorite = false;
      favoriteBtnFront.textContent = "☆";
    } else {
      cheese.favorite = true;
      favoriteBtnFront.textContent = "★";
    }
    event.stopPropagation(); // prevent event from propagating to card
  });
  cheeseCardFront.appendChild(favoriteBtnFront);
  cheeseCard.appendChild(cheeseCardFront);

  // Create back face of the card with cheese details and price
  let cheeseCardBack = document.createElement("div");
  cheeseCardBack.setAttribute("class", "card-back");
  cheeseCardBack.style.backgroundColor = "#ccc";
  let cheeseDetails = document.createElement("div");
  cheeseDetails.setAttribute("class", "card-details");
  cheeseDetails.textContent = cheese.description;
  let cheesePrice = document.createElement("div");
  cheesePrice.setAttribute("class", "card-price");
  cheesePrice.textContent = `$${cheese.price}`;
  let addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.setAttribute("class", "card-btn");
  cheeseDetails.append(addToCartForm());
  cheeseCardBack.appendChild(cheeseDetails);
  cheeseCardBack.appendChild(cheesePrice);
  cheeseCardBack.appendChild(addToCartBtn);
  cheeseCard.appendChild(cheeseCardBack);

  // Add click event listener to flip the card on click
  cheeseCard.addEventListener("click", () => {
    cheeseCard.classList.toggle("card-flip");
  });

  document.querySelector("#Meat-Menu").appendChild(cheeseCard);
}




function renderPage() {
  let logoImg = document.createElement("img");
  logoImg.setAttribute("src", "sources/sausage-depot-high-resolution-color-logo (2).png");
  logoImg.setAttribute("class", "logo");

  let meats = document.createElement("h2");
  meats.textContent = "Meats";
  meats.addEventListener("click", () => {
    showAll();
  });

  let favs = document.createElement("h2");
  favs.textContent = "Favorites";
  favs.setAttribute("id", "favs");
  favs.addEventListener("click", () => {
    showFavorites();
  });

  let showMeat = document.createElement("h2");
  showMeat.textContent = "Show Me The Meat";

  let merch = document.createElement("h2");
  merch.textContent = "Merch";
  merch.addEventListener("click", () => {
    showMerch();
  });

  let cheese = document.createElement("h2");
  cheese.textContent = "Cheese";
  cheese.addEventListener("click", () => {
    showCheese();
  });

  let sideBar = document.querySelector("#sideBar");
  sideBar.append(logoImg, meats, cheese, favs, showMeat, merch);
}

function showFavorites() {
  console.log(allMeats);
  console.log('i got clicked')
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
function showCheese() {
  clearPage();
  fetch("http://localhost:3000/cheese")
.then((res) => res.json())
.then((cheeseItems) => {
  cheeseItems.forEach((cheese) => {
    renderCheese(cheese);
  });
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
  merchCard.append(h3, img, addToCartForm(), p);
  document.querySelector("#Meat-Menu").appendChild(merchCard);
  
}
function showAll(){
  clearPage();
  meatBanner = document.createElement("div");
  let bannerImg = document.createElement("img");
  bannerImg.src = "sources/ezgif.com-crop.gif"
  bannerImg.setAttribute("id", "logo");
  bannerImg.setAttribute("style", "height: 31.8vh; width: 111vh; padding-left: 0px;");
  bannerImg.setAttribute("alt", "logo");
  meatBanner.append(bannerImg);
  document.querySelector("#Meat-Menu").appendChild(meatBanner);

  allMeats.forEach((meat) => {
    
      renderMeat(meat);
});
}

function addToCartForm(){
  let addToCartForm = document.createElement("form");
  let quantityInput = document.createElement("input");
  let submit = document.createElement("input");
  quantityInput.setAttribute("type", "number");
  addToCartForm.setAttribute("input", "text");
  quantityInput.setAttribute("placeholder","hey add some meats!");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Add to Cart");
  addToCartForm.append(submit,quantityInput);
  addToCartForm.addEventListener("click",(e) => {
   e.stopPropagation()
  })
  return addToCartForm;
  
}