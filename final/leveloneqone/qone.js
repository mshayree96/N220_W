document.getElementById('getNameBtn').addEventListener('click', function() {
    getPigLatinName();
});

function getPigLatinName() {
    var firstNameInput = document.getElementById('fName');
    var lastNameInput = document.getElementById('lName');
    var resultParagraph = document.getElementById('result');
    var submissionInfoDiv = document.getElementById('submissionInfo');

    // Get values from input fields
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();

    // Check if both fields are filled
    if (firstName === '' || lastName === '') {
        alert('Please enter both first and last names.');
        return;
    }

    // Convert to Pig Latin
    var pigLatinFirstName = pigLatinConverter(firstName);
    var pigLatinLastName = pigLatinConverter(lastName);

    // Display result
    resultParagraph.textContent = 'Your pig latin name is ' + pigLatinFirstName + ' ' + pigLatinLastName + '.';

    // Display submitted information in the hidden div
    var submittedFirstName = document.getElementById('submittedFirstName');
    submittedFirstName.textContent = pigLatinFirstName;

    var submittedLastName = document.getElementById('submittedLastName');
    submittedLastName.textContent = pigLatinLastName;

    // Show the hidden div
    submissionInfoDiv.classList.remove('hidden');
}

function pigLatinConverter(word) {
    // Convert word to Pig Latin
    var pigLatinWord = word.charAt(1).toUpperCase() + word.substring(2) + word.charAt(0).toLowerCase() + 'ay';

    return pigLatinWord;
}
