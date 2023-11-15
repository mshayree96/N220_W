let stringText =document.getElementById('string');
let zipText =document.getElementById('zip');
let ccText =document.getElementById('ccard');
let phoneText =document.getElementById('phone');

//string
function validateString(){
    console.log('here');
    let vs1=/ralph/i;
    let vs2=/^(cat)/;
    let vs3=/dog$/;

    document.getElementById('stringAns').innerText= vs3.text(stringText.value)
}
stringText.addEventListener('blur',validateString);
function validateZip(){
    console.log('here');
    let vz1=/^[0-9]{5}$/;
    let vz2=/^\d{5}$/;
    let vz3=/^([0-9]{5} ([0-9]{4}?)$/;

    document.getElementById('zipAns').innerText= vz1.text(zipText.value)
}

zipText.addEventListener('blur',validateZip);


function validateCC(){
    let vc1=/^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;

    document.getElementById('ccAns').innerText= vc1.text(ccText.value)
}

//months 1-12 
let monthRegEx=/0[1-9]|1[012]/;

//Date 1-31

let dateRegEx= /[1-9]|[12][0-9]|3[01]/;

//Year 20th and 21st century
let yearRegEx= /(19|20) [0-9]{2}/;



