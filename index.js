import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //imports initializeApp function from firebase
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; //imports getDatabase function from firebase

const appSettings = {
    databaseURL: "https://full-cart-app-default-rtdb.firebaseio.com/" //database url
}

const app = initializeApp(appSettings); //initializes firebase app
const database = getDatabase(app); //gets database from firebase app
const dbRef = ref(database); //gets reference to database

let button = document.getElementById('add-button'); //obtains button element

button.addEventListener('click', function addItem(){ //executes function addItem() when button is clicked
    let inputString = document.getElementById('input-field').value; //assigns the input value to inputString
    
    push(dbRef, inputString); //pushes inputString to the database
})