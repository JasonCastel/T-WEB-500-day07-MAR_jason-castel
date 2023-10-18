// blue.js

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll('p');

    // Function to toggle the "highlighted" class on click
    function toggleHighlightClass() {
        this.classList.toggle('highlighted');
    }

    // Attach hover event to change text color
    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener('mouseover', function() {
            this.style.color = 'blue';
        });

        paragraph.addEventListener('mouseout', function() {
            this.style.color = ''; // Reset text color on mouseout
        });

        // Attach click event to toggle "highlighted" class
        paragraph.addEventListener('click', toggleHighlightClass);
    });
});
