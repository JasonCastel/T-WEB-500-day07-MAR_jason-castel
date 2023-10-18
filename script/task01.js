'use strict'

let white_box = document.querySelector('footer > div')
let count = 0

function count_click() {
    count++
    white_box.textContent = count + " click";
}


white_box.addEventListener('click', count_click)
