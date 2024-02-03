import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //imports initializeApp function from firebase
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
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
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());

    clearList();

    shoppingListEl.innerHTML = ""; //clears the list before adding the items from the database
    for(let i = 0; i < itemsArray.length; i++){
      let currentItem = itemsArray[i]; //currentItem is an array with two elements: the key and the value of the item in the database
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      addItemToList(currentItem);
    }
  }else {
    shoppingListEl.innerHTML = `<p>There are no items here yet. Add one to get started!</p>`;
  }
  
});

function clearList() {
  shoppingListEl.innerHTML = ""; //clears the list before adding the items from the database
}

function clearInputField() {
  inputFieldEl.value = "";
}

function addItemToList(item) {
  let itemID = item[0]; //item[0] is the key of the item in the database
  let itemValue = item[1]; //item[1] is the value of the item in the database

  let newListItemEl = document.createElement("li");
  newListItemEl.textContent = itemValue;

  newListItemEl.addEventListener('click', function (){
    let dbItemLocation = ref(database, `shoppingList/${itemID}`);
    remove(dbItemLocation);

  })
    shoppingListEl.appendChild(newListItemEl);

}