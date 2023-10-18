'use strict';

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let pauseButton = document.querySelector('footer button:nth-child(1)');
    let stopButton = document.querySelector('footer button:nth-child(2)');
    let muteButton = document.querySelector('footer button:nth-child(3)');
    let audio = new Audio('https://brapaud.fr/assets/music.mp3');
    
    


    function drawTriangle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(6, 6);
        ctx.lineTo(14, 10);
        ctx.lineTo(6, 14);
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    drawTriangle();
    canvas.addEventListener('click', function () {
        audio.play();
    });
    
    pauseButton.addEventListener('click', function () {
        audio.pause();
    });

    stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
    });

    muteButton.addEventListener('click', function () {
        if (audio.muted) {
            audio.muted = false;
        } else {
            audio.muted = true;
        }
    
    });
});
