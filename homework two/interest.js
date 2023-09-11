function CalculateInterest(){
    var Principal = parseFloat(document.getElementById('Principal').value);
    var Interestrate =parseFloat (document.getElementById('Interestrate').value);
    var Time = parseFloat (document.getElementById('Time').value);

    var total= Principal * (1+(Interestrate / 100) * Time);

    var resultElement= document.getElementById('result');
    resultElement.textContent="Total Amount: $" + total.toFixed(2);

}