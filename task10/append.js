// append.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the input field and button
    var listItemInput = document.getElementById('listItem');
    var addButton = document.getElementById('appendButton');
    var outputContainer = document.getElementById('outputContainer');

    // Function to handle button click event
    function handleButtonClick() {
        // Get the content of the input field
        var inputValue = listItemInput.value;

        // Create a new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'added-div';
        newDiv.textContent = inputValue;

        // Append the new div element to the output container
        outputContainer.appendChild(newDiv);

        // Clear the input field after appending the div
        listItemInput.value = '';
    }

    // Attach the event handler to the button click event
    addButton.addEventListener('click', handleButtonClick);
});
