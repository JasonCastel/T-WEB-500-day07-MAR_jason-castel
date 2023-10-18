'use strict';

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let infoBox = document.querySelector('footer div:last-child');
    let isDragging = false;
    let startX, startY;
    let squareX = 50; // Initial X-coordinate of the square
    let squareY = 50; // Initial Y-coordinate of the square
    const squareSize = 50; // Size of the black square

    // Function to draw the black square
    function drawSquare(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, squareSize, squareSize);
    } 

    // Function to update the info box with current square position
    function updateInfoBox(x, y) {
        infoBox.textContent = `New coordinates => {x: ${x}, y: ${y}}`;
    }

    // Event listener for mouse down to start dragging
    canvas.addEventListener('mousedown', function (e) {
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
    });

    // Event listener for mouse move to drag the square
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            let offsetX = e.clientX - startX;
            let offsetY = e.clientY - startY;
            squareX += offsetX;
            squareY += offsetY;

            // Ensure the square stays within the canvas boundaries
            squareX = Math.max(0, Math.min(canvas.width - squareSize, squareX));
            squareY = Math.max(0, Math.min(canvas.height - squareSize, squareY));

            drawSquare(squareX, squareY);
            updateInfoBox(squareX, squareY);

            startX = e.clientX;
            startY = e.clientY;
        }
    });

    // Event listener for mouse up to stop dragging
    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Initial draw of the square at its initial position
    drawSquare(squareX, squareY);
    updateInfoBox(squareX, squareY);
});
