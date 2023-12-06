// let vs var
let x=10;
if(x=10){
    let x=20;
    document.getElementById('s1').innerHTML="<p>X where x=20: "+ x+"</p>";




}
document.getElementById('s1').innerHTML+="<p>Default X: "+ x+"</p>";
    
//var
var y=10;
if(y==10){
    var y=20;
    document.getElementById('s1').innerHTML+="<p>Y where y=20: "+ y+"</p>";




}
document.getElementById('s1').innerHTML+="<p>Default Y: "+ x+"</p>";

let z=true;
function fnScope(){
  
    if(z){
        let z=false;
        console.log(z);

    }

}
fnScope();
console.log(z);

//default parameters
function multiplication(a,b=2){
    return a*b;

}

document.getElementById('s2').innerHTML = "<p>"+multiplication(5)+"</br>"+ multiplication(5,8)+"</p>";

//multiline text
//let t1="Hello World
//i dont know";

let t2=`Hello World
javascript is awsome
its cold outside
`;

document.getElementById('s8').innerHTML=t2
///template literrals 
var firstName="Gary";
var lastName="Smith";

//"My name is"+firstName + ""+lastName +"."

document.getElementById('s3').innerHTML=`<p>My name is ${firstName} ${lastName}.</p>`


//arrow functions

function fullName(f,l){
    return `${f} ${l}`;
}
document.getElementById('s4').innerHTML=`Traditional Function:${fullName(firstName, lastName)}</p>`;
//one line function
fullName1=(f,l)=>`${f} ${l}`;
document.getElementById('s4').innerHTML=`Traditional Function:${fullName1(firstName, lastName)}</p>`;


//multiline
fullNme2=(f,l)=>{
    console.log(f,l);
    return`${f} ${l}`;
}
document.getElementById('s4').innerHTML=`Traditional Function:${fullName2(firstName, lastName)}</p>`;




//classes 
class Book{
    constuctor(tittle,author,pubDate){
        this.title=title;
        this.author=author;
        this.pubDate=pubDate;

    }
}

const jsBook=new Book("JavaScript","code Master", 2020);
document.getElementById('s5').innerHTML=`<p>Title:${jsBook.tittle}by ${jsBook.author}<br/>PUblished in ${jsBook.pubDate}</p>`    



//array dstruction
const course= ["N220","Intro to javaScript"];
let [courseNum, courseTitle]=course;

document.getElementById('s7_array').innerHTML=`<p>${courseNum}: ${courseTitle}</p>`;
let [t,fn,mn,ln]= ['Mr','Grey','todd','Smith', 'Jr'];


document.getElementById('s7_array').innerHTML=`<p>${t} ${fn} ${ln}</p>`;

let g=4;
let h=9;

//let temp=g; g=h; h=temp;

[g,h]=[h,g]

console.log(g,h);













    