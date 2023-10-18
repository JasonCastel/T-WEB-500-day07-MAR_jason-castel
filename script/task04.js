'use strict';

document.addEventListener('DOMContentLoaded', function () {

    let increaseButton = document.querySelector('footer button:nth-child(1)');
    let decreaseButton = document.querySelector('footer button:nth-child(2)');
    let colorDropdown = document.querySelector('footer select');

    increaseButton.addEventListener('click', function () {
        changeFontSize(2);
    });

    decreaseButton.addEventListener('click', function () {
        changeFontSize(-2);
    });

    colorDropdown.addEventListener('change', function () {
        changeBackgroundColor(colorDropdown.value);
    });

    function changeFontSize(change) {
        let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
        document.body.style.fontSize = (currentSize + change) + 'px';
    }

    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
});
