
function validateZipCode(zipCode) {
    
    var zipCodeRegex = /^\d{5}(-\d{4})?$/;
    return zipCodeRegex.test(zipCode);
}


function validateCreditCard(creditCard) {
    
    var creditCardRegex = /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/;
    return creditCardRegex.test(creditCard);
}

function validatePhoneNumber(phoneNumber) {

    var phoneRegex = /^(\d{10}|\(\d{3}\)[- ]?\d{3}[- ]?\d{4}|\d{3}[- ]?\d{3}[- ]?\d{4}|\d{3}[. ]?\d{3}[. ]?\d{4})$/;
    return phoneRegex.test(phoneNumber);
}


document.getElementById('zip').addEventListener('blur', function () {
    var zipInput = this.value;
    var resultParagraph = document.getElementById('zipAns');
    resultParagraph.textContent = validateZipCode(zipInput) ? 'Valid Zip Code' : 'Invalid Zip Code';
});

document.getElementById('ccard').addEventListener('blur', function () {
    var ccInput = this.value;
    var resultParagraph = document.getElementById('ccAns');
    resultParagraph.textContent = validateCreditCard(ccInput) ? 'Valid Credit Card' : 'Invalid Credit Card';
});

document.getElementById('phone').addEventListener('blur', function () {
    var phoneInput = this.value;
    var resultParagraph = document.getElementById('phoneAns');
    resultParagraph.textContent = validatePhoneNumber(phoneInput) ? 'Valid Phone Number' : 'Invalid Phone Number';
});
