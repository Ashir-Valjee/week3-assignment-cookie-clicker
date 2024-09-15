console.log(`hello`);

const cookieSound = new Audio("./assets/cookie-sound.wav");
const buySound = new Audio("./assets/ping-sound.wav");

const audio = document.querySelector(`audio`);

// Set the audio to autoplay and loop
audio.autoplay = true;
audio.loop = true;

// Set the initial volume
audio.volume = 0.15;

// Play the audio
audio.play().catch((error) => {
  console.error("Error playing audio:", error);
});

let shopUpgrades = [];
// get shop upgrade data from api
const url = `https://cookie-upgrade-api.vercel.app/api/upgrades`;
async function getShopUpgrades() {
  const response = await fetch(url);
  const data = await response.json();

  localStorage.setItem("shopData", JSON.stringify(data));
  // window.location.reload();
  // console.log(data);
  return data;
}

function createArray(data) {
  shopUpgrades.length = 0;
  data.forEach((upgrade) => {
    shopUpgrades.push(upgrade);
  });
  createShopItemContainers(shopUpgrades.length);
  populateShopItemContainers(shopUpgrades);
}

async function getDataToShopUpgrades() {
  const data = await getShopUpgrades();
  createArray(data);
  // console.log(shopUpgrades[3]);
}

function createShopItemContainers(shopLength) {
  for (i = 0; i < shopLength; i++) {
    const newDiv = document.createElement("div");

    newDiv.classList.add(`shop-item-container`);
    masterShopContainer.appendChild(newDiv);
    // console.log(newDiv);
  }
}

function populateShopItemContainers(data) {
  shopUpgrades = JSON.parse(localStorage.getItem("shopData"));
  console.log(shopUpgrades[0].cost);
  const boxDivs = document.querySelectorAll(`.shop-item-container`);
  for (i = 0; i < data.length; i++) {
    const itemPurchased = document.createElement("p");
    const itemName = document.createElement("p");
    const itemCost = document.createElement("p");
    const itemIncrease = document.createElement("p");

    const itemButton = document.createElement("button");

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    itemPurchased.classList.add(`upgrade`);
    itemPurchased.id = `purchased-${i}`;
    itemName.classList.add(`upgrade-name`);
    itemName.classList.add(`upgrade`);
    itemName.id = `name-${i}`;
    itemCost.classList.add(`upgrade`);
    itemCost.id = `cost-${i}`;
    itemIncrease.classList.add(`upgrade`);
    itemIncrease.id = `increase-${i}`;
    itemButton.classList.add(`upgrade-button`);
    itemButton.id = `button-${i}`;
    itemPurchased.textContent = amountsPurchased[i];
    itemName.textContent = data[i].name;
    itemCost.textContent = `$C ${data[i].cost}`;
    itemIncrease.textContent = `+ ${data[i].increase}`;
    itemButton.textContent = "Buy";

    boxDivs[i].appendChild(itemPurchased);
    boxDivs[i].appendChild(itemName);
    boxDivs[i].appendChild(itemCost);
    boxDivs[i].appendChild(itemIncrease);
    boxDivs[i].appendChild(itemButton);

    // console.log(itemName);
  }

  let a0 = document.getElementById(`button-0`);
  let b0 = document.getElementById(`purchased-0`);
  console.log(`hell ${b0}`);
  a0.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));
    if (storedStats.cookieCount >= data[0].cost) {
      buySound.play();
      amountsPurchased[0] = amountsPurchased[0] * 1 + 1;
      b0.textContent = amountsPurchased[0];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[0].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a1 = document.getElementById(`button-1`);
  let b1 = document.getElementById(`purchased-1`);
  console.log(`hell ${b1}`);

  a1.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[1].cost) {
      buySound.play();
      amountsPurchased[1] = amountsPurchased[1] * 1 + 1;
      b1.textContent = amountsPurchased[1];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[1].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
    // amountsPurchased[1] = amountsPurchased[1] * 1 + 1;
    // b1.textContent = amountsPurchased[1];
    // localStorage.setItem("amountsPurchased", JSON.stringify(amountsPurchased));
  });

  let a2 = document.getElementById(`button-2`);
  let b2 = document.getElementById(`purchased-2`);
  console.log(`hell ${b2}`);
  a2.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[2].cost) {
      buySound.play();
      amountsPurchased[2] = amountsPurchased[2] * 1 + 1;
      b2.textContent = amountsPurchased[2];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[2].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a3 = document.getElementById(`button-3`);
  let b3 = document.getElementById(`purchased-3`);
  console.log(`hell ${b3}`);
  a3.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[3].cost) {
      buySound.play();
      amountsPurchased[3] = amountsPurchased[3] * 1 + 1;
      b3.textContent = amountsPurchased[3];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[3].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a4 = document.getElementById(`button-4`);

  let b4 = document.getElementById(`purchased-4`);
  console.log(`hell ${b4}`);
  a4.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[4].cost) {
      buySound.play();
      amountsPurchased[4] = amountsPurchased[4] * 1 + 1;
      b4.textContent = amountsPurchased[4];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[4].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a5 = document.getElementById(`button-5`);

  let b5 = document.getElementById(`purchased-5`);
  console.log(`hell ${b5}`);
  a5.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[5].cost) {
      buySound.play();
      amountsPurchased[5] = amountsPurchased[5] * 1 + 1;
      b5.textContent = amountsPurchased[5];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[5].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a6 = document.getElementById(`button-6`);

  let b6 = document.getElementById(`purchased-6`);
  console.log(`hell ${b6}`);
  a6.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[6].cost) {
      buySound.play();
      amountsPurchased[6] = amountsPurchased[6] * 1 + 1;
      b6.textContent = amountsPurchased[6];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[6].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a7 = document.getElementById(`button-7`);

  let b7 = document.getElementById(`purchased-7`);
  console.log(`hell ${b7}`);
  a7.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[7].cost) {
      buySound.play();
      amountsPurchased[7] = amountsPurchased[7] * 1 + 1;
      b7.textContent = amountsPurchased[7];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[7].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a8 = document.getElementById(`button-8`);

  let b8 = document.getElementById(`purchased-8`);
  console.log(`hell ${b8}`);
  a8.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[8].cost) {
      buySound.play();
      amountsPurchased[8] = amountsPurchased[8] * 1 + 1;
      b8.textContent = amountsPurchased[8];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[8].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });

  let a9 = document.getElementById(`button-9`);

  let b9 = document.getElementById(`purchased-9`);
  console.log(`hell ${b9}`);
  a9.addEventListener(`click`, function () {
    storedStats = JSON.parse(localStorage.getItem("stats"));

    amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));

    if (storedStats.cookieCount >= data[9].cost) {
      buySound.play();
      amountsPurchased[9] = amountsPurchased[9] * 1 + 1;
      b9.textContent = amountsPurchased[9];
      localStorage.setItem(
        "amountsPurchased",
        JSON.stringify(amountsPurchased)
      );
      storedStats.cookieCount = storedStats.cookieCount - data[9].cost;
      localStorage.setItem("stats", JSON.stringify(storedStats));
    }
  });
}

