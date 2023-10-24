// for loops
for (let i=0; i<5; i++){
    document.getElementById('for').innerHTML+=i+ " ";
}

// while loop
let w=0;
while(w<5){
    w++;
    document.getElementById('while').innerHTML+=w+ " ";

}

//Do while loop
let d=10;
do {
    document.getElementById('doWhile').innerHTML+=d+ " ";
    d--;  //how we want to change
}while(d>4);


///story problems
//story problem:1
let months=['january','February','March','April','May','June'];
let monthsText='';
for(let m=0; m<months.length; m++){
    monthsText+=months[m] + "</br>";
    document.getElementById('an1').innerHTML=monthsText;
}

//Story Problem:2
let monthsText2='<ol>';
for(let m=0; m<months.length; m++){
    monthsText2+="<li>"+months[m] + "</li>";
    
}
monthsText2+="</ol>";
document.getElementById('an2').innerHTML=monthsText2;


//Story Problem:3(3parts: start,condition, change)
let slices=9;
while(slices>=2){
    document.getElementById('an3').innerHTML+="There are" + slices + "slices pizza left.</br>";
    slices--;

}
//Story Problem:4
let num=15;
do{
    document.getElementById('an4').innerHTML+="Number Count:" + num + "<br/>";
    num++;
    
}while(num<20);


//Story Problem:5
let today=new Date();
let tDate = today.getDate()-1;
for (let t=50; t>=5; t=t-5){
    document.getElementById('an5').innerHTML+="Number:" + t + "<br/>";
    if(t==tDate){
        document.getElementById('an5').innerHTML+="Thats todays date. <br/>";
    break;

    }

}

//story problem:6
let pSlices=10;
while (pSlices>=1){
    document.getElementById('an6').innerHTML+="Another Slice down the hatch."+pSlices+"left.<br/>";
    pSlices--;
}
document.getElementById('an6').innerHTML+="This is only"+pSlices+"left.";


//story Problem:7
let ticketText='';
for(let t=10; t>=0; t-- ){
    if(t==5){
        ticketText.innerHTML+="Half the tickets are gone. Buy yours Now! <br/>";

    }else if(t==0){
        ticketText.innerHTML+="All tickets have been sold.";

    }else{
        ticketText.innerHTML+="Another ticket is gone. ONly"+ t +"tickets left.<br/>";
    }
    document.getElementById('an7').innerHTML+=ticketText;
}

//For in loops
const Course={
    "cNum":"N220",
    "cTitle":"Intro to javaScript",
    "offering":['Fall','Summer','Spring'],
    "enrolled":20

}

let holiday = "halloween";
for(property in Course){
    document.getElementById('forIn').innerHTML+=property+ ":"+Course[property]+"<br/>";
}


for(property in months){
    document.getElementById('forIn').innerHTML+=month+ ":"+months[month]+"<br/>";
}

for(h in holiday){
    document.getElementById('forIn').innerHTML+= h + ":"+holiday[h]+"<br/>";
}


for(h of holiday){
    document.getElementById('forOf').innerHTML+= h + ":"+holiday[h]+"<br/>";
}

for(h of course){
    document.getElementById('forOf').innerHTML+= h + ":"+course[h]+"<br/>";
}




































