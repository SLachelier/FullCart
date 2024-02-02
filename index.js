import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //imports initializeApp function from firebase
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; //imports getDatabase function from firebase

const appSettings = {
  databaseURL: "https://full-cart-app-default-rtdb.firebaseio.com/", //database url
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);

  clearInputField();

  addItemToList(inputValue);
});

function clearInputField() {
  inputFieldEl.value = "";
}

function addItemToList(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