const masterShopContainer = document.getElementById(`master-shop-container`);

if (localStorage.getItem("amountsPurchased") === null) {
  // If the item doesn't exist, store the variable
  let amountsPurchased = [];
  for (i = 0; i < 10; i++) {
    amountsPurchased[i] = [0];
  }
  localStorage.setItem("amountsPurchased", JSON.stringify(amountsPurchased));
  console.log(`Stored ${amountsPurchased} in local storage under the key `);
} else {
  console.log(`The key amountsPurchased already exists in local storage.`);
}

let amountsPurchased = [];
for (i = 0; i < 10; i++) {
  amountsPurchased[i] = [0];
}
// getShopUpgrades();
createShopItemContainers(shopUpgrades.length);

getDataToShopUpgrades();

// ===========================================================================================

if (localStorage.getItem("stats") === null) {
  // If the item doesn't exist, store the variable
  let storedStats = { cookieCount: 0, cookiesPerSecond: 1 };
  localStorage.setItem("stats", JSON.stringify(storedStats));
  console.log(`Stored ${storedStats} in local storage under the key `);
} else {
  console.log(`The key stats already exists in local storage.`);
}

// ==========
// reset button
function reset() {
  localStorage.clear();
  console.log("Local storage has been cleared.");
  window.location.reload();
}

// ======================================================================================================
// select DOM elements
const cookieButton = document.getElementById(`cookie-button`);
const cookieCounter = document.getElementById(`cookies-total`);
const cookiePerSecond = document.getElementById(`cookies-per-second`);
const resetButton = document.getElementById(`reset-button`);
console.log(cookieCounter);

resetButton.addEventListener(`click`, reset);

// Cookie click button - increase count by one on each button press
function cookieClick() {
  // localStorage.setItem("stats", JSON.stringify(stats));
  cookieSound.play();
  storedStats = JSON.parse(localStorage.getItem("stats"));
  console.log(storedStats);
  storedStats.cookieCount = storedStats.cookieCount + 1;
  console.log(storedStats);
  cookieCounter.innerText = `cookies total: ${storedStats.cookieCount}`;
  localStorage.setItem("stats", JSON.stringify(storedStats));
}

cookieButton.addEventListener("click", cookieClick);

// ====
let upgradeFactor = 0;
// ====
// we need to update total cookie count every second by adding the cookies per second amount
setInterval(function () {
  // localStorage.setItem("stats", JSON.stringify(stats));
  storedStats = JSON.parse(localStorage.getItem("stats"));
  amountsPurchased = JSON.parse(localStorage.getItem("amountsPurchased"));
  shopData = JSON.parse(localStorage.getItem("shopData"));
  console.log(storedStats);
  upgradeFactor = 0;
  console.log(upgradeFactor);
  for (i = 0; i < 10; i++) {
    upgradeFactor = upgradeFactor + amountsPurchased[i] * shopData[i].increase;
  }
  console.log(upgradeFactor);
  storedStats.cookiesPerSecond = 1 + upgradeFactor;
  console.log(storedStats.cookiesPerSecond);
  storedStats.cookieCount =
    storedStats.cookieCount + storedStats.cookiesPerSecond;
  cookieCounter.innerText = `cookies total: ${storedStats.cookieCount}`;
  cookiePerSecond.innerText = `cookies per second: ${storedStats.cookiesPerSecond}`;
  localStorage.setItem("stats", JSON.stringify(storedStats));
  document.title = `COOKIE CLICKER - ${storedStats.cookieCount}`;
}, 1000);
