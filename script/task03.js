'use strict';

let whiteBox = document.querySelector('footer > div');
let inputBuffer = '';

function updateWhiteBoxContent(event) {
    let keyPressed = event.key;

    inputBuffer += keyPressed;

    inputBuffer = inputBuffer.slice(-42);

    whiteBox.textContent = inputBuffer;
}

document.body.addEventListener('keydown', updateWhiteBoxContent);

