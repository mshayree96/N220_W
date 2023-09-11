function changeTxt(){
    document.getElementById('changeTxt').innerHTML="This Txt has been changed";

}

changeTxt();

function btmTxt(){
    document.write("Thus function does not take parameters.");
}

btmTxt(); 

var greeting = function(){
    console.log("Hello World");
}
greeting();

let band = "Gin Blossoms";
function favBand(b){
    document.getElementById('favBand').innerHTML = "My fav band is "+ b;
}

favBand(band);

favBand("Teddy Swims");


var fName= function(){
    console.log("Maisha");

}
fName();


//another way to console
function logit(name){
    console.log(name);
}
logit("greg");

//more than one parameetrs

var rheight= 12;
var rWidth=23;
 function recPerm(h,w){
    let perimeter = 2*h+2*w;
    return perimeter;
    
 }
 document.getElementById('panswer').innerHTML= recPerm(rheight, rWidth) + "feet.";

console.log(recPerm(5,6));


//user input
function calcArea(){
    var h = documnet.getElementById('height').value;
    var h = documnet.getElementById('width').value;

    let area = h*w;
    document.getElementById('answer').innerHTML= area + "square feet";

}

//test function for return two values

function test(){
    return true;
    return false;
}
function recTotal (h,w){
    let perm= recPerm(h,w);
    let area =h*w;
    let recValues =[perm, area];
    return recValues;

}

document.getElementById(multiAnswer).innerHTML= "<ul><li>Perimeter:"+ recTotal(rheight,rWidth)[0] "</li><li>Area:" + recTotal(rheight,rWidth)[1]+"</li> </ul>";

//Home1 pizza rounding the number.
//alert window to pop-up
var myN= 3.4
document.write(Math.floor(myN));


//button try it

function myFunction(){
    alert("Who goes there?");

}
//button function with parameteer


function wizard(name, job){
    document.getElementById('future').innerHTML= "Welcome" +name+",the"+job+"!"; 

}


function addIteam(){
    let item = prompt("Add Items:");
    console.log(item);
    alert("You have added " +item+"to your list");
}