// selector.js

document.addEventListener("DOMContentLoaded", function() {
    // Select all hyperlink elements without target="_blank" attribute
    var links = document.querySelectorAll('a:not([target="_blank"])');

    // Apply semi-transparent style to selected elements
    links.forEach(function(link) {
        link.style.opacity = 0.5;
    });
});