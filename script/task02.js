'use strict';

let whiteBox = document.querySelector('footer > div');
let count = 0;

function askName() {
    let name = prompt("What's your name?");
    if (name === null || name === "") {
        askName();
    } else {
        let confirmation = confirm("Are you sure that " + name + " is your name?");
        if (confirmation) {
            alert("Hello, " + name + "!");
            whiteBox.textContent = "Hello, " + name + "!";
        } else {
            askName();
        }
    }
}

whiteBox.addEventListener('click', function () {
    askName();
});
