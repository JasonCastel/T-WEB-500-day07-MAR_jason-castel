document.addEventListener("DOMContentLoaded", function() {
    var firstButton = document.querySelector('button');

    function handleButtonClick() {
        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.display = 'none';
        });
    }

    firstButton.addEventListener('click', handleButtonClick);
});
