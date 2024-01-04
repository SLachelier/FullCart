let button = document.getElementById('add-button'); //obtains button element

button.addEventListener('click', function addItem(){ //executes function addItem() when button is clicked
    let inputString = document.getElementById('input-field').value; //assigns the input value to inputString
    console.log(inputString);
})