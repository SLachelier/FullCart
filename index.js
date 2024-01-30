import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //imports initializeApp function from firebase
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; //imports getDatabase function from firebase

const appSettings = {
  databaseURL: "https://full-cart-app-default-rtdb.firebaseio.com/", //database url
};

const app = initializeApp(appSettings); //initializes firebase app
const database = getDatabase(app); //gets database from firebase app
const dbRef = ref(database); //gets reference to database

const inputFieldEl = document.getElementById("input-field");
let button = document.getElementById("add-button"); //obtains button element
const listEl = document.getElementById("shopping-list"); //obtains ul element

button.addEventListener("click", function addItem() {
  //executes function addItem() when button is clicked
  let inputString = inputFieldEl.value; //assigns the input value to inputString

  push(dbRef, inputString); //pushes inputString to the database

  listEl.innerHTML += `<li>${inputValue}</li>`;
  //clears the input field when the button is clicked
  inputFieldEl.value = "";
});
