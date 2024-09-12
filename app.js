console.log(`hello`);

// we need two global values
// one or the other below

let cookieCount = 0;
let cookiesPerSecond = 0;

let stats = { cookieCount: 0, cookiesPerSecond: 0 };

// DOM manipulation
// select DOM elements (button, imgs, p, ...)

// a way to score the shop upgrades that come from the api

let shopUpgrades = [];

// fetch items from the API
// url:    https://cookie-upgrade-api.vercel.app/api/upgrades

function getShopUpgrades() {
  // fetch the data
  // translate into JSON
  // PUSH the items into shop upgrades array above
}

// event listener to click on the cookie button
// select the cookie img or button
// write your event handler and event listener

function handleCookieClick() {
  // when i click on the cookie the cookie count goes up by one
}

addEventListener(`click`, handleCookieClick);

// we need a timer that increases the cookies per second value by one every second
setInterval(function () {
  // increase the value of cookieCount by one every second
  // i want to update the values that i displayed on the page
  // i want to store this value in local storage (this task can also be a seperate function
  // for example storeLocalStorage())
}, 1000);

// function storeLocalStorage() {
//   // i store the values in local storage
// }

// =============================================================================================

// extra function blocks to give you other ideas

function renderShopUpgrades() {
  // create DOM elements
  // you will use a loop or array method
  shopUpgrades.forEach(function (upgrade) {
    // for each item in the array, assign the value to a DOM element
    // appened element to DOM
  });
}

function saveLocalStorage() {
  // a method that turns your data into sting soup
  //
}
