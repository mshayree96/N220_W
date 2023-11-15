function validateForm(){
    if(validForm){
        let items=document.querySelector('ul li');
        items[0].innerText+=nameVal;
        items[0].innerText+=addVal;
        items[0].innerText+=cityVal;
        items[0].innerText+=zipVal;
        items[0].innerText+=phoneVal;
        items[0].innerText+=emailVal;

    }
    let validForm=true;
    console.log("got inside fn");
    //Zip
    let zipVal=document.getElementById('zip').value;
    let valZip=/^\d{5}$/;
    if(!valZip.test(zipVal)){
        document.getElementById('zipError').innerText = "Your zip code must contain five numbers";
        validForm=false;

    }else {
        document.getElementById('zipError').innerText = "";

    }

    //Validate phonenumber
    let phoneVal = document.getElementById('phone').value;
    let valPhone= /^([0-9]{3})-[0-9]{3}-[0-9]{4}$/;
    if(!valPhone.test(phoneVal)){
        document.getElementById('phoneError').innerText = "Your phone numebr must be end following format";
        validForm=false;

    }else {
        document.getElementById('phoneError').innerText = "";


    }


    //Validate email*****************

    let emailVal=document.getElementById('myEmail').value;
    //atleast one letter numebr or these symbols:! # $ % .
    //@ symbol
    //at least one letter number or dash after the @ symbol and before the . period
    //. period 
    // 2 or 3 letters after period

    let valEmail=/^([a-zA-Z0-9!#$%.]+)@[a-zA-Z0-9-]+.([a-zA-Z]{2,3})$/;
    if(!valEmail.test(emailVal)){
        document.getElementById('emailError').innerText = "Your email must be end following format";
        validForm=false;


    }else {
        document.getElementById('emailError').innerText = "";



}
//get values for name, address and city
let nameVal=document.getElementById('myName').value;
let addVal=document.getElementById('address').value;
let cityVal=document.getElementById('city').value;





}



document.getElementsByTagName('form')[0].addEventListener('submit',function(event){
    event.preventDefault();//prevent the default from submission
    validateForm();//function to validate forms

})
