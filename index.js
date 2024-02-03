import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //imports initializeApp function from firebase
import {
  getDatabase,
  ref,
  push,
  onValue,
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
});

onValue(shoppingListInDB, function (snapshot) {
  let itemsArray = Object.entries(snapshot.val());

  clearList();

  shoppingListEl.innerHTML = ""; //clears the list before adding the items from the database
  for(let i = 0; i < itemsArray.length; i++){
    let currentItem = itemsArray[i];
    let currentItemID = currentItem[0];
    let currentItemValue = currentItem[1];
    addItemToList(currentItemValue);
  }
  
});

function clearList() {
  shoppingListEl.innerHTML = ""; //clears the list before adding the items from the database
}

function clearInputField() {
  inputFieldEl.value = "";
}

function addItemToList(itemValue) {
  // shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
  let newListItemEl = document.createElement("li");
  newListItemEl.textContent = itemValue;

  shoppingListEl.appendChild(newListItemEl);
}
