const prompt = require('prompt-sync')();

let list = ['ajay', 'vijay', 'sanjay', 'dilip', 'deepak'];

let name = prompt("Enter your name: ").toLowerCase(); // Convert user input to lowercase

// Assume the name is not in the list initially
let invited = false;

for (let i = 0; i < list.length; i++) {
    if (list[i] === name) {
        console.log("Welcome");
        invited = true;
        break;
    }
}

// After the loop, if the name was not found
if (!invited) {
    console.log("Sorry!! But you are not invited");
}




///2nd Aprroch

// let list = ['ajay', 'vijay', 'sanjay', 'Dilip', 'Deepak'];
// let name = 'ajay';
// let isInvited = false; // Flag to check if the name is in the list

// for (let i = 0; i < list.length; i++) {
//     if (list[i] === name) {
//         console.log("Welcome");
//         isInvited = true; // Set flag to true if the name is found
//         break; // Exit the loop once the name is found
//     }
// }

// if (!isInvited) {
//     console.log("Sorry !! but you are not invited");
// }


//3rd approach

// Array of invited guests

// let guestList = ['ajay', 'vijay', 'sanjay', 'dilip', 'deepak'];

// // Function to check if a guest is invited
// function checkGuest(name) {
//     if (guestList.includes(name.toLowerCase())) {
//         console.log("Welcome");
//     } else {
//         console.log("Go away");
//     }
// }

// // Example guest names to check
// let guestsToCheck = ['Ajay', 'Ravi', 'Deepak', 'Neha'];

// // Check each guest
// guestsToCheck.forEach(guest => {
//     checkGuest(guest);
// });
