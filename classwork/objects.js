const course = {
    cNumber: "N220",
    cTitle:"Introducto to NEW Media",
    seats: 20,
    enrolled:18,
    avi:function() {
        return this.seats>this.enrolled;
    }
}
console.log(course.cNumber + "open"+course.avi());

course.enrolled=course.enrolled+2;
console.log(course.enrolled);
console.log(course.cNumber + "open"+course.avi());

//window objects

document.getElementById('hwDetails').innerHTML = "Height:"+window.innerHeight+ "<br/>width:"+window.innerWidth;


//button

function IUPUIWebsite(){
    open("http://www.iupui.edu");
}

function printPage() {
    print();
}
//use window.location
document.getElementById('wpDetails').innerHTML=window.location;



//document object
document.getElementById('dpDetails').innerHTML=document.URL;

//update
document.getElementById('update').innerHTML=document.lastModified;

//string objects

function getGreeting(){


    
    let gMsg = document.getElementById('greeting').value;
    gMsg = gMsg.trim();
    let half = gMsg.charAt(gMsg.length/2);

    document.getElementById('messageInfo').innerHTML="Your greeting is"+ gMsg.length+" Characters long and the middle char is "+ half;
}

//
var coolText = document.getElementById('coolText').innerHTML;

console.log(coolText);

document.getElementById('coolText').innerHTML=coolText.toUpperCase();

//preety to really
coolText=coolText.replace("pretty","REALLY");


let classlist = document.getElementById('classes').innerHTML;

let classArray= classlist.split(", ");
console.log(classArray);

//number objects

let myNum= 45.6786756;
 document.getElementById('fixed').innerHTML = myNum.toFixed(1);


 document.getElementById('precise').innerHTML = myNum.toPrecision(5);


 //math objects

 let myPi = Math.PI;
 document.getElementById('round').innerHTML = Math.round(myPi);

 document.getElementById('ceil').innerHTML = Math.ceil (myPi);
 document.getElementById('floor').innerHTML = Math.floor(myPi);


 let rNum= Math.celi(Math.random()*10)+1;
 document.getElementById('random').innerHTML = rNum;


 //date object]
 //today
let today= new Date();
document.write(today);

document.write("<br>Date: " + today.getDate());

document.write("<br>Month: " + today.getMonth());



document.write("<br>Day: " + today.getDay());
document.write("<br>Year: " + today.getFullYear());

//quick date on a page


document.write("<br>Short Today: " + today.toDateString());





























































