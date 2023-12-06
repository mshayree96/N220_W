function result(){
    var mLoan = parseFloat(document.getElementById('loan').value);
    var mTerm = parseFloat(document.getElementById('term').value);
    var mRate = parseFloat(document.getElementById('rate').value);

    var mIRate= mRate/12/100;
    var numPay= mTerm*12;




    var  monthTotal = (mLoan * (mIRate*Math.pow(1+mIRate, numPay)))/(Math.pow(1+mIRate,numPay)-1);

    document.getElementById('result').innerHTML="Your Monthly payment will be: $ " + Math.ceil( monthTotal).toFixed(2);
}

   
   
